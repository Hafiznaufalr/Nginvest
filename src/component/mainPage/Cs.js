import React, { Component } from 'react';
import { Widget, addResponseMessage, addLinkSnippet, addUserMessage } from 'react-chat-widget';
 import '../../App.css'
import 'react-chat-widget/lib/styles.css';
 
import anya from '../../cs/anya.png';
 
class Cs extends Component {
  componentDidMount() {
    addResponseMessage("Halo, Adakah yang bisa saya bantu");
  }
 
  handleNewUserMessage = (newMessage) => {
    console.log(`New message incomig! ${newMessage}`);
    // Now send the message throught the backend API
  }
 
  render() {
    return (
      <div className="App">
        <Widget
          handleNewUserMessage={this.handleNewUserMessage}
          profileAvatar={anya}
          title="Customer Service"
          subtitle="Anya Geraldine"
        />
      </div>
    );
  } 
}
 
export default Cs;