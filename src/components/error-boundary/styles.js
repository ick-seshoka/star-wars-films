import styled from "styled-components";

import { breakpoints } from "@styles";

import { Link } from "react-router-dom";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100vw;
  height: 100vh;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme: { colors } }) => colors.background.black};
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text.red};
  max-width: 20em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.label};
  }
`;

export const SearchLink = styled(Link)`
  color: ${({ theme: { colors } }) => colors.text.blue};
`;
