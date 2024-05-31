import React from "react";
import { Link } from "react-router-dom";
import { IoLogoYoutube } from "react-icons/io5";
import "./Header.css";

function Header() {
  return (
    <div className="header__box">
      <a href="/" className="header__logo">
        Blog Portfolio
      </a>
    </div>
  );
}

export default Header;
