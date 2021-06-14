import React from "react";
import { ThemeProvider } from "styled-components";

import SearchHistoryContextProvider from "@contexts/search-history";
import { theme } from "@styles";
import Router from "@components/router";

const App = () => {
  return (
    <ThemeProvider theme={theme}>
      <SearchHistoryContextProvider>
        <Router />
      </SearchHistoryContextProvider>
    </ThemeProvider>
  );
};

export default App;
