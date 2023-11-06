import { useState, useEffect } from "react";

function Image() {
  const [state, setState] = useState(
    "https://th.bing.com/th/id/OIP.LRCbygP9AZfeK3cNWE-OIQHaE8?pid=ImgDet&rs=1"
  );

  const [imagetitle, setImageTitle] = useState("React");

  const [title, setTitle] = useState("Image");

  // useEffect(() => {
  //   console.log("useEffect is called");
  // });

  useEffect(() => {
    document.title = imagetitle + " Image Title";
    console.log("useEffect - 2 is called");

    return () => {
      console.log("retuned function is called");
    };
  }, [title, state]);

  return (
    <div>
      <h2>{title} Component</h2>
      <button
        onClick={() => {
          setState(
            "https://th.bing.com/th/id/OIP.LRCbygP9AZfeK3cNWE-OIQHaE8?pid=ImgDet&rs=1"
          );
          setImageTitle("React");
        }}
      >
        React
      </button>{" "}
      &nbsp; &nbsp; &nbsp;
      <button
        onClick={() => {
          setState(
            "https://th.bing.com/th/id/OIP.fy_R-ha9eRncEutN-sUvVgHaEL?pid=ImgDet&rs=1"
          );

          setImageTitle("Angular");
        }}
      >
        Angular
      </button>
      &nbsp;&nbsp;&nbsp;
      <button
        onClick={() => {
          setTitle("Image title Changed");
        }}
      >
        Change Title
      </button>
      <br />
      <br />
      <img src={state} width={500} height={300} alt="tech" />
    </div>
  );
}

export default Image;
