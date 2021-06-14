import React from "react";
import PropTypes from "prop-types";

import { Container, FilmImage, Title } from "./styles";

const Film = ({ title }) => (
  <Container>
    <FilmImage film={title} />
    <Title>{title}</Title>
  </Container>
);

Film.defaultProps = {
  title: "Film title",
};

Film.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Film;
