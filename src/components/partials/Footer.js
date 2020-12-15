import React, { Component } from 'react';
import './Footer.css';
class Footer extends Component {
  render(){
      return (
        <div className="footer">
			<div className="detail-content">
			<div className="about">
				<h2>About Us</h2>
				<p><img src="../images/logo.png" width="150px" height="50px" alt=""/></p>
				<p id="phai">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi, similique.</p>
			</div>
			<div className="contact">
				<h2>Contacts</h2>
				<p><span>Emai:</span> info@yousite.com</p>
				<p><span>Tel:</span> 1 800 123 4567</p>
			</div>
			<div className="link">
      			<h2>Link</h2>
				<p>zmisthemes &copy; All Right Reserved</p>
			</div>
			</div>
        	
      	</div>
  
    )
    }	
  }
export default Footer;