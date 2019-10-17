import React, {useState, useEffect} from 'react';
import axios from 'axios';
import { Route, Link } from "react-router-dom";
import './Fads.css'
import Img from 'react-image'

const myComponent = () => (
  <Img
    src={['https://upload.wikimedia.org/wikipedia/commons/d/dc/Ipod-touch-1st-gen.jpg', 
    'https://sixpl.com/wp-content/uploads/2017/09/Blockchain-and-Cryptocurrency-Content-Writer.jpg',
    'https://www.dhresource.com/0x0s/f2-albu-g5-M01-79-07-rBVaJFiuqDSAF3I7AAKBk1FyKy0267.jpg/hand-spinner-fidget-spinner-tri-spinner-diy.jpg',
    'https://upload.wikimedia.org/wikipedia/commons/thumb/6/69/Silly_Bandz_2009.jpg/2560px-Silly_Bandz_2009.jpg',
    'https://us.hellomagazine.com/imagenes/travel/2018012645793/tom-myspace-founder-travel-photographer/0-230-700/myspace-tom-now-t.jpg',
    'https://img.buzzfeed.com/buzzfeed-static/static/2015-06/23/15/enhanced/webdr08/enhanced-22226-1435087265-4.jpg?downsize=715:*&output-format=auto&output-quality=auto'
  ]}
  />
)

function Fads() {
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
        </ul>
    );
  }

export default Fads;