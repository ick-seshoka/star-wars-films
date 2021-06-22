import React, { memo } from "react";

import Header from "@components/header";
import { routes } from "@enums";

import { Container, Wrap, Title, SearchLink } from "./styles";

const InvalidPage = memo(() => (
  <Container>
    <Header />
    <Wrap>
      <Title>The page you are looking for can not be found :(</Title>
      <SearchLink to={routes.home}>Search for a film here</SearchLink>
    </Wrap>
  </Container>
));

export default InvalidPage;
