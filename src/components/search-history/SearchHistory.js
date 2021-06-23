import React, { memo } from "react";

import { useSearchHistoryContext } from "@contexts/search-history";
import SearchHistoryFilm from "./SearchHistoryFilm";

import { Container, HistoryLabel, Wrap } from "./styles";

const SearchHistory = memo(() => {
  const { films } = useSearchHistoryContext();

  if (films.length === 0) return null;

  const filmItems = films.map((item, index) => (
    <SearchHistoryFilm key={index} {...item} />
  ));

  return (
    <Wrap>
      <HistoryLabel>You previously searched for</HistoryLabel>
      <Container>{filmItems}</Container>
    </Wrap>
  );
});

export default SearchHistory;
