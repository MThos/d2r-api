import './css/app.css';
import React, { useEffect, useState } from 'react';
import ReactTooltip from "react-tooltip";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import List from './components/List';
import Footer from "./components/Footer";
import Header from './components/Header';
import LoopIcon from '@mui/icons-material/Loop';
import Terms from './components/Terms';
import Privacy from './components/Privacy';
import Cookies from './components/Cookies';
import LoggedOut from './components/LoggedOut';
import NotFound from './components/NotFound';

function App() {
  const { isAuthenticated, user, isLoading } = useAuth0();
  const [apiKey, setAPIKey] = useState();

  useEffect(() => {
    if (isAuthenticated) {
      GetAPIKey(user);
    }
  }, [isAuthenticated, user]);

  const GetAPIKey = (user) => {
    const options = {
      method: 'GET',
      url: 'http://localhost:8000/getapikey',
      params: { 'user': user }
    };
  
    axios.request(options).then((response) => {
      //console.log(response.data['api_key']);
      setAPIKey(response.data['api_key']);
    }).catch((error) => {
      console.log(error);
    });
  }

  if (isLoading) {
    return (
      <div style={{display:'flex', flexDirection:'column', alignItems:'center', gap:'10px', marginTop:'23%', textAlign:'center'}}>
        <LoopIcon id="loading-icon" style={{height:'80px', width:'80px'}} />
        <span style={{fontSize:'1.3rem', fontWeight:'700'}}>LOADING</span>
      </div>
    )
  }

  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={isAuthenticated ? <List api_key={apiKey} /> : <LoggedOut />} />
          <Route path="/endpoints" element={isAuthenticated ? <List api_key={apiKey} /> : <LoggedOut />} />
          <Route path="/cookies" element={<Cookies />} />
          <Route path="/terms" element={<Terms />} />
          <Route path="/privacy" element={<Privacy />} />
          <Route path="/contact" element={<div>CONTACT</div>} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ReactTooltip />
    </div>
  );
}

export default App;
