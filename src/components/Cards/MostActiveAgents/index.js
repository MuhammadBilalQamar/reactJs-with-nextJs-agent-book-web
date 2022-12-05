/*
 *
 *
 *  * @components/MostActiveAgents
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
import Paginations from "components/Paginations";
import { MOST_ACTIVE_AGENTS } from "constants";
import AgentCard from "../TopAgentCards/agentCard";

const MostActiveAgents = (props) => {
  return (
    <div>
      <div className="group-div14">
        <div className="torontos-most-active-agents">{MOST_ACTIVE_AGENTS}</div>
        <div className="group-div15">
          <div className="group-div16">
            <AgentCard
              agentButton="frame-button2"
              agentClass="agent-card-div"
              agentImg="icons/ellipse-105@2x.png"
              agentName="Tim Hortons"
            />

            <AgentCard
              agentButton="frame-button2"
              agentClass="agent-card-div5"
              agentImg="icons/ellipse-1051@2x.png"
              agentName="Joan Wrigley"
            />
          </div>
          <div className="group-div21">
            <AgentCard
              agentButton="frame-button2"
              agentClass="agent-card-div6"
              agentImg="icons/ellipse-1052@2x.png"
              agentName="Lydia Hollie"
            />

            <AgentCard
              agentButton="frame-button2"
              agentClass="agent-card-div3"
              agentImg="icons/ellipse-1053@2x.png"
              agentName="Dave Lordsky"
            />
          </div>
        </div>
      </div>
      <Paginations />
    </div>
  );
};

export default MostActiveAgents;
