/*
 *
 *
 *  * @components/Main-Page-Content
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
import ArticleCard from "components/Cards/ArticleCard";
import MostActiveAgents from "components/Cards/MostActiveAgents";
import TopAgentCards from "components/Cards/TopAgentCards";
import ChooseYourAgent from "components/Choose-Your-Agent";
import ConnectWithExpert from "components/Connect-With-Expert";
import RealTimeConversation from "components/Real-Time-Conversation";

const MainPageContent = (props) => {
  return (
    <div>
      <div className="frame-div">
        <TopAgentCards />
        <div className="top-agents-div">
          <MostActiveAgents />
        </div>
        <div className="frame-div1">
          <ChooseYourAgent />
        </div>
        <div className="articles-section-div">
          <ArticleCard />
        </div>
        <div className="group-div71">
          <div className="rectangle-div29"></div>
          <ConnectWithExpert />
          <RealTimeConversation />
        </div>
      </div>
    </div>
  );
};

export default MainPageContent;
