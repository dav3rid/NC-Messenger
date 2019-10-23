import React from 'react';
import styled from 'styled-components';

const Card = styled.div`
  width: 90%;
  border: 1px solid grey;
  padding: 10px;
  margin: 5px 0 0 5px;
`;

const MessageCard = props => {
  return (
    <Card>
      <h3>{props.message.username}</h3>
      <p>{props.message.message}</p>
    </Card>
  );
};

export default MessageCard;
