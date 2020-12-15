import React, { Component } from 'react';
import './CourseItem.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class CourseItem extends Component {
    render() {
       
       
        return (
            <div className="CourseItem">
            <div className="image">
                <Link to={'/course/' + this.props.item.id}><img src={'http://127.0.0.1:8000' + this.props.item.image} alt=""  /></Link>
            </div>
            <div className="text">
                <p className="title"><b> {this.props.item.title}</b></p>
                <p className="script">{this.props.item.description}</p>
                <Link to={'/course/' + this.props.item.id}><button className="btn_learn"><strong>LEARN MORE</strong></button></Link>
            </div>
  <br/>
  <br/>
  
        </div>
        );
    }
}

export default CourseItem;