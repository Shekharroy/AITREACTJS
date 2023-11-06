import { useState } from "react";

function Image() {
  let [imageurl, setImageUrl] = useState(
    "https://wallpapercave.com/wp/wp4923992.png"
  );

  const changeToReact = () => {
    setImageUrl("https://wallpapercave.com/wp/wp4923992.png");
  };

  function changeToNodeJS() {
    setImageUrl(
      "https://innovationyourself.com/wp-content/uploads/2020/08/nodejs-logo.png"
    );
  }

  return (
    <div>
      <img src={imageurl} width={500} height={300} />
      <br />
      <button onClick={changeToReact}>React</button>&nbsp;&nbsp;
      <button onClick={changeToNodeJS}>NodeJS</button>
    </div>
  );
}
export default Image;
