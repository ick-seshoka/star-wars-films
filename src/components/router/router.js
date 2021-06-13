import React from "react";
import { Switch, Route } from "react-router-dom";

import { routes } from "@enums";
import Search from "@containers/search";
import Film from "@components/film";
import InvalidPage from "@components/invalid-page";

const Router = () => (
  <Switch>
    <Route exact path={routes.home} component={Search} />
    <Route path={routes.film} component={Film} />
    <Route component={InvalidPage} />
  </Switch>
);

export default Router;
