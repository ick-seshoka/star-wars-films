import styled from "styled-components";

import Icon from "@components/icon";
import FilmCardBackgroundSmall from "@assets/icons/film-card-background-small.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-items: end;
`;

export const FilmWrap = styled.div`
  display: flex;
  flex-direction: column;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1);
  width: 6.5em;
  margin-right: 0.8em;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export const FilmImage = styled(Icon).attrs({ src: FilmCardBackgroundSmall })``;

export const Title = styled.h4`
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  font-size: ${({ theme: { font } }) => font.size.tinyTitle};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text.gray};
`;
