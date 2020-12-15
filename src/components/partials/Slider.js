import React, { Component } from 'react';
import './Slider.css';
import {

  Link
} from "react-router-dom";
class Slider extends Component {
  render() {
    return (
      <div className="Slider">
        <img src="/images/slide.png" width="1200px" alt="" />
        <div className="title">
          <h3>Lost When It Comes To Makeup?</h3>
          <p>Girl, we got you. Learn how to do makeup with our in-depth online makeup classes, all from the comfort of home. </p>
          <Link to={'/courses'}>   <button className="btn">View our courses</button></Link>
        </div>
        <div className="text">
          <p><light>Our school is for people who want to apply their makeup better but are unsatisfied with YouTube tutorials that are often hard to follow and sponsored by makeup brands. We are impartial and unbiased, and provide easy to follow online makeup courses. Unlike other online makeup schools, our courses are very affordable and easy to access. We teach practical skills and concepts to use in makeup application every day.
                </light></p>
          <p>
            Our fun, practical and easy to follow online makeup courses will teach you how to do your makeup flawlessly. Develop new skills and confidence applying your makeup, and have a better understanding of what colours and styles actually suit you.
            </p>
          <p>
            If you're sick of wasting money on products that don't work for you, and feel like you never quite achieve the look you were going for, we can help! Whether you’re a complete beginner or a beauty guru, learn how to do makeup at home with our range of courses that cater to all skill levels.
          </p>
        </div>
        <hr/>
      </div>

    )
  }
}
export default Slider;
