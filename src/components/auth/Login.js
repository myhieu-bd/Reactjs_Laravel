import React, { Component } from 'react';
import './Login.css';
import { withRouter } from 'react-router-dom';
class Login extends Component {

    constructor(props){
        super(props);
        this.onLogin=this.onLogin.bind(this);
    }

    onLogin(event){
        event.preventDefault();

        let username = event.target['username'].value;
        let password = event.target['password'].value;

        let post = {
            username:username,
            password:password,
        }

        let postInJson = JSON.stringify(post);
        console.log(postInJson);
        fetch("http://127.0.0.1:8000/api/auth/login/", {
            method: "post",
            headers: {
                "Content-Type":"application/json"
            },
            body: postInJson
        })
        .then((response) => {
           return response.json();
           
        }).then((response)=>{
            console.log(response);
            if(response.user_id==null){
                alert("Password or username incorrectly!!")
                this.props.history.push("/login");
            }
            else{
                alert("Login successfull!!")
                localStorage.setItem("user_id",response.user_id);
                this.props.history.push("/");
            }
           
        });
      
      
        
    }

    render() {
        return (
            <div className="Login">
                <div className="image">
                    <img src='../images/ok.jpg' height="800px;" />
                </div>
                <div  className="loginin">
                <form onSubmit={this.onLogin} method="post">
                    <div className="container">
                        <h3>Login</h3>
                        <label for="uname"><b>Username</b></label>
                        <input type="text" placeholder="Enter Username" name="username" required />

                        <label for="psw"><b>Password</b></label>
                        <input type="password" placeholder="Enter Password" name="password" required />

                        <button type="submit">Login</button>
                        
                        <input type="checkbox" checked="checked" name="remember" /> Remember me
                         
                    </div>
                    <div className="container" >
                        <b> <span className="cancel"><a href="/">Cancel</a></span></b>
                      
                    </div>
                </form>
                </div>
            </div>

        )
    }
}
export default withRouter(Login);