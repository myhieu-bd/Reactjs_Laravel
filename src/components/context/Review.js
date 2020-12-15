import React, { Component } from 'react';
 import './CourseDetail.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Review extends Component {
    render() {
        return (
            <div className="Review">
                <div className="text">
                    <p className="title"> <img src={'http://127.0.0.1:8000' + this.props.item.user.avatar} className="avatar" width="50px;" height="50px;"/> <b> {this.props.item.user.username}</b>:  <span>{this.props.item.content}</span> </p>
                </div>

            </div>
        );
    }
}

export default Review;