import axios from "axios";
import { useState } from "react";
function RandomUser() {
  const [randomusers, setRandomUsers] = useState([]);
  const getRandomUsers = () => {
    axios
      .get("https://randomuser.me/api/?results=30")
      .then((res) => {
        console.log(res.data.results);
        setRandomUsers(res.data.results);
      })
      .catch((error) => {
        alert("Something went wrong");
        console.log(error);
      });
  };
  return (
    <div>
      <h2>Random Users</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consectetur
        iste dolorem sed tempora, quibusdam odit eligendi exercitationem, quas,
        ea labore obcaecati architecto temporibus reiciendis libero maiores nam?
        Natus, dolore. Officia adipisci illum commodi facilis aperiam voluptatum
        ducimus voluptas optio molestias velit quia pariatur odio porro mollitia
        expedita distinctio sint, alias ullam vitae ipsam maiores laboriosam
        nostrum veritatis saepe. Mollitia inventore quia molestiae sapiente id
        aliquam quam libero quidem. Temporibus odio amet voluptate ducimus
        cumque ut velit, iste possimus quia repellat, est perspiciatis
        voluptatum eum laboriosam sed id placeat dignissimos? Dolore odio itaque
        pariatur qui consequatur commodi omnis doloribus. Aliquam, qui!
      </p>
      <button onClick={getRandomUsers}>Get Users</button>
      {randomusers.length > 0 && (
        <div
          style={{
            display: "flex",
            marginTop: "30px",
            justifyContent: "center",
          }}
        >
          <div>
            <input type="radio" name="gender" />
            ALL
          </div>
          <div>
            <input type="radio" name="gender" />
            Male
          </div>
          <div>
            <input type="radio" name="gender" />
            Female
          </div>
        </div>
      )}

      {randomusers.length > 0 ? (
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
      ) : (
        <h2 style={{ marginTop: "50px", textAlign: "center", color: "red" }}>
          No Users Information
        </h2>
      )}
    </div>
  );
}

export default RandomUser;
