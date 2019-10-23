import React from 'react';
import styled from 'styled-components';
import MessageCard from './MessageCard';

const MessageBox = styled.div`
  height: 60vh;
  border: 2px solid black;
  border-radius: 5px;
  overflow-y: auto;
  background-color: #ededed;
`;

const MessageGridWrapper = styled.div`
  grid-area: main;
  display: grid;
  grid-template-columns: minmax(1.2rem, 1fr) minmax(auto, 600px) minmax(
      1.2rem,
      1fr
    );
`;

const MessageContent = styled.div`
  grid-column: 2;
  padding-top: 20px;
`;

const MessageList = props => {
  return (
    <MessageBox>
      <MessageGridWrapper>
        <MessageContent>
          {props.messages.map((message, index) => {
            return <MessageCard message={message} key={index} />;
          })}
        </MessageContent>
      </MessageGridWrapper>
    </MessageBox>
  );
};

export default MessageList;
