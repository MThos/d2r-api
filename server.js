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

// ACCESS KEYS
app.get('/amazon', (req, res) => {
  const api_request = 'amazon';
  access_allowed(req.query.api_key, api_request, res, req);
})

function access_allowed(api_key, api_request, res, req) {
  try {
    db.collection('access_key').countDocuments(
      {
        'api_key': api_key
      }
    )
    .then((counter) => {
      if (counter === 0) {
        console.log(`Fail -> API request: ${api_request} -> API_KEY: ${api_key} -> Date: ${new Date().toUTCString()} -> Client: ${req.socket.remoteAddress}`);
        access_log(api_key, api_request, req.socket.remoteAddress, false);
      } else {
        console.log(`Success -> API request: ${api_request} -> API_KEY: ${api_key} -> Date: ${new Date().toUTCString()} -> Client: ${req.socket.remoteAddress}`);
        access_key_update(api_key);
        access_log(api_key, api_request, req.socket.remoteAddress, true);
        send_api_data(api_request, res);
      }
    });
  } catch (error) {
    console.log(error);
  }
}

function send_api_data(api_request, res) {
  try {
    db.collection(api_request).find(
      {
        'name': api_request
      }
    ).forEach((response) => {
      if (response) {
        //console.log(response);
        res.json(response);
      }
    });
  } catch (error) {
    console.log(error);
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
  }
}

function access_log(api_key, api_request, client, success) {
  try {
    db.collection('access_log').insertOne(
      {
        api_key: api_key, 
        api_request: api_request,
        timestamp: new Date().toUTCString(),
        client: client,
        success: success
      }
    );
  } catch (error) {
    console.log(error);
  }
}