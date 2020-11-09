import React from "react";
import styled from "styled-components";
import Main from "./Main";
import Header from "./Header";
import DataArea from "./DataArea";
import SearchBox from "./SearchBox";

const StyledWrapper = styled.div`

`;

const Wrapper = () =>{
  return(
  <StyledWrapper>
      <Header />
      <Main>
        <DataArea />
      </Main>
  </StyledWrapper>
  )
}

export default Wrapper;