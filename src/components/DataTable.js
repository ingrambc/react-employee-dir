import React, { useContext } from "react";
import styled from "styled-components";
import EmpContext from "../utils/EmpContext";
import DataBody from "./DataBody";

const StyledDataTable = styled.div`

`;


const DataTable = () =>{
  const { headings, handleSort } = useContext(EmpContext);

  return(
    <StyledDataTable>
      <table>
      <thead>
        <tr>
          {headings.map(({name, width})=>{
            if (name === "Name"){
              return (
                <th key={name} style={{ width }} onClick={handleSort}>{name}</th>
              )
            }else{
              return (
                <th key={name} style={{ width }}>{name}</th>
              )
            }            
          })}
        </tr>
      </thead>
      <DataBody />
      </table>
    </StyledDataTable>
  )
}

export default DataTable;