import React, { Component } from 'react';
import './Profile.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link,
    Redirect
} from "react-router-dom";
import { withRouter } from 'react-router-dom'; 
class Profile extends Component {
    constructor(props) {
        super(props);
        let user_id = localStorage.getItem("user_id");
        this.state = {
            id: user_id,
            user: []
        };
        this.getUserById(user_id);
        this.logout = this.logout.bind(this);

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
        this.props.history.push("/");
    }

    changeProfile(event) {
        event.preventDefault();
        let fullname = event.target['fullname'].value;
        let email = event.target['email'].value;
        let dOB = event.target['dOB'].value;
        let avatar = event.target['avatar'].files[0];
        let address = event.target['address'].value;  
        let user_id = localStorage.getItem("user_id");  
            console.log(user_id);
        let profile = new FormData();
        profile.append('user_id', user_id);
        profile.append('fullname', fullname);
        profile.append('email', email);
        profile.append('dOB', dOB);
        profile.append('avatar', avatar);
        profile.append('address', address);
        fetch("http://127.0.0.1:8000/api/update/account", {
            method: "post",
            body: profile
        }).then(response => response.json())
        .then((response) => {
            console.log(response);
            alert("Change your profile successfull!!!");
            window.location.reload();
        });
    }


    render() {
        let { user } = this.state;
        return (
            <div className="Profile">
                <div className="ChangeProfile">
                    <form onSubmit={this.changeProfile} method='post'  encType="multipart/form-data">
                        <div className="container">
                        <img src={'http://127.0.0.1:8000' + user.avatar} />
                            <input type="file"  name="avatar"  placeholder="Select a new avatar"/>

                            <label for="content"><b>Name</b></label>
                            <input type="text"  name="fullname" defaultValue={user.fullname} />

                            <label for="content"><b>Username</b></label>
                            <input type="text" name="username" defaultValue={user.username}  readOnly/>

                            <label for="content"><b>Date of Birth</b></label>
                            <input type="datetime" name="dOB" defaultValue={user.dOB} />

                            <label for="content"><b>Email</b></label>
                            <input type="text"  name="email" defaultValue={user.email} />

                            <label for="content"><b>Address</b></label>
                            <input type="text"  name="address" defaultValue={user.address} />

                            <button type="submit"> Change</button>
                            
                        </div>
                    </form>
                    <button onClick={this.logout}> Logout</button>
                </div>
            </div>

        )
    }
}
export default withRouter(Profile);