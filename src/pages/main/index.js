/*
 *
 *
 *  * @components/Real-Time-Conversation
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
import { MainLayout } from "layouts";
import { HeroSection, MainPageContent, SearchPanel } from "components";
import NoSSR from "components/NoSSR";

export default function Main() {
  const [searchPanel, setSearchPanel] = React.useState(false);
  return (
    <NoSSR>
      <MainLayout>
        <HeroSection
          searchPanel={searchPanel}
          setSearchPanel={setSearchPanel}
        />
        {searchPanel && <SearchPanel />}
        <MainPageContent />
      </MainLayout>
    </NoSSR>
  );
}
