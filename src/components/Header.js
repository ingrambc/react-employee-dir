import React from "react";
import styled from "styled-components";

const StyledHeader = styled.div`

`;

const Header = () =>{
  return(
  <StyledHeader>
      <h1>Employee Directory</h1>
      <p>Click on column name to sort by heading or use search box to narrow results</p>
  </StyledHeader>
  )
}

export default Header;