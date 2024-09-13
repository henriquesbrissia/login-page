import { useState } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Welcome from './Welcome';
import Create from './Create';
import Forgot from './Forgot';
import './App.css';

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/" element={<Welcome />}></Route>
        <Route path="/Create" element={<Create />}></Route>
        <Route path="/Forgot" element={<Forgot />}></Route>
      </Routes>
    </Router>
  )
}

export default App
