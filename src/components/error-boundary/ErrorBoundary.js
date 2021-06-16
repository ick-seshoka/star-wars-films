import React, { Component, memo } from "react";

import { routes } from "@enums";
import { logger } from "@helpers";

import { Container, ErrorMessage, SearchLink } from "./styles";

const Fallback = memo(() => (
  <Container>
    <ErrorMessage>
      Something went wrong trying to load the page :( click{" "}
      <SearchLink to={routes.home}>here</SearchLink> to search for a film or
      reload the page if that does not work
    </ErrorMessage>
  </Container>
));

class ErrorBoundary extends Component {
  state = { hasError: false, error: null };

  static getDerivedStateFromError(error) {
    return { hasError: true, error };
  }

  componentDidCatch(error, errorInfo) {
    logger(error, errorInfo);
  }

  render() {
    return this.state.hasError ? <Fallback /> : this.props.children;
  }
}

export default ErrorBoundary;
