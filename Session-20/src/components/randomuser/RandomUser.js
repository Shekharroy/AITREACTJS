import axios from "axios";
import { useState, useEffect } from "react";
import Table from "../table/Table";
import NoUser from "../nouser/NoUser";
import Radios from "../radios/Radios";
import InitialUI from "../InitalUI/InitialUI";
import { getRandomUsers } from "../../Services/RandomUserService";

function RandomUser() {
  const [randomusers, setRandomUsers] = useState([]);

  const [data, setData] = useState([]);

  useEffect(() => {
    axios
      .get("https://randomuser.me/api/?results=30")
      .then((res) => {
        console.log(res.data.results);
        setRandomUsers(res.data.results);
        setData(res.data.results);
      })
      .catch((error) => {
        alert("Something went wrong");
        console.log(error);
      });
  }, []);

  const filterData = (event) => {
    if (event.target.id === "all") {
      setRandomUsers(data);
    } else if (event.target.id === "male") {
      setRandomUsers(data.filter((ele) => ele.gender === "male"));
    } else {
      setRandomUsers(data.filter((ele) => ele.gender === "female"));
    }
  };

  return (
    <div style={{ padding: "30px" }}>
      <InitialUI
        getRandomUsers={getRandomUsers}
        setData={setData}
        setRandomUsers={setRandomUsers}
      />

      {randomusers.length > 0 && <Radios filterData={filterData} />}

      {randomusers.length > 0 ? (
        <Table randomusers={randomusers} />
      ) : (
        <NoUser />
      )}
    </div>
  );
}

export default RandomUser;
