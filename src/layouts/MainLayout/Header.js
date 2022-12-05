/*
 *
 *
 *  * @layouts/MainLayout/Header.js
 *
 *  *
 *
 *  * Copyright (c) 2022 Agent Book
 *
 *  * All rights reserved.
 *
 *  *
 *
 *  * This software is the confidential and proprietary information of Agent Book.
 *
 *  * @Author: MuhammadBilalQamar
 *
 *  * @Created Date: 03/12/2022
 *
 *
 *
 */

import { CountryDropDown, HeaderProfile } from "components";
import { BRAND } from "constants";
import React from "react";

const Header = (props) => {
  const [isMenuOpen, setIsMenuOpen] = React.useState(false);
  const [isCountryOpen, setIsCountryOpen] = React.useState(false);
  const ShowMenu = () => {
    setIsMenuOpen(!isMenuOpen);
    setIsCountryOpen(false);
  };
  const ShowCountry = () => {
    setIsMenuOpen(false);
    setIsCountryOpen(!isCountryOpen);
  };
  return (
    <header>
      <div className="hero-group-div6">
        <div className="hero-group-div7">
          <img
            className="hero-group-icon1"
            alt={BRAND}
            src="icons/group-1000001996.svg"
          />
          <div className="hero-group-div8">
            <button className="hero-frame-button1" onClick={ShowMenu}>
              <img
                className="hero-group-icon2"
                alt=""
                src="icons/group-1000001519.svg"
              />
            </button>
            <img
              className="hero-frame-icon"
              onClick={ShowCountry}
              alt=""
              src="icons/frame-17197.svg"
            />
            {isMenuOpen && <HeaderProfile />}
            {isCountryOpen && <CountryDropDown />}
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
