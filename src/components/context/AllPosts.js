import React, { Component } from 'react';
import './CourseDetail.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
class AllPosts extends Component {
    constructor(props) {
        super(props);


    }




    // add comment 

    addComment(post_id, event) {
        event.preventDefault();
        let user_id = localStorage.getItem("user_id");
        let content = event.target['content'].value;
        let comment = {
            user_id: user_id,
            post_id: post_id,
            content: content,

        }

        if(!user_id){
            alert("You must login!!!");
            this.props.history.push("/login");
        }
        else{

        this.setState({
            post_id: post_id,
        })

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
                alert("Comment the post was successfull!");

            });
    }

    }
    render() {
        return (
            <div className="CourseDetail">
                <p ><img src={'http://127.0.0.1:8000' + this.props.item.user.avatar } className="avatar" width="50px;" height="50px;" /> {this.props.item.user.username}  </p> <p>{this.props.item.content}</p>
                <div className="content">

                    <Link to={'/post/' + this.props.item.id}><img src={'http://127.0.0.1:8000' + this.props.item.image} alt="" width="800px;" height="450px;" /></Link>
                </div>
                <hr />

                <form method='post' onSubmit={(event) => this.addComment(this.props.item.id, event)}>
                    <input type="text" placeholder="Enter Comment" name="content" required />
                    <button type="submit">Send</button>
                </form>
               
                <hr />
                <br/>
                <br/>
            </div>
        );
    }
}
export default withRouter(AllPosts);