import React, { Component } from 'react';
import fire from '../../config/fire';

class Home extends Component {
  constructor(props) {
    super(props);
    this.logout = this.logout.bind(this);

  }

  logout() {
    fire.auth().signOut();
  }


  render() {
    return (
      <div className="col-md-6">
        <h1>You Are Home</h1>
        <button onClick={this.logout}>Log Out</button>
      </div>
    );
  }
}

export default Home;
