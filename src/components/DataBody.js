import React, { useContext } from "react";
import EmpContext from "../utils/EmpContext";

const DataBody = ()=>{
  //get user state from context
  const { filteredUsers } = useContext(EmpContext);
  console.log(filteredUsers);

  const formatDate = (date) => {
    let dateArr = date.split("-");
    let dayArr = dateArr[2].split("T");
    let year = dateArr[0];
    let month = dateArr[1];
    let day = dayArr[0];
    let fDate = [month, day, year].join("-");
    return fDate;
  }

  return(
      <tbody>
        {filteredUsers[0] !== undefined && filteredUsers[0].name !== undefined ? (
          filteredUsers.map(({ name, picture, phone, email, dob, login}) => {
            return(
              <tr key={login.uuid}>
                <td data-header="Image">
                  <img src={picture.medium} alt={"picture of "+name.first+ " "+name.last} />
                </td>
                <td data-header="Name">
                  {name.first} {name.last}
                </td>
                <td data-header="Phone">
                  {phone}
                </td>
                <td data-header="Email">
                  {email}
                </td>
                <td data-header="DOB">
                  {formatDate(dob.date)}
                </td>
              </tr>
            )
          })
        ) : (
          <tr>No matches found</tr>
        )}
      </tbody>
  );
}//end of DataBody

export default DataBody;