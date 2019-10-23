import React from 'react';
import styled from 'styled-components';
import MessageCard from './MessageCard';

const MessageBox = styled.div`
  padding: 20px 0 0 20px;
  height: 60vh;
  width: 90%;
  border: 2px solid black;
  border-radius: 5px;
  overflow-y: auto;
  background-color: #ededed;
`;

const MessageList = props => {
  return (
    <MessageBox>
      {props.messages.map((message, index) => {
        return <MessageCard message={message} key={index} />;
      })}
    </MessageBox>
  );
};

export default MessageList;
