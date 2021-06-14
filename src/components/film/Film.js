import React from "react";
import PropTypes from "prop-types";
import { useHistory } from "react-router-dom";

import { getFilmIdFromUrl } from "@helpers";
import { routes } from "@enums";

import { Container, FilmImage, Title } from "./styles";

const Film = ({ title, url, ...rest }) => {
  const history = useHistory();
  const id = getFilmIdFromUrl(url);

  const redirectToFilm = () => {
    history.push({
      pathname: routes.film,
      search: `?` + new URLSearchParams({ id }),
    });
  };

  return (
    <Container onClick={redirectToFilm}>
      <FilmImage film={title} />
      <Title>{title}</Title>
    </Container>
  );
};

Film.defaultProps = {
  title: "Film title",
  url: "film/url/with/id/1",
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
};

export default Film;
