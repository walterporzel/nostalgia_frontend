import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import { isMainThread } from 'worker_threads';

function Decade() {

    function deleteDecade(){
      alert("button pressed");
      fetch('http://127.0.0.1:8000/decades' + data, {
        method: "DELETE"
      }).then(res => console.log(res))
      
    }
    function updateDecade(){
      alert("button pressed")
    }
    const [data, setData] = useState( [] );
  
    useEffect(() => {
      const fetchData = async () => {
        const result = await axios(
          'http://127.0.0.1:8000/decades',
        );
    
        setData(result.data);
      };
      
      fetchData();
    }, []);
    console.log(data);
    return (
        <ul>
          {data.map(item => (
            <li>{item.start_year}</li>
          ))}
        <button onClick={updateDecade}>Update</button>
        <button onClick={() => setData(componentWillUnmount())}>Delete</button>
        </ul>
       
  
    );
  }

export default Decade;