import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "./DataTable";
import Nav from "./Nav";
import API from "../utils/API";
import EmpContext from "../utils/EmpContext";

const StyledHeader = styled.div`

`;

const DataArea = () => {
  const [users, setUsers] = useState([{}]);
  const [filteredUsers, setFilteredUsers] = useState([{}]);
  const [order, setOrder] = useState("decending");
  const [headings, setHeadings] = useState([
    {name: "Image", width: "10%"},
    {name: "Name", width: "10%"},
    {name: "Phone", width: "20%"},
    {name: "Email", width: "20%"},
    {name: "DOB", width: "10%"},
  ]);
  
  handleSort = () =>{
    if (order === "decending")
      setOrder("ascending")
    else
      setOrder("decending")
  }

  sortUsers = () =>{


  }

  handleSearchChange = event =>{
    const search = event.target.value;
    const filteredList = users.filter(item =>{
      let list = Object.values(item).join("").toLowerCase;
      return list.indexOf(search.toLowerCase()) !== -1;
    });
    setFilteredUsers(filteredList);
  }

  useEffect(() =>{
    API.getUsers()
      .then(res =>{
        setUsers(res.data.results);
        setFilteredUsers(res.data.results);
      })
  })


  return(
    <EmpContext.Provider
      value={{ 
        filteredUsers, 
        order,
        handleSearchChange,
        headings,
      }}
    >
      <Nav />
      <div className="data-area">
        <DataTable />
      </div>
    </EmpContext.Provider>
  );
} //End of DataArea

export default DataArea;