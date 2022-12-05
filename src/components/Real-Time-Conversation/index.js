/*
 *
 *
 *  * @components/Real-Time-Conversation
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
import { REALTIME } from "constants";

const RealTimeConversation = (props) => {
  return (
    <div>
      <div className="group-div76">
        <div className="group-div7">
          <div className="choice-text-div1">
            <div className="chat-with-an-agent">
              {REALTIME?.CHAT_WITH_AN_AGENT}
            </div>
            <div className="real-time-conversation">
              {REALTIME?.REAL_TIME_CONVERSATION}
            </div>
            <div className="you-should-choose-an-agent-you1">
              {REALTIME?.YOUSHOULD}
            </div>
            <div className="group-div78">
              <div className="group-div79">
                <div className="search-for-an-agent-by-name-or">
                  {REALTIME?.SEARCH_FOR_AN_AGENT}
                </div>
                <div className="group-div80">
                  <div className="rectangle-div32"></div>
                  <div className="rectangle-div33"></div>
                </div>
              </div>
              <div className="group-div81">
                <div className="search-for-an-agent-by-name-or">
                  {REALTIME?.FILTER_THE_RESULTS}
                </div>
                <div className="group-div82">
                  <div className="rectangle-div34"></div>
                </div>
              </div>
              <div className="group-div83">
                <div className="group-div84">
                  <div className="select-and-contact-your-best-m">
                    {REALTIME?.SELECT_AND_CONTACT}
                  </div>
                </div>
                <div className="group-div85">
                  <div className="rectangle-div34"></div>
                </div>
              </div>
            </div>
            <button className="frame-button9">
              <img className="vector-icon" alt="" src="icons/group-203.svg" />
              <div className="find-an-agent">{REALTIME?.FIND_AN_AGENT}</div>
            </button>
          </div>
          <img
            className="group-icon14"
            alt=""
            src="icons/group-1000001335@2x.png"
          />
        </div>
      </div>
    </div>
  );
};

export default RealTimeConversation;
