import styled from "styled-components";
import { Link } from "react-router-dom";

import Icon from "@components/icon";
import LogoIconSvg from "@assets/icons/logo-icon.svg";

export const Container = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const Logo = styled(Link)`
  width: fit-content;
  height: fit-content;
`;

export const LogoIcon = styled(Icon).attrs({ src: LogoIconSvg })``;
