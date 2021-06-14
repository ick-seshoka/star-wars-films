import React from "react";

import Film from "@components/film";

import { FilmsContainer } from "./styles";

const Films = ({ films }) => {
  const filmItems =
    films && films.map((film, index) => <Film key={index} {...film} />);

  return <FilmsContainer>{filmItems}</FilmsContainer>;
};

export default Films;
