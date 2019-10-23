import React from 'react';
import styled from 'styled-components';
import MessageCard from './MessageCard';

const MessageBox = styled.div`
  padding: 0 0 0 20px;
  height: 100%;
  width: 90%;
  border: 2px solid black;
  overflow-y: scroll;
`;

const MessageList = props => {
  return (
    <MessageBox>
      <h2>Users...</h2>
      {props.messages.map(message => {
        return <MessageCard message={message} />;
      })}
    </MessageBox>
  );
};

export default MessageList;
