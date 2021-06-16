import React, { useContext, memo } from "react";

import { SearchHistoryContext } from "@contexts/search-history";
import SearchHistoryFilm from "./SearchHistoryFilm";

import { Container, HistoryLabel, Wrap } from "./styles";

const SearchHistory = memo(() => {
  const { films } = useContext(SearchHistoryContext);

  if (films.length === 0) return null;

  const filmItems = films.map((item, index) => (
    <SearchHistoryFilm key={index} {...item} />
  ));

  return (
    <Wrap>
      <HistoryLabel>You previously searched for</HistoryLabel>
      <Container>{filmItems}</Container>;
    </Wrap>
  );
});

export default SearchHistory;
