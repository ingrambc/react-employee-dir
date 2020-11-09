import React from "react";

const EmpContext = React.createContext({
  users: [{}],
  filteredUsers: [{}],
  order: "",
  headings: [{}],
  handleSearchChange: () => {},
  handleSort: () => {}
});

export default EmpContext;