import './css/app.css';
import React from 'react';
import ReactTooltip from "react-tooltip";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
      <ReactTooltip />
    </div>
  );
}

export default App;
