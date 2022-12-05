/*
 *
 *
 *  * @components/Layout/Main
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
import Footer from "./Footer";
import Header from "./Header";

function MainLayout(props) {
  
  return (
    <main className="main-layout">
      <Header />
      {/** child component */}
      <div className="content">{props.children}</div>
      <Footer />
    </main>
  );
}

export default MainLayout;
