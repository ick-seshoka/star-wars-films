import styled, { css } from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.background.gray};
  background: ${({ theme: { colors } }) => colors.background.filter};
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 9.375em 15em 5em 40em;
  width: 90em;
  margin: 0 auto;
`;

const statusTextStyles = css`
  text-align: center;
  margin-top: 0.5em;
  color: ${({ theme: { colors } }) => colors.text.gray};
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
  grid-template-columns: repeat(3, 20em);
  grid-template-rows: repeat(2, 16.5em);
  justify-self: center;
`;
