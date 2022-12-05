/*
 *
 *
 *  * @components/Hero
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

import React from "react";
import { HEADER_SUBTEXT, SEARCHAGENT, HEADER_MAIN_TEXT } from "constants";

const HeroSection = (props) => {
  const { searchPanel, setSearchPanel } = props;
  const isBrowser = typeof window !== "undefined";
  const [width, setWidth] = React.useState("");

  React.useEffect(() => {
    if (isBrowser) {
      const handleResize = () => setWidth(window?.innerWidth);
      window?.addEventListener("resize", handleResize);
      return () => window?.removeEventListener("resize", handleResize);
    }
  }, [isBrowser]);

  const showSearchPanel = () => {
    setSearchPanel(!searchPanel);
  };

  return (
    <div>
      <div className="hero-three-div" style={{ width: width + "px" }}>
        <div className="hero-frame-div">
          <img
            className="hero-real-estate-agent-inviting-you-icon"
            alt=""
            src="icons/realestateagentinvitingyoungmarriedcoupleto20210828200619utc-1@2x.png"
          />
          <div className="hero-group-div">
            <div className="hero-group-div1">
              <div className="hero-find-the-perfect-real-estate-a">
                {HEADER_MAIN_TEXT}
              </div>
              <div className="hero-make-your-search-and-sale-easi">
                {HEADER_SUBTEXT}
              </div>
            </div>
            <div className="hero-search-bar-div">
              <div className="hero-rectangle-input"></div>
              <div className="hero-group-div2">
                <div className="hero-rectangle-div">
                  <div className="hero-rectangle-div">
                    <input
                      className="hero-text-input"
                      type="text"
                      onClick={showSearchPanel}
                    />
                    <img
                      className="hero-vector-icon"
                      alt=""
                      src="icons/vector.svg"
                    />
                  </div>
                </div>
              </div>
              <div className="hero-group-div5">
                <div className="hero-frame-button">
                  <button className="hero-search-agents-button">
                    {SEARCHAGENT}
                  </button>
                </div>
              </div>
            </div>
          </div>
          <img
            className="hero-group-icon"
            alt=""
            src="icons/group-1000001332.svg"
          />
          <input className="hero-rectangle-input1" type="text" />
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
