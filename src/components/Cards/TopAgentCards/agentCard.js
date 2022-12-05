/*
 *
 *
 *  * @components/Cards/TopAgentCards/agentCard
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
import { CONTACT_AGENT, TIM_DESCRIPTION } from "constants";

const AgentCard = (props) => {
  const { agentClass, agentImg, agentName, agentButton } = props;
  return (
    <div>
      <div className={agentClass}>
        <img className="ellipse-icon" alt="" src={agentImg} />
        <div className="group-div4">
          <div className="tim-hortons-div">{agentName}</div>
          <div className="group-div5">
            <div className="div">5.0</div>
            <img className="group-icon" alt="" src="icons/group-269.svg" />
          </div>
          <div className="tim-is-a-real-estate-agent-at">
            <span className="tim-is-a-container">
              <span>{TIM_DESCRIPTION}</span>
              <span className="more-span">More</span>
            </span>
          </div>
        </div>
        <div className="contact-button">
          <button className={agentButton ? agentButton : "frame-button"}>
            <div className="contact-agent-div">{CONTACT_AGENT}</div>
          </button>
          <img className="icon" alt="" src="icons/icon.svg" />
        </div>
        <div className="line-div"></div>
      </div>
    </div>
  );
};

export default AgentCard;
