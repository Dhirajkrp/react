import React, { useState } from "react";

function ObjectState() {
  const [name, setName] = useState({
    firstname: "",
    lastname: "",
  });
  return (
    <>
      <form action="">
        <input
          type="text"
          value={name.firstname}
          onChange={(e) => setName({ ...name, firstname: e.target.value })}
        />
        <input
          type="text"
          value={name.lastname}
          onChange={(e) => setName({ ...name, lastname: e.target.value })}
        />

        <span>Firstname : {name.firstname} </span>
        <span>Lastname : {name.lastname} </span>
      </form>
    </>
  );
}

export default ObjectState;
