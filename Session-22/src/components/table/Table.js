import React from "react";

function Table({ randomusers }) {
  return (
    <table width={1000} style={{ margin: "20px auto" }} cellPadding={10}>
      <thead style={{ color: "white" }}>
        <tr bgColor="black">
          <th>IMAGE</th>
          <th>NAME</th>
          <th>GENDER</th>
          <th>CITY</th>
          <th>EMAIL</th>
        </tr>
      </thead>

      <tbody>
        {randomusers.map(function (user) {
          return (
            <tr>
              <td>
                <img
                  style={{ borderRadius: "50%" }}
                  src={user.picture.medium}
                  width={80}
                  height={80}
                  alt="user image"
                />
              </td>
              <td>
                {user.name.first} {user.name.last}
              </td>
              <td>{user.gender}</td>
              <td>{user.location.city}</td>
              <td>{user.email}</td>
            </tr>
          );
        })}
      </tbody>
    </table>
  );
}

export default Table;
