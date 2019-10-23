import React from 'react';
import styled from 'styled-components';

const MessageInputsWrapper = styled.div`
  margin: 20px 0 0 0;
  padding: 20px 0 0 20px;
  height: 150px;
  width: 90%;
  border: 2px solid black;
  display: flex;
  flex-direction: column;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-around;
`;

class MessageForm extends React.Component {
  state = {
    username: '',
    message: ''
  };
  render() {
    return (
      <MessageInputsWrapper>
        <Form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleChange}
          />
          <textarea
            name="message"
            value={this.state.message}
            placeholder="message"
            onChange={this.handleChange}
          ></textarea>
          <button>Send</button>
        </Form>
      </MessageInputsWrapper>
    );
  }

  handleChange = event => {
    const name = event.target.name;
    this.setState({ [name]: event.target.value });
  };

  handleSubmit = event => {
    event.preventDefault();
    const { message, username } = this.state;
    this.props.updateMessages({ message, username });
    this.setState({ message: '' });
  };
}

export default MessageForm;
