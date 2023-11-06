import { useContext } from "react";
import mycontext from "../contextapi/context";

function Heading(props) {
  var data = useContext(mycontext);
  //props = {children :"This is my First Children Conten"}

  return (
    <div>
      <h2>
        Heading Component : {data.name} {data.city}
      </h2>
    </div>
  );
}

export default Heading;
