/* eslint-disable */
import React from "react";

const CharacterItem = (props) => {
  const { character } = props;

  return (
    <li className="character-item">
      <img
        src={`${character.thumbnail.path}/standard_xlarge.${character.thumbnail.extension}`}
        className="character-img"
      />
      <div className="text-container">
        <h2>{character.name}</h2>
        <p>{character.description}</p>
        <ul className="resource-list">
          <li>
            <strong># comics:</strong> {character.comics.available}
          </li>
          <li>
            <strong># series:</strong> {character.series.available}
          </li>
          <li>
            <strong># stories:</strong> {character.stories.available}
          </li>
        </ul>
      </div>
    </li>
  );
};

export default CharacterItem;
