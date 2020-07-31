import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../../assets/components/Header.scss";

import Burger from "./Burger";
import WideMenu from "./WideMenu";
import MobileMenu from "./MobileMenu";
import useWindowDimensions from "../../CustomHooks/UseWindowDimensions";

function Header() {
  const [open, setOpen] = useState(false);

  //get height and width from custom hook and
  //allow browser to display different menu
  //based on screen width
  const { height, width } = useWindowDimensions();

  return (
    <>
      <div id="header-container">
        <div id="title-container">
          <h1 id="title">Book List</h1>
        </div>

        {width < 620 ? (
          <div id="burger-container">
            <Burger open={open} setOpen={setOpen} />{" "}
          </div>
        ) : (
          <WideMenu />
        )}
      </div>

      <hr />
      <MobileMenu open={open} setOpen={setOpen} />
    </>
  );
}

export default Header;
