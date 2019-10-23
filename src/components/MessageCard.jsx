import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90%;
  border: 2px solid black;
  border-radius: 10px;
  padding: 10px;
  margin: 5px 0 0 5px;
  background-color: white;
`;

const RedBrackets = styled.span`
  color: red;
`;

const MessageCard = props => {
  return (
    <Card>
      <h4>
        <RedBrackets>{'< '}</RedBrackets>

        {props.message.username}
        <RedBrackets>{' />'}</RedBrackets>
      </h4>
      <p>{props.message.message}</p>
    </Card>
  );
};

export default MessageCard;
