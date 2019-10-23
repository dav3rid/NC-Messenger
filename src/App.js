import React from 'react';
import './App.css';
import './layout.css';
import Header from './components/Header';
import MessageList from './components/MessageList';
import MessageForm from './components/MessageForm';
import socketIOClient from 'socket.io-client';

class App extends React.Component {
  state = {
    endpoint: 'localhost:4001',
    messages: [
      { username: 'Patrick', message: 'Please do not post any emojis today' },
      {
        username: 'Simon',
        message: 'Hi Patrick - it is Wednesday, are you sure about no emojis?!'
      }
    ]
  };

  // SENDING SOCKETS
  send = () => {
    const socket = socketIOClient(this.state.endpoint);
    socket.emit('add message', this.state.messages);
  };

  // ADDING THE FUNCTION
  componentDidMount = () => {
    const socket = socketIOClient(this.state.endpoint);
    setInterval(this.send(), 1000);
    socket.on('add message', messages => {
      this.setState({ messages });
    });
  };

  render() {
    const socket = socketIOClient(this.state.endpoint);
    return (
      <div className="App">
        <Header />
        <MessageList messages={this.state.messages} />
        <MessageForm updateMessages={this.updateMessages} />
      </div>
    );
  }

  updateMessages = newMessage => {
    this.setState(
      currentState => {
        return { messages: [...currentState.messages, newMessage] };
      },
      () => {
        this.send();
      }
    );
  };
}

export default App;
