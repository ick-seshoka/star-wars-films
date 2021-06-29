import React from "react";
import PropTypes from "prop-types";

import { Container, Icon, Input, InputWrap, SearchIcon, Title } from "./styles";

const SearchInput = ({ setSearch, search }) => (
  <Container>
    <Title>Search for your favorite star wars movie</Title>
    <InputWrap>
      <Input
        type="text"
        value={search}
        onChange={setSearch}
        placeholder="Search here..."
      />
      <SearchIcon>
        <Icon />
      </SearchIcon>
    </InputWrap>
  </Container>
);

SearchInput.defaultProps = {
  setSearch: () => {},
  search: "",
};

SearchInput.propTypes = {
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
};

export default SearchInput;
