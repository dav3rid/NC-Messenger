import React from 'react';
import styled from 'styled-components';

const HeaderStyled = styled.header`
  grid-area: header;
  display: grid;
  justify-items: center;
  align-items: center;
`;

const RedBrackets = styled.span`
  color: red;
`;

const Header = () => {
  return (
    <HeaderStyled>
      <h1>
        <RedBrackets>{'< '}</RedBrackets>NC Messenger
        <RedBrackets>{' />'}</RedBrackets>
      </h1>
    </HeaderStyled>
  );
};

export default Header;
