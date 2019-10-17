import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Fads from './Fads'
import Decade from './Decade'
import NewDecade from './NewDacade'
import DecadeDetail from './DecadeDetail'

function App() {
  return (
    <div>
      <h1>Nostaldja</h1>
      <Link to="/fads">
        <h4>Fads</h4>
      </Link>
      <Link to="/decades">
        <h4>Decades</h4>
      </Link>
      <Link to="/decades/new">New Decade</Link>
      <Route path="/fads" exact component = {Fads} />
      <Route path="/decades" exact component = {Decade} />
      <Route path="/decades/new" exact component = {NewDecade} />
      <Route path="/decades/:id" exact component = {DecadeDetail} />
    </div>
  );
}

export default App;
