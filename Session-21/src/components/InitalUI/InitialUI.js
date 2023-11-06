import React from "react";

function InitialUI({ getRandomUsers, setRandomUsers, setData }) {
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
      <button
        onClick={() => {
          getRandomUsers(setRandomUsers, setData);
        }}
      >
        Get Users
      </button>
    </div>
  );
}

export default InitialUI;
