/*
 *
 *
 *  * @components/ArcicleCard/ArticleCardDesign
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

const ArticleCardDesign = (props) => {
  const {
    cardTitle,
    cardTag,
    cardAgent,
    cardThumbnail,
    cardAgentImg,
    cardHeaderClass,
  } = props;
  return (
    <div>
      <div className={cardHeaderClass + " group-div34"}>
        <div className="rectangle-div19"></div>
        <img className="rectangle-icon" alt="" src={cardThumbnail} />
        <img className="arrows-icon" alt="" />
        <div className="group-div35">
          <div className="group-div36">
            <b className="how-to-get-multiple-offers-on">{cardTitle}</b>
          </div>
          <div className="group-div37">
            <div className="group-div38">
              <div className="selling-div">{cardTag}</div>
              <img className="vector-icon1" alt="" src="icons/vector1.svg" />
            </div>
            <div className="group-div39">
              <div className="group-div7">
                <img className="ellipse-icon8" alt="" src={cardAgentImg} />
                <div className="joan-hollie-div">{cardAgent}</div>
              </div>
            </div>
          </div>
        </div>
        <div className="group-div41">
          <div className="group-div42">
            <div className="march-21-2022">MARCH 21, 2022</div>
            <img className="group-icon9" alt="" src="icons/group.svg" />
          </div>
          <div className="group-div43">
            <div className="min-read-div">5 MIN READ</div>
            <img className="vector-icon2" alt="" src="icons/vector2.svg" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticleCardDesign;
