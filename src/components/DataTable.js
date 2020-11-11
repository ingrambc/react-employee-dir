import React, { useContext } from "react";
import styled from "styled-components";
import EmpContext from "../utils/EmpContext";
import DataBody from "./DataBody";

const StyledDataTable = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  table{
    font-weight: bold;
  }
  tbody tr::nth-child(odd){
    background-color: #DFEEDA;
  }
  tbody tr::nth-child(even){
    background-color: #C2D1BD;
  } 
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