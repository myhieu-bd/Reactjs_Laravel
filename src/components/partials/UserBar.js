import React, { Component } from 'react';
 import './UserBar.css';
 import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
  } from "react-router-dom";
class UserBar extends Component {
    constructor(props) {
        super(props);
        var user_id = localStorage.getItem("user_id");
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
    }
    render() {
        return (
            <div className="UserBar">
                <div className="header">
                    <ul className="logo">
                        <img src="../images/logo.png" />
                    </ul>
                    <ul className="menu">
                        <li><Link to="/">Home</Link></li>
                        <li><Link to="/blogs">Forum</Link></li>
                        <li><Link to="/myblog">My Blog</Link></li>
                        <li>Notifications</li>
                        <li><Link to="/profile">Profile</Link></li>
                    </ul>
                </div>
            </div>

        )
    }
}
export default UserBar;