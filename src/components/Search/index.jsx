/* eslint-disable */
import React from "react";
import { TextField, Theme } from "@lumx/react";
import { mdiMagnify } from "@lumx/icons";

const Search = (props) => {
  const { searchText, setSearchText } = props;

  function handleChange(e) {
    setSearchText(e);
  }

  return (
    <TextField
      theme={Theme.dark}
      placeholder="Search ..."
      icon={mdiMagnify}
      onChange={handleChange}
      value={searchText}
    />
  );
};

export default Search;
