import React, { Component } from 'react';
import './TopMenu.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
class TopMenu extends Component {
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
    let {user}=this.state;
    return (
      <div className="TopMenu">
        <ul className="logo">
          <img src="../images/logo.png" />
        </ul>
        <ul className="menu">
          <li><Link to="/blogs">Forum</Link></li>
          <li>Light Makeup</li>
          <li>Eye Makeup</li>
          <li>About</li>
          <li>FAQ's</li>
          <li>Contact</li>
         
          {!this.state.id ? (
            <span>
            <li> <Link to="/register">Register</Link></li>
            <li><Link to="/login">Login</Link> </li>
            </span>
          ) : (
              <span>
                <li><Link to="/profile"><img src={'http://127.0.0.1:8000' + user.avatar} height="20px;" width="20px" />  {user.username} </Link></li>
                <li onClick={this.logout}>Logout</li>

                </span>
            )}

        </ul>
      </div>

    )
  }
}
export default TopMenu;