/* eslint-disable */

import React from "react";
import { FlexBox } from "@lumx/react";
import Search from "../Search";

const Header = (props) => {
  const { searchText, setSearchText } = props;

  return (
    <header className="lumx-spacing-padding-big header">
      <img src="./assets/marvel-logo.svg" alt="logo" className="logo" />
      <FlexBox className="search-container">
        <Search searchText={searchText} setSearchText={setSearchText} />
      </FlexBox>
    </header>
  );
};

export default Header;
