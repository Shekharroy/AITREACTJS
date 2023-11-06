import axios from "axios";

export const getRandomUsers = (setRandomUsers, setData) => {
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
};
