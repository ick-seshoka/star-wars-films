import React, { useState } from "react";

import Header from "@components/header";
import SearchInput from "@components/search-input";

import { Background, Container } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");

  const inputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  return (
    <Background>
      <Container>
        <Header />
        <SearchInput setSearch={inputChange} search={search} />
      </Container>
    </Background>
  );
};
export default Search;
