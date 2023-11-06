import { useState } from "react";
import { newusers } from "../../model/NewUser";

function Userlist() {
  const [state, setState] = useState([
    {
      name: "Raj Sinha",
      city: "Delhi",
      email: "Raj@gmail.com",
    },
    {
      name: "Riya Verma",
      city: "Mumbai",
      email: "Riyaverma@gmail.com",
    },
    {
      name: "Ziya Khan",
      city: "Pune",
      email: "Ziya@gmail.com",
    },
    {
      name: "Sneha Reddy",
      city: "Hyderabad",
      email: "Sneha@gmail.com",
    },
    {
      name: "Rohan Sharma",
      city: "Bhopal",
      email: "Rohan@gmail.com",
    },
  ]);

  const updateTable = (event) => {
    if (event.target.name === "old") {
      setState([
        {
          name: "Raj Sinha",
          city: "Delhi",
          email: "Raj@gmail.com",
        },
        {
          name: "Riya Verma",
          city: "Mumbai",
          email: "Riyaverma@gmail.com",
        },
        {
          name: "Ziya Khan",
          city: "Pune",
          email: "Ziya@gmail.com",
        },
        {
          name: "Sneha Reddy",
          city: "Hyderabad",
          email: "Sneha@gmail.com",
        },
        {
          name: "Rohan Sharma",
          city: "Bhopal",
          email: "Rohan@gmail.com",
        },
      ]);
    } else {
      setState(newusers);
    }
  };

  return (
    <div>
      <h2>User List</h2>
      <table frame="box" rules="all" cellPadding={10} width={500}>
        <thead>
          <tr>
            <th>NAME</th>
            <th>CITY</th>
            <th>EMAIL</th>
          </tr>
        </thead>

        <tbody>
          {state.map((data) => {
            // data = {name:"",city:"",email:""}
            return (
              <tr>
                <td>{data.name}</td>
                <td>{data.city}</td>
                <td>{data.email}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      <br />
      <div style={{ textAlign: "center", width: "500px" }}>
        <button name="old" onClick={updateTable}>
          Old Users
        </button>
        &nbsp;&nbsp;&nbsp;
        <button name="new" onClick={updateTable}>
          New Users
        </button>
      </div>
    </div>
  );
}

export default Userlist;
