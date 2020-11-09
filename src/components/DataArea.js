import React, { useState, useEffect } from "react";
import styled from "styled-components";
import DataTable from "./DataTable";
import API from "../utils/API";
import EmpContext from "../utils/EmpContext";
import SearchBox from "./SearchBox";

const StyledDataArea = styled.div`

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
  
  useEffect(() =>{
    API.getUsers()
      .then(res =>{
        setUsers(res.data.results);
        setFilteredUsers(res.data.results);
      }).catch(err => {
        console.log(err);
      })
  }, []);
  
  const handleSort = () =>{
    if (order === "decending"){
      filteredUsers.sort((a, b) => (a.name.first < b.name.first) ? 1 : (a.name.first === b.name.first)
        ? ((a.name.last < b.name.last) ? 1 : -1) : -1);
      setOrder("ascending");
    } else{
      filteredUsers.sort((a, b) => (a.name.first > b.name.first) ? 1 : (a.name.first === b.name.first)
        ? ((a.name.last > b.name.last) ? 1 : -1) : -1);
      setOrder("decending")
    }
  }

  const handleSearchChange = event =>{
    const search = event.target.value;
    const filteredList = users.filter(item =>{
      let list = Object.values(item).join("").toLowerCase();
      return list.indexOf(search.toLowerCase()) !== -1;
    });
    setFilteredUsers(filteredList);
  }

  return(
    <EmpContext.Provider
      value={{
        users,
        filteredUsers, 
        order,
        headings,
        handleSearchChange,
        handleSort
      }}
    >
      <h2>Returned from Data Area</h2>
      {/* <Nav /> */}

      <SearchBox />
      <DataTable />

    </EmpContext.Provider>
  );
} //End of DataArea

export default DataArea;