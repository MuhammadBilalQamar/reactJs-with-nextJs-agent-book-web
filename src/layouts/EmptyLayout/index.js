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
 *  * @Author: FE24
 *
 *  * @Created Date: 03/12/2022
 *
 *
 *
 */

import React from "react";
import Footer from "./Footer";
import Header from "./Header";

const EmptyLayout = (props) => {
  return (
    <main className="empty-layout">
      <Header />
      {/** child component */}
      <section className="empty-layout-content">{props.children}</section>
      <Footer />
    </main>
  );
};

export default EmptyLayout;
