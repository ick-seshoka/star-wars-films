import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  background-color: ${({ theme: { colors } }) => colors.background.gray};
  background: ${({ theme: { colors } }) => colors.background.filter};
  min-height: 100vh;
`;
