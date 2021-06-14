import React from "react";

import { routes } from "@enums";

import { Container, Logo, LogoIcon } from "./styles";

const Header = () => (
  <Container>
    <Logo to={routes.home}>
      <LogoIcon />
    </Logo>
  </Container>
);

export default Header;