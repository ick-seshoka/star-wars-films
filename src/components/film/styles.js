import styled from "styled-components";

import Icon from "@components/icon";
import FilmCardBackground from "@assets/icons/film-card-background.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-self: center;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1);
  width: 14.5em;
  height: 16.5em;
  margin: 0em 1.5em;

  &:hover {
    cursor: pointer;
    transform: scale(1.15);
  }
`;

export const FilmImage = styled(Icon).attrs({ src: FilmCardBackground })``;

export const Title = styled.h4`
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.smallTitle};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text.gray};
`;
