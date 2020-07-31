import React from "react";
import "../../assets/components/Burger.scss";

function Burger({ open, setOpen }) {
  console.log(open);
  return (
    <>
      <div id="burger-container" open={open} onClick={() => setOpen(!open)}>
        <div class="burger-line" />
        <div class="burger-line" />
        <div class="burger-line" />
      </div>
    </>
  );
}

export default Burger;
