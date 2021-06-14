import styled from "styled-components";

import Icon from "@components/icon";
import FilmCardBackground from "@assets/icons/film-card-background.svg";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 12.5em auto;
  justify-self: center;
  transition: all 0.25s cubic-bezier(0.075, 0.82, 0.165, 1);
  transform: scale(1);

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
