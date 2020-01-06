import React from 'react';
import './App.css';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './components/Page';

function App() {
  return (
    <Router>
        <Page/>
    </Router>
  );
}

export default App;
