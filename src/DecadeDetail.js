import React, { Component } from "react";
import { Route, Link } from "react-router-dom";

class DecadeDetail extends Component {
    constructor() {
        super();
        this.state = {
            decade: []
        };
    }
    componentDidMount() {
        let path = this.props.match.url.replace("/decades/", "");
        fetch('http://127.0.0.1:8000/decades/'+path)
        .then(results => {
            return results.json();
        }).then(decade => {
            console.log(decade)
            let decadeEntry = 
            <div>
                <p>Id: {decade.id}</p>
                <p>Start Year{decade.start_year}</p>
                <button className="btn" onClick={this.handleDelete}>Delete</button>
            </div>
            this.setState({decade: decadeEntry})
        })
    }
    handleDelete = (evt) => {
        evt.preventDefault()
        let path = this.props.match.url.replace("/decades/", "");
        fetch('http://127.0.0.1:8000/decades/'+path, {
            method: 'DELETE'
        })
        .then(() => {
            const message = (
                <div className="message">
                    <h4>Decade is deleted!</h4>
                </div>
            )
            this.setState({decade: message})
        })
    }

    render(){
        return(
            <div>
                {this.state.decade}
            </div>
        )
    }
}
export default DecadeDetail;