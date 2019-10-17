import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Fads from './Fads'
import Decade from './Decade'

function App() {
  return (
    
    <div>
      <h1>Nostaldja</h1>
      <Link to="/fads">
        <h3>Fads</h3>
      </Link>
      <Link to="/decades">
        <h3>Decades</h3>
      </Link>
      <Route path="/fads" exact component = {Fads} />
      <Route path="/decades" exact component = {Decade} />
    </div>
  );
}

export default App;
