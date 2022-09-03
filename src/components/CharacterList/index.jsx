/* eslint-disable */
import React from "react";
import { itemsPerPage } from "../../utils";
import CharacterItem from "./CharacterItem/CharacterItem";

const CharacterList = (props) => {
  const { characterList, pageNumber } = props;

  const offset = itemsPerPage * (pageNumber - 1);
  const listToRender = characterList.slice(offset, offset + itemsPerPage);

  return (
    <ul className="character-list">
      {listToRender.map((character, index) => {
        return <CharacterItem character={character} key={index} />;
      })}
    </ul>
  );
};

export default CharacterList;
