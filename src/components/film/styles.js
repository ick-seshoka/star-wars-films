import styled from "styled-components";

import { useLazyBackground } from "@hooks";
import { breakpoints } from "@styles";
import ANewHopeCard from "@assets/images/a-new-hope-card.jpeg";
import TheEmpireStrikesBackCard from "@assets/images/the-empire-strikes-back-card.jpeg";
import ReturnOfTheJediCard from "@assets/images/return-of-the-jedi-card.jpeg";
import ThePhantomMenaceCard from "@assets/images/the-phantom-menace-card.jpg";
import AttackOfTheClonesCover from "@assets/images/attack-of-the-clones-card.jpg";
import RevengeOfTheSithCover from "@assets/images/revenge-of-the-sith-card.jpeg";
import FilmCardBackground from "@assets/images/film-card-background.png";

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

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 7em;
    height: 10em;
    margin: 0em 0.9em;
  }

  @media only screen and (max-width: ${breakpoints.desktop}) {
    width: 12.5em;
    height: 15em;
  }
`;

const getFilmImage = (imageId) => {
  switch (imageId) {
    case "1":
      return ANewHopeCard;
    case "2":
      return TheEmpireStrikesBackCard;
    case "3":
      return ReturnOfTheJediCard;
    case "4":
      return ThePhantomMenaceCard;
    case "5":
      return AttackOfTheClonesCover;
    case "6":
      return RevengeOfTheSithCover;
    default:
      return FilmCardBackground;
  }
};

export const FilmImage = styled.div`
  width: 14.25em;
  height: 11em;
  background: ${({ theme: { colors } }) => colors.background.black};
  background: ${({ imageId }) =>
    `url(${useLazyBackground(getFilmImage(imageId)) || FilmCardBackground})`};
  background-size: cover;
  background-repeat: no-repeat;
  background-position: 0 0;
  border-radius: 1em;
  margin-bottom: 0.5em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 100%;
    height: 6.5em;
  } ;
`;

export const Title = styled.h4`
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.smallTitle};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text.gray};

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.smallTitle};
  }
`;
