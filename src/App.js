import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Page from './components/Page';
import './App.css';

function App() {
  return (
    <Router basename={process.env.PUBLIC_URL}>
        <Page/>
    </Router>
  );
}

export default App;
