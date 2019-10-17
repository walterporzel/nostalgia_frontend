import React, {useState, useEffect} from 'react';
import './App.css';
import axios from 'axios';

function NewDecade(props){
    const [product, setProduct] = useState({ id: null, start_year: '' });
    const apiUrl = "http://127.0.0.1:8000/decades";
    
    const saveProduct = (e) => {
        e.preventDefault();
        const data = { id: product.id, start_year: product.start_year };
        axios.post(apiUrl, data)
    };

    const onChange = (e) => {
        e.persist();
        setProduct({...product, [e.target.name]: e.target.value});
    }

    return(
        <form onSubmit={saveProduct}>
            <label>ID: </label>
            <input type="number" name="id" id="id" placeholder="Enter id" value={product.id} onChange={onChange} />
            <label>Start Year: </label>
            <input type="text" name="start_year" id="start_year" placeholder="Enter start year" value={product.start_year} onChange={onChange} /> 
            <button type="submit">Save</button>
        </form>
    )
}

export default NewDecade;