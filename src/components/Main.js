import React from "react";
import styled from "styled-components";

const StyledMain = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background-color: #D5E964;
`;

const Main = ({ children }) => {
  return <StyledMain> {children} </StyledMain>;
};

export default Main;