import {useEffect} from "react";
import {Switch, Route, Redirect} from "react-router-dom"; 
import { ToastContainer } from 'react-toastify';

import Header from './components/Header';
import Forum from './components/Forum';
import Post from "./components/Post";
import LoginForm from './components/LoginForm';
import Section from './components/Section';
import Logout from './components/Logout';
import ResponseForm from "./components/ResponseForm";
import RegisterForm from "./components/RegisterForm";
import {restoreToken} from "./services/authservice";

import './App.css';
import "react-toastify/dist/ReactToastify.css";
import 'bootstrap/dist/css/bootstrap.css';
import PostForm from "./components/PostForm";

function App() {
  
  useEffect(() => {
    restoreToken();
  }, [])

  return (
    <div className="App">
      <Header forumTitle="Forum App"/>
      <ToastContainer/>
      <Switch>
        <Route path="/addPost/:id" component={PostForm}/>
        <Route path="/post/:id" component={Post}/>
        <Route path="/section/:id" component={Section}/>
        <Route path="/login" component={LoginForm}/> 
        <Route path="/register" component={RegisterForm}/> 
        <Route path="/logout" component={Logout}/>
        <Route path="/reply/:id" component={ResponseForm}/> 
        <Route path="/edit/:idPost/:idRes" render={(props) => <ResponseForm {...props} isEdit={true} btnLabel={"Edit response!"}/>}/>
        <Route path="/" exact component={Forum}/>
        <Redirect from="/forum" to="/"/>
      </Switch>
    </div>
  );
}

export default App;
