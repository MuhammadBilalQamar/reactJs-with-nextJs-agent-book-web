/*
 *
 *
 *  * @layouts/MainLayout/Footer.js
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

import { FOOTER_DESCRIPTION_TEXT } from "constants";
import React from "react";

function Footer(props) {
  return (
    <footer>
      <div className="footer-big-5">
          <div className="bg-div"></div>
          <img
            className="pexels-timur-saglambilek-87223-icon"
            alt=""
            src="icons/pexelstimursaglambilek87223-2@2x.png"
          />
          <div className="footerContent">            
          <div className="group-div63">
            <div className="col-1-div">
              <div className="lorem-ipsum-dolor-amet-consec">
                {FOOTER_DESCRIPTION_TEXT}
              </div>
              <div className="social-links-div">
                <img
                  className="social-icons-white-instagr"
                  alt=""
                  src="icons/social-icons--white--instagram.svg"
                />
                <img
                  className="social-icons-white-instagr"
                  alt=""
                  src="icons/social-icons--white--dribbble.svg"
                />
                <img
                  className="social-icons-white-instagr"
                  alt=""
                  src="icons/social-icons--white--twitter.svg"
                />
                <img
                  className="social-icons-white-instagr"
                  alt=""
                  src="icons/social-icons--white--youtube.svg"
                />
              </div>
              <img className="group-icon12" alt="" src="icons/group-133.svg" />
            </div>
            <div className="group-div64">
              <div className="resources-div">Resources</div>
              <div className="list-items-div">
                <div className="articles-div">Articles</div>
                <div className="articles-div">Guides</div>
                <div className="articles-div">Real Estate News</div>
              </div>
            </div>
            <div className="group-div65">
              <div className="resources-div">Company</div>
              <div className="list-items-div1">
                <div className="group-div66">
                  <div className="about-div">About</div>
                  <div className="blog-div">Blog</div>
                  <div className="faq-div">Contact</div>
                  <div className="careers-div">
                    <div className="articles-div">Careers</div>
                    <div className="were-hiring-div">We’re hiring</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="group-div67">
              <div className="resources-div">Agentbook</div>
              <div className="group-div68">
                <div className="about-div">Search for agent</div>
                <div className="blog-div">Search for sale</div>
                <div className="faq-div">FAQ</div>
              </div>
            </div>
          </div>
          <div className="group-div69">
            <div className="about-div">2022 Agentbook All Rights Reserved</div>
            <div className="group-div70">
              <div className="about-div">Terms & Conditions</div>
              <div className="privacy-policy-div">Privacy Policy</div>
              <div className="cookie-policy-div">Cookie Policy</div>
            </div>
          </div>
          <div className="line-div8"></div>
          </div>
        </div>
    </footer>
  );
}

export default Footer;
