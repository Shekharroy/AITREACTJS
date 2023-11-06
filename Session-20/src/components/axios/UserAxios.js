import axios from "axios";
import { useState } from "react";

function UserAxios() {
  const [users, setUsers] = useState([]);

  const getUsers = () => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((res) => {
        console.log(res.data);
        setUsers(res.data); //[{},{},{},{}....]
      })
      .catch((error) => {});
  };
  return (
    <div>
      <h2>Axios Example</h2>
      <p>
        Lorem ipsum dolor, sit amet consectetur adipisicing elit. Consectetur
        molestias culpa reprehenderit. Alias debitis dignissimos commodi aperiam
        amet magnam voluptates neque. Harum aliquam voluptatem illum iure
        veniam. Voluptate, iure soluta. Alias numquam officia culpa, voluptates
        voluptatem labore excepturi quo beatae fuga praesentium explicabo modi
        suscipit, inventore eaque nesciunt consequatur unde aperiam tempora
        harum enim deleniti. Nam nobis in incidunt quas sint sed deleniti culpa
        itaque, sapiente numquam dolores, omnis amet dolorem dolore, autem error
        alias. Cum odio distinctio similique tempore. Nihil autem necessitatibus
        reiciendis aspernatur ratione accusantium debitis nisi libero
        perspiciatis consectetur dolor, alias fuga? Iste sit enim facere
        pariatur?
      </p>

      <button onClick={getUsers}>Get Users</button>

      {users.length > 0 ? ( //10
        <div>
          <ul>
            {users.map((user) => {
              return <li style={{ color: "green" }}>{user.name}</li>;
            })}
          </ul>
        </div>
      ) : (
        <h2 style={{ textAlign: "center", color: "red" }}>
          No Users Informations
        </h2>
      )}
    </div>
  );
}

export default UserAxios;
