import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import { NavLink } from "react-router-dom";

const Header = ({ countBasketItems }) => {
  const favoritesCount = 0;

  return (
    <header className="header">
      <NavLink to="/">
        <img src={logo} alt="Logo" className="header__logo" />
      </NavLink>
      <div className="header__btns">
        <NavLink className="header__favorites header__btn" to="/">
          {favoritesCount !== 0 ? <span>{favoritesCount}</span> : undefined}
        </NavLink>
        <NavLink className="header__basket header__btn" to="/basket">
          {countBasketItems !== 0 ? <span>{countBasketItems}</span> : undefined}
        </NavLink>
      </div>
    </header>
  );
};

export default Header;
