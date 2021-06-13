import React from "react";
import PropTypes from "prop-types";

import Loader from "@components/loader";

import {
  Container,
  Error,
  Icon,
  Input,
  InputWrap,
  SearchIcon,
  Title,
} from "./styles";

const SearchInput = ({ setSearch, search, loading, error }) => (
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
    {!loading && error && error !== "" && <Error>{error}</Error>}
  </Container>
);

SearchInput.defaultProps = {
  setSearch: () => {},
  search: "",
  loading: false,
  error: {},
};

SearchInput.propTypes = {
  setSearch: PropTypes.func.isRequired,
  search: PropTypes.string,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default SearchInput;
