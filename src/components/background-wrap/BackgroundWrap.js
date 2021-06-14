import React from "react";
import PropTypes from "prop-types";

import { Container } from "./styles";

const BackgroundWrap = ({ imageId, children }) => (
  <Container imageId={imageId}>{children}</Container>
);

BackgroundWrap.defaultProps = {
  imageId: "0",
};

BackgroundWrap.propTypes = {
  imageId: PropTypes.string.isRequired,
};

export default BackgroundWrap;
