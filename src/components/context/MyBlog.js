import React, { Component } from 'react';
import './MyBlog.css';
import MyBlogItem from './MyBlogItem';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
class MyBlog extends Component {
  constructor(props) {
    super(props);
    var user_id = localStorage.getItem("user_id");
    this.state = {
      id: user_id,
      user: [],
      posts: []
    };
    this.getUserById(user_id);
    this.logout = this.logout.bind(this);
    this.getPostsByUserID(user_id);

  }

  //add post

  addPost(event) {
    event.preventDefault();
    let user_id = localStorage.getItem("user_id");
    let content = event.target['content'].value;
    let image = event.target['image'].files[0];


    let post = new FormData();
    post.append('user_id', user_id);
    post.append('content', content);
    post.append('image', image);
    fetch("http://127.0.0.1:8000/api/addPost", {
      method: "post",
      body: post
    }).then(response => response.json())
      .then((response) => {
        console.log(response);
        alert("Add post successfull!!!");
        window.location.reload();
      });
  }



  // get all posts of user and display this
  getPostsByUserID(user_id) {
    fetch("http://127.0.0.1:8000/api/user/posts", {
      headers: {
        "Authorization": user_id
      },
    })
      .then(response => {
        response.json().then((data) => {
          this.updatePost(data.posts);

        });

      });
  }

  updatePost(data) {
    this.setState({
      posts: data
    })
  }

  // get user by id user
  getUserById(user_id) {
    fetch("http://127.0.0.1:8000/api/auth/login", {
      headers: {
        "Authorization": user_id
      },
    })
      .then(response => {
        response.json().then((data) => {
          this.updateUser(data.user);

        });

      });


  }
  updateUser(data) {
    this.setState({
      user: data
    })
  }

  logout() {
    localStorage.removeItem("user_id");
    this.setState({ id: null });
  }

  show() {
    const { posts } = this.state;
    var list = posts.map((item, index) =>
      <MyBlogItem item={item} key={index} />
    )
    return list;

  }
  render() {

    return (
      <div className="MyBlog">
        <div className="CreatePost">
          <form onSubmit={this.addPost} method="post">
            <div className="container">
              <h3>Create Post</h3>
              <label for="content"><b>Content</b></label>
              <input type="text" placeholder="Enter content" name="content" required />

              <label for="image"><b>Image</b></label>
              <input type="file" name="image" required />

              <button type="submit">Add Post</button>
            </div>
          </form>
        </div>

       


        <div className="MyPosts">
          <h2>All of my posts</h2>
          <table>
            <tr>
              <th>ID</th>
              <th>Image</th>
              <th>Content</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
            {this.show()}
          </table>
        </div>

      </div>


    )
  }
}
export default MyBlog;