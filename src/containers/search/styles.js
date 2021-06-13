import styled from "styled-components";

export const Background = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: ${({ theme: { colors } }) => colors.background.gray};
  background: ${({ theme: { colors } }) => colors.background.filter};
`;

export const Container = styled.div`
  display: grid;
  grid-template-rows: 9.375em 20em auto;
  width: 90em;
  margin: 0 auto;
`;
