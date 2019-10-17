import React, { Component } from 'react';
import axios from 'axios';


class NewDecade extends Component {
    constructor(props){
        super(props)
        this.state = {
            id: null,
            start_year: ''
        }
    }

    handleInputChange =(event) => {
        const target = event.target;
        const value = target.value;
        const name = target.name;
    
        this.setState({
          [name]: value
        });
    }
    handleSubmit = (evt) => {
        evt.preventDefault()
        let url = 'http://127.0.0.1:8000/decades'
        fetch (url, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
              },
            body: JSON.stringify(this.state)
        })
    }
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <label>ID:</label>
                <input placeholder="enter id"
                    name="id"
                    value={this.state.id}
                    onChange={this.handleInputChange}
                />
                <label>Start Year:</label>
                <input placeholder="enter start year"
                    name="start_year"
                    value={this.state.start_year}
                    onChange={this.handleInputChange}
                />
                <input type="submit" value="Submit" />
            </form>
        )
    }
}

export default NewDecade;