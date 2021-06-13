import styled from "styled-components";

export const Container = styled.div`
  text-align: center;
  margin-top: 0.5em;
  color: ${({ theme: { colors } }) => colors.text.white};
`;
