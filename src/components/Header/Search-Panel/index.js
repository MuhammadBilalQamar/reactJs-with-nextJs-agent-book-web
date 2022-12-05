/*
 *
 *
 *  * @components/Inputs/SearchPanel
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
import { BY_NAME, LOSLOC, BY_LOCATION, AgentArray } from "constants";

const SearchPanel = (props) => {
  return (
    <div>
      <div className="searchPanel-frame-div">
        <div className="searchPanel-search-dropdown-div">
          <div className="searchPanel-rectangle-div"></div>
          <div className="searchPanel-rectangle-div1"></div>
          <div className="searchPanel-group-div">
            <input
              type={"text"}
              placeholder="Use my current location"
              className="searchPanel-use-my-current-location"
            />
            <img
              className="searchPanel-entypolocation-pin-icon"
              alt=""
              src="icons/entypolocationpin.svg"
            />
          </div>
          <div className="searchPanel-by-name-div">{BY_NAME}</div>
          {AgentArray.map((item,index) => {
            return (
              <div className={item.class} key={index}>
                <img className="byNameImage" alt="" src={item.image} />
                <div className="byNameText">{item.name}</div>
                <div class="byName5">5.0</div>
                <img class="byName5Star" alt="" src="icons/group-269.svg" />
              </div>
            );
          })}

          <div className="searchPanel-line-div"></div>
          <div className="searchPanel-group-div27">
            <div className="searchPanel-by-location-div">{BY_LOCATION}</div>
            <div className="searchPanel-frame-div9">
              <div className="searchPanel-frame-div10">
                <img
                  className="searchPanel-vector-icon"
                  alt=""
                  src="icons/vector.svg"
                />
                <div className="searchPanel-los-angles-california">
                  {LOSLOC}
                </div>
              </div>
            </div>
            <div className="searchPanel-frame-div9" style={{ top: "84px" }}>
              <div className="searchPanel-frame-div10">
                <img
                  className="searchPanel-vector-icon"
                  alt=""
                  src="icons/vector.svg"
                />
                <div className="searchPanel-los-angles-california">
                  {LOSLOC}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchPanel;
