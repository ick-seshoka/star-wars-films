import styled from "styled-components";

import ANewHopeCard from "@assets/images/a-new-hope-card.jpeg";
import TheEmpireStrikesBackCard from "@assets/images/the-empire-strikes-back-card.jpeg";
import ReturnOfTheJediCard from "@assets/images/return-of-the-jedi-card.jpeg";
import ThePhantomMenaceCard from "@assets/images/the-phantom-menace-card.jpg";
import AttackOfTheClonesCover from "@assets/images/attack-of-the-clones-card.jpg";
import RevengeOfTheSithCover from "@assets/images/revenge-of-the-sith-card.jpeg";

export const Wrap = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  min-width: 15em;
  margin: 0 auto;
  margin-top: 3.5em;
`;

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  margin-top: 0.7em;
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
      return;
  }
};

export const FilmImage = styled.div`
  width: 6.25em;
  height: 5em;
  background: ${({ imageId }) => `url(${getFilmImage(imageId)})`};
  background-size: cover;
  background-position: 0 0;
  background-repeat: no-repeat;
  border-radius: 1em;
  margin-bottom: 0.5em;
`;

export const Title = styled.h4`
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  font-size: ${({ theme: { font } }) => font.size.tinyTitle};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text.gray};
`;

export const HistoryLabel = styled.div`
  font-weight: ${({ theme: { font } }) => font.weight.bold};
  font-size: ${({ theme: { font } }) => font.size.tinyTitle};
  text-align: center;
  color: ${({ theme: { colors } }) => colors.text.gray};
  border-bottom: 1px solid ${({ theme: { colors } }) => colors.background.gray};
  font-weight: 700;
  padding-bottom: 0.5em;
`;
