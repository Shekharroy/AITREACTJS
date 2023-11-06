import "./Profile.css";

function Profile(props) {
  // props = {name:"",image:"",id:""}
  return (
    <div className="profileCard">
      <img src={props.image} width="100%" height="200" alt="profile" />
      <h3>{props.id}</h3>
      <h2> {props.name} </h2>
      <p>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Veniam autem
        aliquam quasi ut inventore at sunt blanditiis dicta magnam suscipit!
      </p>
      <button>Profile Details</button>
    </div>
  );
}

export default Profile;
