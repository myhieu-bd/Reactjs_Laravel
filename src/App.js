import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import TopMenu from './components/partials/TopMenu';
import UserBar from './components/partials/UserBar';
import Slider from './components/partials/Slider';
import Footer from './components/partials/Footer';
import Category from './components/context/Category';
import Courses from './components/context/Courses';
import CourseDetail from './components/context/CourseDetail';
import UserBlogs from './components/context/UserBlogs';
import MyBlog from './components/context/MyBlog';
import EditMyPost from './components/context/EditMyPost';
import PostDetail from './components/context/PostDetail';
import Profile from './components/context/Profile';
import ViewCourses from './components/context/ViewCourses';
class App extends Component {
  render() {

    return (
      <Router>
        <div>
          <Switch>
            <Route exact path="/">
              <TopMenu />
              <Slider />
              <Category />
              <Footer />
            </Route>

            <Route path="/register">
              <Register />
            </Route>
            <Route path="/login">
              <Login />
            </Route>

            <Route path={"/category/:id"}>
              <TopMenu />
              <Slider />
              <Courses />
              <Footer />
            </Route>

            <Route path={"/course/:id"}>
              <TopMenu />
              <Slider />
              <CourseDetail />
              <Footer />
            </Route>

            <Route path={"/courses"}>
              <TopMenu />
              <Slider />
              <ViewCourses />
              <Footer />
            </Route>

            <Route path={"/post/:id"}>
            <UserBar />
              <PostDetail />
              <Footer />
            </Route>

            <Route path="/blogs">
              <UserBar />
              <UserBlogs />
              <Footer />
            </Route>

            <Route path="/myblog">
              <UserBar />
              <MyBlog />
              <Footer />
            </Route>

            <Route path="/profile">
              <UserBar />
            <Profile />
              <Footer />
            </Route>


            <Route path={"/editpost/:id"} exact>
              <UserBar />
              <EditMyPost />
              <Footer />
            </Route>

          </Switch>

        </div>
      </Router>
    );
  }
}

export default App;