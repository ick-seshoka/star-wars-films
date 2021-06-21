import styled from "styled-components";
import { Link } from "react-router-dom";
import Skeleton, {
  SkeletonTheme as SkeletonThemeSource,
} from "react-loading-skeleton";

import { breakpoints } from "@styles";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 9.375em auto;
  width: 90em;
  margin: 0 auto;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 90vw;
    align-self: center;
  }
`;

export const DetailsWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-left: 5em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-left: 0.3em;
    width: 90vw;
    margin-bottom: 3em;
  }
`;

export const Title = styled.h4`
  font-weight: ${({ theme: { font } }) => font.weight.black};
  font-size: ${({ theme: { font } }) => font.size.largeTitle};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.white};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.title};
    margin-bottom: 0.3em;
  }
`;

export const SkeletonTheme = styled(SkeletonThemeSource).attrs(
  ({ theme: { colors } }) => ({
    color: colors.skeleton.color,
    highlightColor: colors.skeleton.highlight,
  })
)``;

export const TitleSkeleton = styled(Skeleton).attrs(({ isMobile }) =>
  isMobile
    ? { height: "8.65em" }
    : {
        width: "45em",
        height: "2.65em",
      }
)`
  margin-bottom: 2em;
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

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.label};
    width: 9.5em;
  }
`;

export const EM = styled.em``;

export const ReleaseDate = styled.div`
  font-size: ${({ theme: { font } }) => font.size.label};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.green};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.label};
  }
`;

export const InfoSkeleton = styled(Skeleton).attrs(({ isMobile }) =>
  isMobile
    ? { height: "0.95em" }
    : {
        width: "28em",
        height: "1.25em",
      }
)`
  margin-bottom: 1em;
`;

export const OpeningCrawl = styled.p`
  display: flex;
  flex-direction: column;
  max-width: 60em;
  font-weight: ${({ theme: { font } }) => font.weight.regular};
  font-size: ${({ theme: { font } }) => font.size.text};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.white};
  white-space: pre-line;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.text};
  }
`;

export const SkeletonWrap = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 5em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    margin-bottom: 2.5em;
  }
`;

export const TextSkeleton = styled(Skeleton).attrs(({ isMobile }) =>
  isMobile
    ? { width: "15em", height: "0.65em" }
    : {
        width: "25em",
        height: "0.85em",
      }
)`
  margin-top: 0.25em;
  margin-bottom: 0.25em;
`;

export const Author = styled.div`
  border: 1px solid ${({ theme: { colors } }) => colors.background.gray};
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  font-size: ${({ theme: { font } }) => font.size.smallLabel};
  letter-spacing: 0.05em;
  color: ${({ theme: { colors } }) => colors.text.gray};
  padding: 0.05em 0.5em;
  margin-right: 0.5em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.label};
  }
`;

export const ErrorMessage = styled.div`
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text.red};
  max-width: 20em;
`;

export const SearchLink = styled(Link)`
  color: ${({ theme: { colors } }) => colors.text.blue};
`;

export const Label = styled.span`
  @media only screen and (max-width: ${breakpoints.mobile}) {
    display: block;
    font-size: ${({ theme: { font } }) => font.size.mobile.label};
  }
`;
