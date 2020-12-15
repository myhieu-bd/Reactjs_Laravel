import React, { Component } from 'react';
import './Register.css';
import { withRouter } from 'react-router-dom';
class Register extends Component {
    constructor(props) {
        super(props);
        this.onRegister = this.onRegister.bind(this);
    }

    onRegister(event) {
        event.preventDefault();
        let fullname = event.target['fullname'].value;
        let username = event.target['username'].value;
        let password = event.target['password'].value;
        let repassword = event.target['repassword'].value;
        let email = event.target['email'].value;
        let dOB = event.target['dOB'].value;
        let avatar = event.target['avatar'].files[0];
        let address = event.target['address'].value;
        if (password == repassword) {

        let data = new FormData();
        data.append('fullname', fullname);
        data.append('username', username);
        data.append('password', password);
        data.append('email', email);
        data.append('dOB', dOB);
        data.append('avatar', avatar);
        data.append('address', address);
        console.log(address);
        fetch("http://127.0.0.1:8000/api/auth/register", {
            method: "post",
            body: data
        }).then(response => response.json())
        .then((response) => {
            console.log(response);
            alert("Register successfull");
            this.props.history.push("/login");
        });
        }
        else {
            alert("The password does not match");
        }

    }

    render() {
        return (
            <div className="Register">
               <div className="image">
                    <img src='../images/ok.jpg' height="800px;" />
                </div>
                <div className="registerin">
                <form method="post" onSubmit={this.onRegister} enctype="multipart/form-data">
                    <div className="container">
                        <h3>Register</h3>
                        <label for="fname"><b>Fullname</b></label>
                        <input type="text" placeholder="Enter Username" name="fullname" />

                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" />

                        <label for="rpsw"><b>Confirm password</b></label>
                        <input type="password" placeholder="Enter Password" name="repassword" />

                        <label for="email"><b>Email</b></label>
                        <input type="text" placeholder="Enter Email" name="email" />

                        
                        <label for="dOB"><b>Date of birth  &emsp; &emsp;</b></label>

                        <input type="date" name="dOB" />
                        
                        <label for="address"><b>Address</b></label>
                        <input type="text" placeholder="Enter Username" name="address" />

                        <label for="avatar"><b>Avatar &emsp; &emsp;</b></label>
                        <input type="file" name="avatar" required />

                        <button type="submit"><b>Register</b></button>
                        
                    </div>
                    <div className="choice">
                        <b>
                            <span className="cancel"><a href="/">Cancel</a></span> &emsp;&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;
                    <span className="login"> <a href="/login">Login</a></span></b>
                    </div>
                </form>
            </div>
            </div>
        )
    }
}
export default withRouter(Register);