import React from "react";
import { useHistory } from "react-router-dom";
import PropTypes from "prop-types";

import { routes } from "@enums";

import { FilmWrap, FilmImage, Title } from "./styles";

const SearchHistoryFilm = ({ id, title }) => {
  const history = useHistory();

  const redirectToFilm = () => {
    history.push({
      pathname: routes.film,
      search: `?` + new URLSearchParams({ id }),
    });
  };

  return (
    <FilmWrap onClick={redirectToFilm}>
      <FilmImage />
      <Title>{title}</Title>
    </FilmWrap>
  );
};

SearchHistoryFilm.defaultProps = {
  id: 0,
  title: "film title",
};

SearchHistoryFilm.propTypes = {
  id: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

export default SearchHistoryFilm;
