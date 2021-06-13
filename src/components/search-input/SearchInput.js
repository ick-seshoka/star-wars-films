import React from "react";

import { Container, Icon, Input, InputWrap, SearchIcon, Title } from "./styles";

const SearchInput = () => (
  <Container>
    <Title>Serach for your favourite star wars movie</Title>
    <InputWrap>
      <Input type="text" placeholder="Search here..." />
      <SearchIcon>
        <Icon />
      </SearchIcon>
    </InputWrap>
  </Container>
);

export default SearchInput;
