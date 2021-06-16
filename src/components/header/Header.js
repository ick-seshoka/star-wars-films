import React, { memo } from "react";

import { routes } from "@enums";

import { Container, Logo, LogoIcon } from "./styles";

const Header = memo(() => {
  return (
    <Container>
      <Logo to={routes.home}>
        <LogoIcon />
      </Logo>
    </Container>
  );
});

export default Header;
