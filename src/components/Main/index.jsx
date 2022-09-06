/* eslint-disable */
import React, { useEffect, useState } from "react";
import { apiBaseUrl, itemsPerPage } from "../../utils";
import CharacterList from "../CharacterList";
import Pagination from "../Pagination";

const Main = (props) => {
  const { searchText } = props;
  const [characterList, setCharacterList] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  const apiKey = process.env.REACT_APP_MARVEL_API_KEY;
  const totalPages = Math.floor(characterList.length / itemsPerPage);

  useEffect(() => {
    fetch(
      `${apiBaseUrl}/characters?${
        searchText ? `nameStartsWith=${searchText}&` : ""
      }orderBy=-modified&apikey=${apiKey}`
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.code === 200) {
          console.log(data.data.results);
          setCharacterList(data.data.results);
          setPageNumber(1);
        }
      });
  }, [searchText]);

  return (
    <main>
      <CharacterList characterList={characterList} pageNumber={pageNumber} />
      <Pagination
        pageNumber={pageNumber}
        setPageNumber={setPageNumber}
        totalPages={totalPages}
      />
    </main>
  );
};

export default Main;
