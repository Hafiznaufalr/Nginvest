import React, { Component } from 'react';
import Main from "./component/landing/main";
import Header from "./component/landing/header";
import Nav from "./component/landing/nav";

import './App.css'
// import fire from './config/fire';
// import Login from './component/login/Login';
// import Home from './component/login/Home';

class App extends Component {
  constructor(props){
    super(props);
    // this.state = {
    //   user:{},
    // }
  }

  // componentDidMount(){
  //   this.authListener();
  // }

  // authListener(){
  //   fire.auth().onAuthStateChanged((user) => {
  //    // console.log(user);
  //     if(user){
  //       this.setState({user});
  //     //  localStorage.setItem('user', user.uid);
  //     }
  //     else{
  //       this.setState({user:null});
  //      // localStorage.removeItem('user');
  //     }
  //   })
  // }


  render() {
    return (
      <div className="container">
      <Nav/>
      <Header />
      <Main />
    </div>
    );
  }
}

export default App;
