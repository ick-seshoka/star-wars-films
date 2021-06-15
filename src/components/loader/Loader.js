import React from "react";
import PropTypes from "prop-types";

import { Container, Title, Dots, LightSaber } from "./styles";

const Loader = ({ title }) => (
  <Container>
    <Title>
      {title}
      <Dots />
    </Title>
    <LightSaber />
  </Container>
);

Loader.defaultProps = {
  title: "Loading",
};

Loader.propTypes = {
  title: PropTypes.string.isRequired,
};

export default Loader;
