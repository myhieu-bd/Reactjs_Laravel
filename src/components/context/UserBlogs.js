import React, { Component } from 'react';
 import './UserBlogs.css';
 import AllPosts from './AllPosts';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class UserBlogs extends Component {
  constructor() {
    super();
    var user_id = localStorage.getItem("user_id");
    this.state = {
      id: user_id,
      user: [],
      posts: []
    };
    this.getUserById(user_id);
    this.logout = this.logout.bind(this);
    this.getAllPosts();

  }

  getUserById(user_id) {
    fetch("http://127.0.0.1:8000/api/auth/login", {
      headers: {
        "Authorization": user_id
      },
    })
      .then(response => {
        response.json().then((data) => {
          this.updateUI(data.user);

        });

      });
  }
  updateUI(data) {
    this.setState({
      user: data
    })
  }

  logout() {
    localStorage.removeItem("user_id");
    this.setState({ id: null });
  }

  getAllPosts() {
    fetch("http://127.0.0.1:8000/api/posts", {

    })
      .then(response => {
        response.json().then((data) => {
          console.log(data);
          this.updateAllPosts(data);

        });

      });
  }
  updateAllPosts(data) {
    this.setState({
      posts: data
    })
  }

  show(){
    const { posts } = this.state;
        var list = posts.map((item, index) =>
            <AllPosts item={item} key={index} />

        )
        return list;
  }

  render() {
    let { user } = this.state;
    return (
      <div className="UserBlog">
        <div className="user">
          <Link to="/profile"> <img src={'http://127.0.0.1:8000' + user.avatar} /></Link>
          <Link to="/myblog"> <lable className="thinking">What's on your mind?</lable></Link>
          </div>
          <div className="content">
            <hr/>
            <h2 >New Posts</h2>
            <hr/>
            {this.show()}
        </div>
      </div>

    )
  }
}
export default UserBlogs;