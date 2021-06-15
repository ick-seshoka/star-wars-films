import styled, { keyframes } from "styled-components";

import Icon from "@components/icon";
import LightsaberIcon from "@assets/icons/lightsaber-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  text-align: center;
  margin-top: 0.5em;
  color: ${({ theme: { colors } }) => colors.text.white};
`;

export const LightSaber = styled(Icon).attrs({ src: LightsaberIcon })``;

export const Title = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
`;

const FlashingDots = keyframes`
  0% { content: ''; }
  25%  { content: '.'; }
  50%  { content: '..'; }
  75%  { content: '...'; }
  100% { content: ''; }
`;

export const Dots = styled.div`
  display: flex;
  flex-direction: row;

  &:after {
    display: flex;
    animation: ${FlashingDots} 1.3s infinite;
    content: "";
    width: 1em;
  }
`;
