import React, { Component } from 'react';
import CourseItem from './CourseItem';
import './CourseItem.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
class Courses extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            category: []
        }
        let id = this.props.match.params.id;
        let idCate = this.props.match.params.id;
        this.getData(id);
        this.getCate(idCate);
    }
    getData(id) {
        fetch("http://127.0.0.1:8000/api/cate/courses/" + id)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updatePosts(data);
                })
            })
    }
    updatePosts(data) {
        this.setState({
            post: data
        })
    }


    getCate(idCate) {
        fetch("http://127.0.0.1:8000/api/category/" + idCate)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateCategory(data);
                });
            });
    }

    updateCategory(data) {
        this.setState({
            category: data
        })
    }

    show() {
        const { post } = this.state;

        var list = post.map((item, index) =>
            <CourseItem item={item} key={index} />

        )
        return list;

    }
    render() {
        const { category } = this.state;
        return (
            <div>
                  <div className="cate">
        <p>{category.title}</p>
                    <Link to={'/category/' + category.id}><img src={'http://127.0.0.1:8000' + category.image} alt="" /></Link>
        <p className="text">{category.description}</p>
                </div>
                <div className="Courses">
                  
                    {this.show()}
                </div>
            </div>

        );
    }
}
export default withRouter(Courses);