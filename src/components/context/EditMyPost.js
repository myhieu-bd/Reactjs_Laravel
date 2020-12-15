import React, { Component } from 'react';
import './MyBlog.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import { withRouter } from 'react-router-dom';
class EditMyPost extends Component {
    constructor(props) {
        super(props);
        let post_id = this.props.match.params.id;
        var user_id = localStorage.getItem("user_id");
        this.state = {
            id: user_id,
            user: [],
            post: [],
            post_id: 1
        };
        this.getUserById(user_id);
        this.logout = this.logout.bind(this);
        this.getPost(post_id);
        this.onEdit = this.onEdit.bind(this);
    }

        // get post to edit

        getPost(post_id) {
            fetch("http://127.0.0.1:8000/api/edit/post/" + post_id, {
            
            })
                .then(response => {
                    response.json().then((data) => {
                        console.log(data);
                        this.updateMyPost(data);
    
                    });
                });
        }
    
        updateMyPost(data) {
            this.setState({
                post: data,
                post_id:data.id
               
            })
        }
    //add post

    onEdit(event) {
        event.preventDefault();
        let post_id= this.state.post_id;
        let content = event.target['content'].value;
        let image = event.target['image'].files[0];
        console.log(image);
        let newpost = new FormData();
        newpost.append('content', content);
        newpost.append('image', image);
        fetch("http://127.0.0.1:8000/api/update/post/" + post_id, {
            method: "post",
            body: newpost
        }).then((response) => {
            console.log(response);
            alert ("Edit the post was successfull!");
        });
        this.props.history.push("/myblog");
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

    render() {
        const { post } = this.state;
       
        return (
           <div className="EditMyPost">
                <form onSubmit={this.onEdit} encType="multipart/form-data" method='post'   >
                    <div className="container">
                        <h3>Edit Post</h3>
                        <label for="content"><b>Content</b></label>
                        <input type="text" placeholder="Enter content" name="content" defaultValue={post.content} />
                        <label for="image" ><b>Image</b></label>
                        <input type="file" name="image"/>
                        <button type="submit">Edit Post</button>
                    </div>
                </form>
                </div>



        )
    }
}
export default withRouter(EditMyPost); 
