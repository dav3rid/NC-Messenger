import React from 'react';
import styled from 'styled-components';

const MessageInputsWrapper = styled.div`
  margin-top: 10px;
  border: 2px solid black;
  border-radius: 5px;
  display: flex;
  flex-direction: column;
`;

const FormGridWrapper = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: minmax(1.2rem, 1fr) minmax(auto, 600px) minmax(
      1.2rem,
      1fr
    );
`;

const FormContent = styled.div`
  grid-column: 2;
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  min-height: 200px;
  justify-content: space-around;
`;

const StyledInput = styled.input`
  height: 30px;
  padding-left: 10px;
  font-size: 1.2rem;
`;

const SendButton = styled.button`
  align-self: flex-start;
  height: 30px;
  width: 80px;
  background-color: black;
  color: white;
  border-radius: 500px;
  border: 1px solid black;
  cursor: pointer;
  :hover {
    color: black;
    background-color: white;
  }
`;

class MessageForm extends React.Component {
  state = {
    username: '',
    message: ''
  };
  render() {
    return (
      <MessageInputsWrapper>
        <FormGridWrapper>
          <FormContent>
            <Form onSubmit={this.handleSubmit}>
              <StyledInput
                type="text"
                name="username"
                value={this.state.username}
                placeholder="username"
                onChange={this.handleChange}
                required
              />
              <StyledInput
                name="message"
                value={this.state.message}
                placeholder="message"
                onChange={this.handleChange}
                required
              ></StyledInput>
              <SendButton>Send</SendButton>
            </Form>
          </FormContent>
        </FormGridWrapper>
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
