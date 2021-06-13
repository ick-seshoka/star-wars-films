import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const Icon = ({ src, ...rest }) => <Container src={src} {...rest} />;

Icon.defaultProps = {
  src: "",
};

Icon.propTypes = {
  src: PropTypes.string.isRequired,
};

export default Icon;
