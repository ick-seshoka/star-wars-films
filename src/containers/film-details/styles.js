import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 9.375em auto;
  width: 90em;
  margin: 0 auto;
`;

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5em;
`;

export const Title = styled.h4`
  font-weight: ${({ theme: { font } }) => font.weight.black};
  font-size: ${({ theme: { font } }) => font.size.largeTitle};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.white};
`;

export const Wrap = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin-top: 1em;
  margin-bottom: 1em;
`;

export const Episode = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.background.white};
  font-weight: ${({ theme: { font } }) => font.weight.regular};
  font-size: ${({ theme: { font } }) => font.size.label};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.gray};
  padding: 0.1em 1em;
  margin-right: 0.8em;
`;

export const EM = styled.em``;

export const ReaseDate = styled.div`
  font-size: ${({ theme: { font } }) => font.size.label};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.green};
`;

export const OpeningCrawl = styled.p`
  font-weight: ${({ theme: { font } }) => font.weight.regular};
  font-size: ${({ theme: { font } }) => font.size.text};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.white};
  white-space: pre-line;
`;

export const Author = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.background.gray};
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  font-size: ${({ theme: { font } }) => font.size.smallLabel};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.gray};
  padding: 0.05em 0.5em;
  margin-right: 0.5em;
`;

export const DateInfo = styled.div`
  font-size: ${({ theme: { font } }) => font.size.smallLabel};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.green};
`;
