import React, { Component } from 'react';
import './AllCourses.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Review from './Review';
import { withRouter } from 'react-router-dom';
class AllCourses extends Component {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className="AllCourses">
             <p>{this.props.item.content}</p>
                <div className="content">    
             <Link to ={'/course/'+this.props.item.id}><img src={'http://127.0.0.1:8000' + this.props.item.image} alt="" width="800px;" height="450px;" /></Link>     
             <p>{this.props.item.description}</p>
                </div>
                <hr />
                <hr />

                <br/>
                <br/>
                <br/>
            </div>
        );
    }
}
export default withRouter(AllCourses);