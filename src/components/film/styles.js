import styled from "styled-components";

import Icon from "@components/icon";
import FilmCardBackground from "@assets/icons/film-card-background.svg";

export const Container = styled.div`
  display: grid;
  grid-template-rows: 12.5em auto;
  justify-self: center;
`;

export const FilmImage = styled(Icon).attrs({ src: FilmCardBackground })``;

export const Title = styled.h4`
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.smallTitle};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text.gray};
`;
