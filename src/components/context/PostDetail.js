import React, { Component } from 'react';
import './CourseDetail.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Comment from './Comment';
import { withRouter } from 'react-router-dom';
class PostDetail extends Component {
    constructor(props) {
        super(props);
        let idpost = this.props.match.params.id;
        this.state = {
            post: [],
            comments: [],
            user:[]
        }
        this.getPost(idpost);  
        this.getUser(idpost);  
        this.getComment(idpost); 
    }
    getUser(idpost) {
        fetch("http://127.0.0.1:8000/api/post/user/" + idpost)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateUser(data);
                });
            });
    }

    updateUser(data) {
        this.setState({
            user: data
        })
    }
    getPost(idpost) {
        fetch("http://127.0.0.1:8000/api/post/" + idpost)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updatePost(data);
                });
            });
    }

    updatePost(data) {
        this.setState({
            post: data
        })
    }

   

    // add comment 

    addComment(post_id , event) {
        event.preventDefault();
        let user_id = localStorage.getItem("user_id");
        let content = event.target['content'].value;
        let comment = {
            user_id : user_id,
            post_id: post_id,
            content: content,

        }
        if(!user_id){
            alert("You must login!!!");
            this.props.history.push("/login");
        }
        else{

        let commentInJson = JSON.stringify(comment);
        console.log(commentInJson);
        fetch("http://127.0.0.1:8000/api/user/addComment", {
            method: "post",
            headers: {
                "Content-Type": "application/json"
            },
            body: commentInJson
        })
            .then((response) => {
                    console.log(response);
            });
            alert ("Comment the post was successfull!");
            window.location.reload();
    }
    }
    // get all comments of each post
    getComment(idpost) {
        fetch("http://127.0.0.1:8000/api/post/comment/" + idpost)
            .then(response => {
                response.json().then((data) => {
                    console.log(data);
                    this.updateComment(data);
                });
            });
    }
    updateComment(data) {
        this.setState({
            comments: data
        })
    }
    // show all comments of each post
    show() {
        const { comments } = this.state;
        var list = comments.map((item, index) =>
            <Comment item={item} key={index} />

        )
        return list;

    }
    render() {
        const { post } = this.state;
        return (
            <div className="PostDetail">
                  <p> <img src={'http://127.0.0.1:8000' + this.state.user.avatar } className="avatar" width="50px;" height="50px;" />
                      { this.state.user.username}</p>
                      <p>{post.content}</p>
                <div className="content">
                    <img src={'http://127.0.0.1:8000' + post.image} alt="" width="800px;" height="450px;"  />
                </div>
                <hr />
                <form method='post' onSubmit={(event) => this.addComment(post.id, event)} className="Comment">
                    <input type="text" placeholder="Enter Your Comment" name="content" required />
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
export default withRouter(PostDetail);