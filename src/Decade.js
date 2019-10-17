import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";

function Decade() {
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
            <li><Link to ={'/decades/'+ item.id}>{item.start_year}</Link></li>
          ))}
        </ul>
    );
  }

export default Decade;