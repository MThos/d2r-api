const express = require('express');
const mongoose = require('mongoose');
const axios = require('axios');
const cors = require('cors');
const app = express();

require('dotenv').config();

app.use(cors());


// MONGODB CONNECTION
const mongo_address = process.env.REACT_APP_MONGO_ADDR
const mongo_port = process.env.REACT_APP_MONGO_PORT
mongoose.connect(`mongodb://${mongo_address}:${mongo_port}/d2r?directConnection=true&serverSelectionTimeoutMS=2000`);
const db = mongoose.connection;
db.on('error', error => console.log(error));
db.once('connected', () => {
  console.log(`MongoDB connected -> ${mongo_address} : ${mongo_port}.`);
  //db.collection('').deleteMany(); // delete collection data
  //db.dropDatabase(); // delete database
});

// RUN SERVER
try {
  const port = process.env.REACT_APP_NODE_PORT
  app.listen(port, () => console.log(`Server is running -> 127.0.0.1 : ${port}.`));
} catch (error) {
  console.log(error);
}

app.get('/amazon', (req, res) => {
  const api_request = 'amazon';
  access_allowed(api_request, res, req);
});

app.get('/gems', (req, res) => {
  const api_request = 'gems';
  access_allowed(api_request, res, req);
});

app.get('/runes', (req, res) => {
  const api_request = 'runes';
  access_allowed(api_request, res, req);
});

app.get('/small-charms', (req, res) => {
  const api_request = 'small_charms';
  access_allowed(api_request, res, req);
});

app.get('/unique-charms', (req, res) => {
  const api_request = 'unique_charms';
  access_allowed(api_request, res, req);
});

app.get('/getapikey', (req, res) => {
  get_api_key(res, req);
});

app.get('/history', (req, res) => {
  call_history(res, req);
});

function call_history(res, req) {
  try {
    db.collection('access_log').countDocuments(
      {
        'api_key': req.query.api_key,
        'success': true,
        'timestamp': {
          $gt: Date.now() - req.query.duration
        }
      }
    ).then((counter) => {
      //console.log(counter);
      res.json(counter);
    });
  } catch (error) {
    console.log(error);
    error_log(error);
  }
}

function get_api_key(res, req) {
  const user_data = JSON.parse(req.query.user);
  try {
    db.collection('access_key').find(
      {
        'email': user_data.email
      }
    ).forEach((response) => {
      if (response) {
        //console.log(response);
        res.json(response);
      }
    });
  } catch (error) {
    console.log(error);
    error_log(error);
  }
}

function access_allowed(api_request, res, req) {
  try {
    db.collection('access_key').countDocuments(
      {
        'api_key': req.query.api_key
      }
    )
    .then((counter) => {
      if (counter === 0) {
        console.log(`Fail -> API request: ${api_request} -> API_KEY: ${req.query.api_key} -> Date: ${new Date().toUTCString()} -> Client: ${req.socket.remoteAddress}`);
        access_log(req.query.api_key, api_request, req.socket.remoteAddress, false);
      } else {
        console.log(`Success -> API request: ${api_request} -> API_KEY: ${req.query.api_key} -> Date: ${new Date().toUTCString()} -> Client: ${req.socket.remoteAddress}`);
        access_key_update(req.query.api_key);
        access_log(req.query.api_key, api_request, req.socket.remoteAddress, true);
        send_api_data(api_request, res);
      }
    });
  } catch (error) {
    console.log(error);
    error_log(error);
  }
}

async function send_api_data(api_request, res) {
  try {
    const json_data = await db.collection(api_request).find({}, {projection:{_id: 0}}).toArray();
    res.json(json_data);
  } catch (error) {
    console.log(error);
    error_log(error);
  }
}

function access_key_update(api_key) {
  try {
    db.collection('access_key').updateOne(
      {
        'api_key': api_key
      },
      {
        $inc: { 'api_calls': 1 },
        $set: { 'last_api_call': new Date().toUTCString() }
      }
    );
  } catch (error) {
    console.log(error);
    error_log(error);
  }
}

function access_log(api_key, api_request, client, success) {
  try {
    db.collection('access_log').insertOne(
      {
        api_key: api_key, 
        api_request: api_request,
        datetimestamp: new Date().toUTCString(),
        timestamp: Date.now(),
        client: client,
        success: success
      }
    );
  } catch (error) {
    console.log(error);
    error_log(error);
  }
}

function error_log(error) {
  try {
    db.collection('error_log').insertOne(
      {
        error: error.message,
        datetimestamp: new Date().toUTCString(),
        timestamp: Date.now(),
      }
    )
  } catch (error) {
    console.log(error);
  }
}