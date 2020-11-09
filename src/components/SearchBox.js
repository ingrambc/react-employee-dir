import React, { useContext } from "react";
import styled from "styled-components";
import EmpContext from "../utils/EmpContext";

const StyledSearchBox = styled.div`

`;

const SearchBox = () => {
  const { handleSearchChange } = useContext(EmpContext);

  return(
    <StyledSearchBox>
      <input
        onChange={handleSearchChange}
        name="search"
        type="text"
        placeholder="Search"
        id="search"
      />
    </StyledSearchBox>
  )
}

export default SearchBox;