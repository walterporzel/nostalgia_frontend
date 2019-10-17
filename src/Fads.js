import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";

function Fads() {
    function deleteDecade(){
      alert("button pressed");
      //Fetch 
      // componentWillUnmount()
    }
    function updateDecade(){
      alert("button pressed")
    }
    const [data, setData] = useState( [] );
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://127.0.0.1:8000/fads',
        );
    
        setData(result.data);
      };
      
      fetchData();
    }, []);
    console.log(data);
    return (
        <ul>
          {data.map(item => (
            <li>{item.name}</li>
          ))}
        <button onClick={updateDecade}>Update</button>
        <button onClick={deleteDecade}>Delete</button>
        </ul>
    );
  }

export default Fads;