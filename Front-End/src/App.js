import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Navigation from "./Components/Navigation";

function App() {
  return (
    <>
        <Router>
            <Navigation/>
        </Router>
    </>
  );
}

export default App;
