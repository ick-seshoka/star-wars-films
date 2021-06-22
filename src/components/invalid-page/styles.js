import styled from "styled-components";
import { Link } from "react-router-dom";

import { breakpoints } from "@styles";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.975em 1fr;
  max-width: 75em;
  height: 100vh;
  margin: 0 auto;
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 10em;
  align-items: center;
  max-width: 80%;
  justify-self: center;

  @media only screen and (max-width: ${breakpoints.tablet}) {
    margin-top: 5em;
  } ;
`;

export const Title = styled.h3`
  max-width: 80%;
  font-weight: ${({ theme: { font } }) => font.weight.black};
  font-size: ${({ theme: { font } }) => font.size.title};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.background.gray};
  margin-bottom: 1.2em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.title};
  }
`;

export const SearchLink = styled(Link)`
  font-size: ${({ theme: { font } }) => font.size.label};
  color: ${({ theme: { colors } }) => colors.text.blue};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.label};
  }
`;
