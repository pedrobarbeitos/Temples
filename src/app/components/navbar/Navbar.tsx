import Link from "next/link";
import React from "react";
import "./Navbar.scss";

type Props = {};

function Navbar({}: Props) {
  return (
    <div className="navbar">
      <div className="navbarLeft">
        <strong>Temples</strong>
        <div>Index</div>
        <div>Search</div>
      </div>
      <div className="navbarRight">
        <div>Shop</div>
        <div>About</div>
      </div>
    </div>
  );
}

export default Navbar;
