import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import Fads from './Fads'
import Decade from './Decade'

const HomeHeader = styled.header`
display:flex;
flex-direction:column;
height:46px;
width:100%;
top:0;
position:fixed;
color:white;
font-size:18px;`


function App() {
  return (
    <div className="main">
      <HomeHeader>
      <h1 className="nostal">Nostaldja</h1>
      <Link to="/fads">
        <h3 className="fads">Fads</h3>
      </Link>
      <Link to="/decades">
        <h3 className="decades">Decades</h3>
      </Link>
      </HomeHeader>
      <Route path="/fads" exact component = {Fads} />
      <Route path="/decades" exact component = {Decade} />
    </div>
  );
}

export default App;
