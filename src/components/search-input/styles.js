import styled from "styled-components";

import IconSource from "@components/icon";
import MagnifyingGlassIcon from "@assets/icons/magnifying-glass-icon.svg";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 25em;
  justify-self: center;
  justify-content: center;
`;

export const Title = styled.h3`
  font-weight: ${({ theme: { font } }) => font.weight.black};
  font-size: ${({ theme: { font } }) => font.size.title};
  text-align: center;
  letter-spacing: ${({ theme: { spacing } }) => spacing.text.letter};
  color: ${({ theme: { colors } }) => colors.text.white};
  margin-bottom: 1.2em;
`;

export const InputWrap = styled.div`
  display: grid;
  grid-template-columns: auto 5em;
  height: 4em;
  border: 1px solid ${({ theme: { colors } }) => colors.background.gray};
  border-radius: 2em;
  padding: 0.2em;
`;

export const Input = styled.input`
  background: transparent;
  border: none;
  outline: none;
  padding-left: 1.4em;
  padding-right: 0.5em;
  color: ${({ theme: { colors } }) => colors.text.white};
  font-weight: ${({ theme: { font } }) => font.weight.medium};
  font-size: ${({ theme: { font } }) => font.size.text};
`;

export const SearchIcon = styled.span`
  display: flex;
  background-color: ${({ theme: { colors } }) => colors.background.gray};
  border-radius: 2em;
  align-items: center;
  justify-content: center;
`;

export const Icon = styled(IconSource).attrs({ src: MagnifyingGlassIcon })``;
