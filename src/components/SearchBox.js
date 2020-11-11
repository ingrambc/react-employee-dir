import React, { useContext } from "react";
import styled from "styled-components";
import EmpContext from "../utils/EmpContext";

const StyledSearchBox = styled.div`
    input {
      height: 40px;
      border-radius: 5px;
      background-color: #D0F9DE;
      color: #ffffff;
      font-size: 20px;
    }
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