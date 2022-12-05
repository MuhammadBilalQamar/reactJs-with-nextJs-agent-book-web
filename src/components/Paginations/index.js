/*
 *
 *
 *  * @components/Paginations
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

const Paginations = (props) => {
  return (
    <div>
      <button className="pagination-button">
        <div className="group-div13">
          <div className="div4">.....</div>
          <div className="atompage-default">
            <div className="containerrounded-div">
              <div className="rectangle-div"></div>
            </div>
            <div className="div5">2</div>
          </div>
          <div className="atompage-default1">
            <div className="containerrounded-div1">
              <div className="rectangle-div"></div>
            </div>
            <div className="div6">3</div>
          </div>
          <div className="atompage-default2">
            <div className="containerrounded-div2">
              <div className="rectangle-div"></div>
            </div>
            <div className="div7">6</div>
          </div>
          <div className="atompage-default3">
            <div className="containerrounded-div3">
              <div className="rectangle-div"></div>
            </div>
            <div className="div8">7</div>
          </div>
          <div className="atompage-active">
            <div className="containerrounded-div4">
              <div className="rectangle-div4"></div>
            </div>
            <div className="div9">1</div>
          </div>
        </div>
        <div className="atompage-default4">
          <div className="containerrounded-div5">
            <div className="rectangle-div5"></div>
          </div>
          <img
            className="chevronleft-icon"
            alt=""
            src="icons/chevronleft.svg"
          />
        </div>
        <div className="atompage-default5">
          <div className="containerrounded-div5">
            <div className="rectangle-div5"></div>
          </div>
          <img
            className="chevronright-icon"
            alt=""
            src="icons/chevronright.svg"
          />
        </div>
      </button>
    </div>
  );
};

export default Paginations;
