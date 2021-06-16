import styled from "styled-components";

import ANewHopeCover from "@assets/images/a-new-hope-cover.jpeg";
import TheEmpireStrikesBackCover from "@assets/images/the-empire-strikes-back-cover.jpeg";
import ReturnOfTheJediCover from "@assets/images/return-of-the-jedi-cover.png";
import ThePhantomMenaceCover from "@assets/images/the-phantom-menace-cover.jpg";
import AttackOfTheClonesCover from "@assets/images/attack-of-the-clones-cover.jpg";
import RevengeOfTheSithCover from "@assets/images/revenge-of-the-sith-cover.jpeg";
import StarWarsCover from "@assets/images/star-wars-cover.jpg";
import { useLazyBackground } from "@/hooks";

const getBackgroundImage = (imageId = 0) => {
  switch (imageId) {
    case "0":
      return StarWarsCover;
    case "1":
      return ANewHopeCover;
    case "2":
      return TheEmpireStrikesBackCover;
    case "3":
      return ReturnOfTheJediCover;
    case "4":
      return ThePhantomMenaceCover;
    case "5":
      return AttackOfTheClonesCover;
    case "6":
      return RevengeOfTheSithCover;
    default:
      return;
  }
};

export const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  z-index: 1;

  &::before {
    position: absolute;
    top: 0;
    left: 0;
    content: "";
    width: 100vw;
    height: 100vh;
    background-color: ${({ theme: { colors } }) => colors.background.gray};
    background: ${({ theme: { colors } }) => colors.background.filter},
      ${({ imageId }) =>
        `url(${useLazyBackground(getBackgroundImage(imageId) || "")})`};
    background-size: cover;
    background-repeat: no-repeat;
    z-index: -1;
  }
`;
