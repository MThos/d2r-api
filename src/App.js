import './css/app.css';
import React from 'react';
import ReactTooltip from "react-tooltip";
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import List from './components/List';
import Footer from "./components/Footer";
import Header from './components/Header';

function App() {
  return (
    <div className="App">
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<List />} />
        </Routes>
      </BrowserRouter>
      <Footer />
      <ReactTooltip />
    </div>
  );
}

export default App;
