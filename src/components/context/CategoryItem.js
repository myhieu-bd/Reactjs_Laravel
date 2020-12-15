import React, { Component } from 'react';
import './CategoryItem.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
class CategoryItem extends Component {
    render() {
        const data = this.props;
        return (
            <div className="CategoryItem">
                <div className="image">
                    <Link to={'/category/' + this.props.item.id}><img src={'http://127.0.0.1:8000' + this.props.item.image} alt="" /></Link>
                </div>
                <div className="text">
                    <p className="title"> {this.props.item.title}</p>
                    <p className="script">{this.props.item.description}</p>
                    <Link to={'/category/' + this.props.item.id}><button className="btn_learn"><strong>LEARN MORE</strong></button></Link>
                </div>

            </div>
        );
    }
}

export default CategoryItem;