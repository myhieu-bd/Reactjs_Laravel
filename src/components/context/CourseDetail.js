import React, { Component } from 'react';
import './CourseDetail.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Review from './Review';
import { withRouter } from 'react-router-dom';
class CourseDetail extends Component {
    constructor(props) {
        super(props);
        let idCourse = this.props.match.params.id;
        this.state = {
            course: [],
            reviews: []
        }
        this.getCourse(idCourse);  
        this.getReview(idCourse); 
    }

    getCourse(idCourse) {
        fetch("http://127.0.0.1:8000/api/course/" + idCourse)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateCourse(data);
                });
            });
    }

    updateCourse(data) {
        this.setState({
            course: data
        })
    }


    // add comment 

    addReview(course_id , event) {
      
        event.preventDefault();
        let user_id = localStorage.getItem("user_id");
        let content = event.target['content'].value;
        let review = {
            user_id : user_id,
            course_id: course_id,
            content: content,

        }
        if(!user_id){
            alert("You must login!!!");
            this.props.history.push("/login");
        }
        else{

        let courseInJson = JSON.stringify(review);
        console.log(courseInJson);
        fetch("http://127.0.0.1:8000/api/user/addReview", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: courseInJson
        })
            .then((response) => {
                    console.log(response);
                    alert("All review successfull!!!");
                    window.location.reload();
            });
    }}

    // get all reviews of each course
    getReview(idCourse) {
        fetch("http://127.0.0.1:8000/api/course/review/" + idCourse)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateReview(data);
                });
            });
    }
    updateReview(data) {
        this.setState({
            reviews: data
        })
    }
    // show all reviews of each post
    show() {
        const { reviews } = this.state;
        var list = reviews.map((item, index) =>
            <Review item={item} key={index} />

        )
        return list;

    }
    render() {
        const { course } = this.state;
        return (
            <div className="CourseDetail">
                <div className="content">
                    <p><b>{course.title}</b></p>
                    <img src={'http://127.0.0.1:8000' + course.image} alt="" width="800px;" height="450px;" />
                    <p>{course.description}</p>
                </div>
                <hr />
                <form method='post' onSubmit={(event) => this.addReview(course.id, event)} className="Review">
                    <input type="text" placeholder="Enter Your Review" name="content" required />
                   <button>Send</button>
                </form>
                <hr />
                <div className="comment">
              { this.show()}
               </div>
            </div>
        );
    }
}
export default withRouter(CourseDetail);