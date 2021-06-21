import styled from "styled-components";
import { Link } from "react-router-dom";

import { breakpoints } from "@styles";
import Icon from "@components/icon";
import LogoIconSvg from "@assets/icons/logo-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
  height: 100%;

  @media only screen and (max-width: ${breakpoints.largeDesktop}) {
    justify-content: center;
  }
`;

export const Logo = styled(Link)`
  width: fit-content;
  height: fit-content;
`;

export const LogoIcon = styled(Icon).attrs({
  src: LogoIconSvg,
})`
  @media only screen and (max-width: ${breakpoints.mobile}) {
    svg {
      width: 8.5em;
    }
  }

  margin-left: -0.5em;
`;
