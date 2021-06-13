import React from "react";

import Header from "@components/header";
import SearchInput from "@components/search-input";

import { Background, Container } from "./styles";

const Search = () => (
  <Background>
    <Container>
      <Header />
      <SearchInput />
    </Container>
  </Background>
);

export default Search;
