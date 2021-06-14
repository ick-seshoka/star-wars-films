import React, { useContext } from "react";

import { SearchHistoryContext } from "@contexts/search-history";
import SearchHistoryFilm from "./SearchHistoryFilm";

import { Container } from "./styles";

const SearchHistory = () => {
  const { films } = useContext(SearchHistoryContext);

  const filmItems = films.map((item, index) => (
    <SearchHistoryFilm key={index} {...item} />
  ));

  return <Container>{filmItems}</Container>;
};

export default SearchHistory;
