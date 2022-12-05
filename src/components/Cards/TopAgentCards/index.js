/*
 *
 *
 *  * @components/Cards/TopAgentCards
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
import { CLIENTS_LOVED, TOP_RATED_AGENTS } from "constants";
import AgentCard from "./agentCard";

const TopAgentCards = (props) => {
  return (
    <div>
      <div className="group-div">
        <div className="group-div1">
          <div className="torontos-top-rated-agents">{TOP_RATED_AGENTS}</div>
          <div className="clients-loved-working-with-the">{CLIENTS_LOVED}</div>
        </div>
        <div className="group-div2">
          <div className="group-div3">
            <AgentCard
              agentClass="agent-card-div"
              agentImg="icons/ellipse-104@2x.png"
              agentName="Tim Hortons"
            />
            <AgentCard
              agentClass="agent-card-div1"
              agentImg="icons/ellipse-1041@2x.png"
              agentName="Joan Wrigley"
            />
          </div>
          <div className="group-div8">
            <AgentCard
              agentClass="agent-card-div2"
              agentImg="icons/ellipse-1042@2x.png"
              agentName="Lydia Hollie"
            />
            <AgentCard
              agentClass="agent-card-div3"
              agentImg="icons/ellipse-1043@2x.png"
              agentName="Dave Lordsky"
            />
          </div>
        </div>
        <Paginations />
      </div>
    </div>
  );
};

export default TopAgentCards;
