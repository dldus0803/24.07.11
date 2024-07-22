import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Main from './conponents/main.js';
import Second from '../src/conponents/Second.js';
import Generic from './conponents/generic.js';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/second" element={<Second />} />
        <Route path="/generic" component={<Generic />} />
      </Routes>
    </Router>
  );
}

export default App;
