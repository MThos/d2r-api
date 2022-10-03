import React, { useEffect, useState } from "react";
import axios from 'axios';
import { useAuth0 } from "@auth0/auth0-react";
import LoopIcon from '@mui/icons-material/Loop';

const History = (props) => {
  const { isAuthenticated, isLoading } = useAuth0();
  const [history_1m, setHistory1M] = useState('0');
  const [history_1h, setHistory1H] = useState('0');
  const [history_1d, setHistory1D] = useState('0');
  const [history_7d, setHistory7D] = useState('0');
  const [history_30d, setHistory30D] = useState('0');

  useEffect(() => {
    if (isAuthenticated) {
      GetHistory(props.api_key);
    }
  }, [isAuthenticated, props.api_key]);

  const GetHistory = (api_key) => {
    const duration_params = [
      1000 * 60,
      1000 * 60 * 60,
      1000 * 60 * 60 * 24,
      1000 * 60 * 60 * 24 * 7,
      1000 * 60 * 60 * 24 * 30
    ]


    axios.all(duration_params.map((param) => axios.get('http://localhost:8000/history', { params: { 'api_key': api_key, 'duration': param }})))
      .then((response) => {
        setHistory1M(response[0]['data']);
        setHistory1H(response[1]['data']);
        setHistory1D(response[2]['data']);
        setHistory7D(response[3]['data']);
        setHistory30D(response[4]['data']);
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
    <>
    <div>
      <div className="api-history-calls">{history_1m}</div>
      <div className="api-history-time">1 MIN</div>
    </div>
    <div>
      <div className="api-history-calls">{history_1h}</div>
      <div className="api-history-time">1 HR</div>
    </div>
    <div>
      <div className="api-history-calls">{history_1d}</div>
      <div className="api-history-time">24 HR</div>
    </div>
    <div>
      <div className="api-history-calls">{history_7d}</div>
      <div className="api-history-time">7 DAY</div>
    </div>
    <div>
      <div className="api-history-calls">{history_30d}</div>
      <div className="api-history-time">30 DAY</div>
    </div>
    </>
  )
}

export default History;