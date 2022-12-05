/*
 *
 *
 *  * @components/ChooseYourAgent
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

import { CHOOSEYOURAGENT } from "constants";
import React from "react";

const ChooseYourAgent = (props) => {
  return (
    <div>
      <div className="choose-your-agent">
        <div className="choice-div">
          <div className="rectangle-div14"></div>
          <div className="choice-text-div">
            <div className="choosing-your-agent">
              {CHOOSEYOURAGENT?.CHOOSEYOURAGENT}
            </div>
            <div className="how-to-choose-your-agent">
              {CHOOSEYOURAGENT?.subText}
            </div>
            <div className="you-should-choose-an-agent-you">
              {CHOOSEYOURAGENT?.mainText}
            </div>
            <div className="group-div27">
              <div className="how-and-where-your-property-wi">
                {CHOOSEYOURAGENT?.firstQuestion}
              </div>
              <div className="group-div28">
                <div className="rectangle-div15"></div>
                <div className="rectangle-div16"></div>
              </div>
            </div>
            <div className="group-div29">
              <div className="how-and-where-your-property-wi">
                {CHOOSEYOURAGENT?.secondQuestion}
              </div>
              <div className="group-div30">
                <div className="rectangle-div17"></div>
              </div>
            </div>
            <div className="group-div31">
              <div className="group-div32">
                <div className="how-often-you-can-expect-feedb">
                  {CHOOSEYOURAGENT?.thirdQuestion}
                </div>
              </div>
              <div className="group-div33">
                <div className="rectangle-div17"></div>
              </div>
            </div>
          </div>
          <button className="frame-button8">
            <img className="vector-icon" alt="" src="icons/group-203.svg" />
            <div className="find-an-agent">{CHOOSEYOURAGENT?.btnText}</div>
          </button>
        </div>
        <img
          className="group-icon8"
          alt=""
          src="icons/group-1000001339@2x.png"
        />
      </div>
    </div>
  );
};

export default ChooseYourAgent;
