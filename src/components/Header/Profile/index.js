/*
 *
 *
 *  * @components/Header/Profile
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
import { CHANGEPASSWORD, LOGOUT, MYPROFILE } from "constants";

const HeaderProfile = (props) => {
  return (
    <div>
      <div className="profilecss-frame-div">
        <div className="profilecss-frame-div1">
          <div className="profilecss-frame-div2">
            <div className="profilecss-group-div">
              <div className="profilecss-my-profile-div">{MYPROFILE}</div>
              <img
                className="profilecss-vector-icon"
                alt=""
                src="icons/vector copy.svg"
              />
            </div>
          </div>
          <div className="profilecss-frame-div3">
            <div className="profilecss-group-div1">
              <div className="profilecss-change-password-div">
                {CHANGEPASSWORD}
              </div>
              <img
                className="profilecss-vector-icon1"
                alt=""
                src="icons/vector1.svg"
              />
            </div>
          </div>
          <div className="profilecss-frame-div4">
            <div className="profilecss-group-div2">
              <div className="profilecss-logout-div">{LOGOUT}</div>
              <img
                className="profilecss-vector-icon2"
                alt=""
                src="icons/vector2 copy.svg"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeaderProfile;
