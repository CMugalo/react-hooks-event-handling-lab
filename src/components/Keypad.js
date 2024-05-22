// Code Keypad Component Here
import React from "react";

function Keypad() {
  function handlePassword() {
    console.log("Entering password...");
  }
  return (
    <div>
      <input type="password" onChange={handlePassword}></input>
    </div>
  );
}

export default Keypad;
