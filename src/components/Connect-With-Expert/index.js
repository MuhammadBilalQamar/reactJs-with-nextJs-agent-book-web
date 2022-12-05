/*
 *
 *
 *  * @components/Connect-With-Expert
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
import { OUR_AGENTS, CONNECT_WITH_EXPERT } from "constants";

const ConnectWithExpert = (props) => {
  return (
    <div>
      <div className="group-div72">
        <div className="rectangle-div30"></div>
        <div className="group-div73">
          <div className="group-div74">
            <b className="connect-with-an-expert-local-a">
              {CONNECT_WITH_EXPERT}
            </b>
            <div className="our-agents-are-here-to-help-yo">{OUR_AGENTS}</div>
          </div>
          <div className="search-bar-div">
            <input className="rectangle-input" type="text" />
            <div className="group-div75">
              <div className="rectangle-div31"></div>
              <img className="group-icon13" alt="" src="icons/group-203.svg" />
              <input
                className="search-by-name-or-location"
                placeholder="Search by name or location"
                type="text"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConnectWithExpert;
