import React from "react";
import { useHistory } from "react-router-dom";

import { routes } from "@enums";
import SearchHistory from "@containers/search-history";

import { Container, Logo, LogoIcon } from "./styles";

const Header = () => {
  const history = useHistory();

  const showSearchHistory = history.location.pathname !== routes.film;

  return (
    <Container>
      <Logo to={routes.home}>
        <LogoIcon />
      </Logo>
      {showSearchHistory && <SearchHistory />}
    </Container>
  );
};

export default Header;
