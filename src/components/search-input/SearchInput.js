import React from "react";
import PropTypes from "prop-types";

import Loader from "@components/loader";

import { Container, Icon, Input, InputWrap, SearchIcon, Title } from "./styles";

const SearchInput = ({ setSearch, search, loading }) => (
  <Container>
    <Title>Serach for your favourite star wars movie</Title>
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
    {loading && <Loader />}
  </Container>
);

SearchInput.defaultProps = {
  setSearch: () => {},
  search: "",
  loading: false,
};

SearchInput.propTypes = {
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
  loading: PropTypes.bool.isRequired,
};

export default SearchInput;
