import React, { lazy, Suspense } from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "@enums";
import ErrorBoundary from "@components/error-boundary";
import Loader from "@components/loader";

import { Container } from "./styles";

const Search = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1 * 1000);
  });
  return await import("@containers/search");
});

const InvalidPage = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1 * 1000);
  });
  return await import("@components/invalid-page");
});

const FilmDetails = lazy(async () => {
  await new Promise((resolve) => {
    setTimeout(resolve, 1 * 1000);
  });
  return await import("@containers/film-details");
});

const Loading = () => (
  <Container>
    <Loader />
  </Container>
);

const Router = () => (
  <ErrorBoundary>
    <Suspense fallback={<Loading />}>
      <Switch>
        <Route exact path={routes.home} component={Search} />
        <Route path={routes.film} component={FilmDetails} />
        <Route component={InvalidPage} />
      </Switch>
    </Suspense>
  </ErrorBoundary>
);

export default Router;
