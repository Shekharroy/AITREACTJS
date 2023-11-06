import "./Profile.css";
import { useState } from "react";

function Profile() {
  let [profile, setProfile] = useState({
    username: "Jay Sinha",
    gender: "male",
    image:
      "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
    email: "Jaysinha123@gmail.com",
  });

  let [name, setName] = useState("Profile Component");

  let [styles, setStyles] = useState({
    bgcolor: "white",
    textcolor: "black",
    title: "Check to Switch Dark Mode",
  });

  const changeToJay = () => {
    setProfile({
      username: "Jay Sinha",
      gender: "male",
      image:
        "https://i.pinimg.com/originals/b8/5e/9d/b85e9df9e9b75bcce3a767eb894ef153.jpg",
      email: "Jaysinha123@gmail.com",
    });
  };

  const changeToZiya = () => {
    setProfile({
      username: "Ziya Sharma",
      gender: "female",
      image:
        "https://th.bing.com/th/id/R.65c93fce16c1532b3e15a4a52f3ef7f6?rik=nzRaktT%2fUnQRqw&riu=http%3a%2f%2fthispix.com%2fwp-content%2fuploads%2f2015%2f06%2f011.jpg&ehk=gJKh7A8T2u3z4vSqk7O6KLmxjgWQ6OsIxQN3fUiN%2bAM%3d&risl=&pid=ImgRaw&r=0",
      email: "ziyasharma@gmail.com",
    });
  };

  const changeStyle = (event) => {
    if (event.target.checked) {
      setStyles({
        bgcolor: "black",
        textcolor: "white",
        title: "Uncheck to Switch Light Mode",
      });
    } else {
      setStyles({
        bgcolor: "white",
        textcolor: "black",
        title: "Check to Switch Dark Mode",
      });
    }
  };

  return (
    <div className="MainContainer">
      <h2>{name}</h2>
      <div className="profileContainer">
        <section className="imageSection">
          <img src={profile.image} width="100%" height="100%" alt="user" />
        </section>

        <section
          className="contentSection"
          style={{ backgroundColor: styles.bgcolor, color: styles.textcolor }}
        >
          <dl>
            <dt>
              <b>User Name</b>
            </dt>
            <dd>{profile.username}</dd>
            <dt>
              <b>Email Id</b>
            </dt>
            <dd>{profile.email}</dd>
            <dt>
              <b>Gender</b>
            </dt>
            <dd>{profile.gender}</dd>
            <dt>
              <b>Description</b>
            </dt>
            <dd>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Voluptatibus nemo sit suscipit minus blanditiis ipsum numquam
              itaque officia tempora qui cum quia odit excepturi hic inventore
              enim, sapiente culpa a pariatur commodi exercitationem non quam.
              Atque
            </dd>
          </dl>
          <button onClick={changeToJay}>Jay Sinha</button>
          &nbsp;&nbsp;&nbsp;&nbsp;
          <button onClick={changeToZiya}>Ziya Sharma</button>
          <br />
          <br />
          <input type="checkbox" onChange={changeStyle} />
          {styles.title}
        </section>
      </div>
    </div>
  );
}

export default Profile;
