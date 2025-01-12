/* eslint-disable */
import React from "react";

const Pagination = (props) => {
  const { pageNumber, setPageNumber, totalPages } = props;

  const getLastPage = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };

  const getNextPage = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };

  return (
    <section
      className="pagination"
      style={{ display: totalPages > 1 ? "flex" : "none" }}
    >
      <button
        className={`pagination-btn ${pageNumber > 1 ? null : "disabled"}`}
        onClick={getLastPage}
      >
        Last Page
      </button>
      <p>{pageNumber}</p>
      <button
        className={`pagination-btn ${
          pageNumber < totalPages ? null : "disabled"
        }`}
        onClick={getNextPage}
      >
        Next Page
      </button>
    </section>
  );
};

export default Pagination;
