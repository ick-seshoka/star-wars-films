import React from "react";
import PropTypes from "prop-types";

import Film from "@components/film";

import { FilmsContainer } from "./styles";

const Films = ({ films }) => {
  const filmItems =
    films && films.map((film, index) => <Film key={index} {...film} />);

  return <FilmsContainer>{filmItems}</FilmsContainer>;
};

Films.defaultProps = {
  films: [],
};

Films.propTypes = {
  films: PropTypes.array.isRequired,
};

export default Films;
