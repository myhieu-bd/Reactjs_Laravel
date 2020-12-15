import React, { Component } from 'react';
 import './UserBlogs.css';
 import AllCourses from './AllCourses';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class ViewCourses extends Component {
  constructor() {
    super();
   
    this.state = {
      courses: []
    };

    this.getAllCourses();

  }


  getAllCourses() {
    fetch("http://127.0.0.1:8000/api/view/courses", {

    })
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.updateAllCourses(data);

        });

      });
  }
  updateAllCourses(data) {
    this.setState({
      courses: data
    })
  }

  show(){
    const { courses } = this.state;
        var list = courses.map((item, index) =>
            <AllCourses item={item} key={index} />

        )
        return list;
  }

  render() {
    let { user } = this.state;
    return (
     
       
          <div>
           
            {this.show()}
        </div>
      

    )
  }
}
export default ViewCourses;