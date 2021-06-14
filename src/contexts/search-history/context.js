import React, { createContext, useReducer } from "react";

import reducer, {
  initialState,
  getSearchHistory,
  addFilm,
} from "@modules/search-history";

export const SearchHistoryContext = createContext();

const SearchHistoryContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const films = getSearchHistory(state);

  const addFilmToSearchHistory = (film) => {
    dispatch(addFilm(film));
  };

  return (
    <SearchHistoryContext.Provider value={{ films, addFilmToSearchHistory }}>
      {children}
    </SearchHistoryContext.Provider>
  );
};

export default SearchHistoryContextProvider;
