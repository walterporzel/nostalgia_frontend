import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Fads from './Fads'
import Decade from './Decade'
import NewDecade from './NewDecade';

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
      <Link to="/new">Create Decade</Link>
      <Route path="/fads" exact component = {Fads} />
      <Route path="/decades" exact component = {Decade} />
      <Route path="/new" exact component = {NewDecade} />
    </div>
  );
}

export default App;
