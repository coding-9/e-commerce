import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link  
} from "react-router-dom";

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;