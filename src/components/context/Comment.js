import React, { Component } from 'react';
 import './CourseDetail.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class Comment extends Component {
    render() {
        return (
            <div className="Comment">
                <div className="text">
                    <p className="title"> <img src={'http://127.0.0.1:8000' + this.props.item.user.avatar} className="avatar" width="50px;" height="50px;"/> {this.props.item.user.username}:  <span>{this.props.item.content}</span> </p>
                </div>

            </div>
        );
    }
}

export default Comment;