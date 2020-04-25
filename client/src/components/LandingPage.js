import React from 'react';
import { Link } from "react-router-dom";


function LandingPage() {
  return (
    <div className="App">
     <h1>Welcome to task manager. New Here? </h1>
     <Link to="/register">Register </Link>
     <Link to="/login">Login</Link>
    </div>
  );
}

export default LandingPage;
