import React from 'react';
import Navbar from './components/Navbar/Navbar';
import {
  BrowserRouter as Router,  
} from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"

function App() {
  return (
    <Router>
      <Navbar/>
    </Router>
  );
}

export default App;