/*
 *
 *
 *  * @components/Inputs/SearchInput
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
import data from "constants/countries.json";
import { SEARCH_COUNTRY } from "constants";

const CountryDropDown = (props) => {
  const [country, setCountry] = React.useState(Object.values(data));
  React.useEffect(() => {
    // show only first 20 countries
    setCountry(country.slice(0, 20));
  }, [data]);

  return (
    <div>
      <div className="cntry-country-options-div">
        <div className="cntry-frame-div15">
          <img className="cntry-vector-icon" alt="" src="icons/vector.svg" />
          <input
            className="cntry-search-country-div"
            placeholder={SEARCH_COUNTRY}
            type={"text"}
          />
        </div>
        {country.map((item, index) => {
          return (
            <div className="CountryListDiv" key={index}>
              <img src={item.image} width="26" alt={item.name} />
              <div className="CountryName">{item.name}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CountryDropDown;
