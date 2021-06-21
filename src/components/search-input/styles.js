import styled from "styled-components";

import { breakpoints } from "@styles";
import IconSource from "@components/icon";
import MagnifyingGlassIcon from "@assets/icons/magnifying-glass-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 35em;
  justify-self: center;
  justify-content: center;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    width: 80%;
  }
`;

export const Title = styled.h3`
  font-weight: ${({ theme: { font } }) => font.weight.black};
  font-size: ${({ theme: { font } }) => font.size.title};
  text-align: center;
  letter-spacing: ${({ theme: { spacing } }) => spacing.text.letter};
  color: ${({ theme: { colors } }) => colors.text.white};
  margin-bottom: 1.2em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    font-size: ${({ theme: { font } }) => font.size.mobile.title};
  }
`;

export const InputWrap = styled.div`
  display: grid;
  grid-template-columns: auto 5em;
  height: 3.5em;
  width: 100%;
  border: 1px solid
    ${({ theme: { colors } }) => colors.background.transparentGray};
  border-radius: 2em;
  padding: 0.2em;

  @media only screen and (max-width: ${breakpoints.mobile}) {
    grid-template-columns: auto 3.6em;
    height: 2.5em;
  } ;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding-left: 1em;
  padding-right: 0.5em;
  color: ${({ theme: { colors } }) => colors.text.white};
  font-weight: ${({ theme: { font } }) => font.weight.regular};
  font-size: ${({ theme: { font } }) => font.size.text};

  ::placeholder {
    color: ${({ theme: { colors } }) => colors.background.transparentGray};
  }

  @media only screen and (max-width: ${breakpoints.mobile}) {
    &,
    ::placeholer {
      width: 100%;
      font-size: ${({ theme: { font } }) => font.size.mobile.text};
    }
  }
`;

export const SearchIcon = styled.span`
  display: flex;
  background-color: ${({ theme: { colors } }) =>
    colors.background.transparentGray};
  border-radius: 2em;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(IconSource).attrs({ src: MagnifyingGlassIcon })``;
