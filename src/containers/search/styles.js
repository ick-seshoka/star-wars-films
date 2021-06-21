import styled, { css } from "styled-components";
import { breakpoints } from "@styles";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 10.975em 15em 5em auto auto;
  max-width: 75em;
  margin: 0 auto;
  padding-bottom: 8em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 90vw;
    justify-content: center;
  }

  @media only screen and (min-width: ${breakpoints.largeDesktop}) {
    width: 75em;
  }
`;

const statusTextStyles = css`
  text-align: center;
  margin-top: 0.5em;
  color: ${({ theme: { colors } }) => colors.text.gray};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.label};
  }
`;

export const Status = styled.div`
  display: flex;
  flex-direction: row;
  justify-self: center;
`;

export const Error = styled.div`
  ${statusTextStyles}
  color: ${({ theme: { colors } }) => colors.text.red};
`;

export const EmptyFilms = styled.div`
  ${statusTextStyles}
`;

export const FilmsCount = styled.div`
  ${statusTextStyles}
`;

export const FilmsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, auto);
  grid-template-rows: repeat(2, auto);
  justify-self: center;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    grid-template-columns: repeat(2, auto);
    grid-template-rows: repeat(3, auto);
    grid-row-gap: 0.5em;
  }
`;
