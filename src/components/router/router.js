import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "@enums";
import Search from "@containers/search";
import FilmDetails from "@components/film-details";
import InvalidPage from "@components/invalid-page";

const Router = () => (
  <Switch>
    <Route exact path={routes.home} component={Search} />
    <Route path={routes.film} component={FilmDetails} />
    <Route component={InvalidPage} />
  </Switch>
);

export default Router;
