/*
 *
 *
 *  * @components/Cards/ArticleCard
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

import Paginations from "components/Paginations";
import { LATEST_ARTICLES } from "constants";
import React from "react";
import ArticleCardDesign from "./ArticleCardDesign";

const ArticleCard = (props) => {
  return (
    <div>
      <ArticleCardDesign
        cardTitle="How to get multiple offers on your home"
        cardTag="BUYING"
        cardAgent="Joan Hollie"
        cardThumbnail="icons/rectangle-188@2x.png"
        cardAgentImg="icons/ellipse-103@2x.png"
        cardHeaderClass="firstArticleCard"
      />

      <ArticleCardDesign
        cardTitle="10 home buying tips for first-time home buyers"
        cardTag="SELLING"
        cardAgent="tim hortons"
        cardThumbnail="icons/rectangle-1881@2x.png"
        cardAgentImg="icons/ellipse-1054@2x.png"
        cardHeaderClass="secondArticleCard"
      />

      <ArticleCardDesign
        cardTitle="15 simple and relaxing decor ideas to transform your home"
        cardTag="BUYING"
        cardAgent="Joan Hollie"
        cardThumbnail="icons/rectangle-1882@2x.png"
        cardAgentImg="icons/ellipse-1055@2x.png"
        cardHeaderClass="thirdArticleCard"
      />

      <Paginations />
      <div className="latest-articles-by-agents">{LATEST_ARTICLES}</div>
    </div>
  );
};

export default ArticleCard;
