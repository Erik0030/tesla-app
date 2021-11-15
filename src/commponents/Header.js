import React from "react";
import "./Header.css";
import TeslaLogo from "../assets/teslaLogoSmall.svg";

function Header() {
  return (
    <div className="header">
      <div className="header__logo">
        <img src={TeslaLogo} alt="TeslaLogo" />
      </div>
      <div className="header__center">
        <a>Model S</a>
        <a>Model Y</a>
        <a>Model 3</a>
        <a>Model X</a>
        <a>Solar Panel</a>
        <a>Solar Roof</a>
      </div>
      <div className="header__right">
        <p>Shop</p>
        <p>Tesla Account</p>
      </div>
    </div>
  );
}

export default Header;
