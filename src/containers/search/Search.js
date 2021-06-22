import React, { useEffect, useReducer, useRef } from "react";

import {
  searchFilms,
  initialState,
  reducer,
  getSearch,
  getError,
  getLoading,
  getFilms,
  getTyping,
  setSearch,
  setTyping,
  setError,
  setFilms,
  setLoading,
} from "@modules/search";
import { axios, trimString } from "@helpers";
import { useDebounceValue } from "@hooks";

import BackgroundWrap from "@components/background-wrap";
import Header from "@components/header";
import SearchInput from "@components/search-input";
import Loader from "@components/loader";
import Films from "./films";
import SearchHistory from "@components/search-history";

import { Container, Status, Error, EmptyFilms, FilmsCount } from "./styles";

const Search = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const search = getSearch(state);
  const error = getError(state);
  const loading = getLoading(state);
  const films = getFilms(state);
  const typing = getTyping(state);
  const mounted = useRef();

  const [debouncedSearch] = useDebounceValue(search, 500);

  useEffect(() => {
    const request = axios.CancelToken.source();

    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (debouncedSearch !== "" && error === "") {
        setLoading(dispatch, true);
        setTyping(dispatch, false);
        searchFilms(debouncedSearch, request.token).then(
          ({ error, results }) => {
            if (error) {
              if (!axios.isCancel(error)) {
                setError("Something went wrong");
                setLoading(dispatch, false);
              }
            } else {
              setFilms(dispatch, results);
              setLoading(dispatch, false);
            }
          }
        );
      } else {
        setFilms(dispatch, []);
      }
    }

    return () => {
      request.cancel("cancel pending request");
    };
  }, [debouncedSearch]);

  const inputChange = (e) => {
    const { value } = e.target;
    if (value.length >= 50) {
      setError(
        dispatch,
        "Search value too long, should be less than 50 characters"
      );
    } else {
      setError(dispatch, "");
    }
    setSearch(dispatch, value);
    setTyping(dispatch, true);
  };

  const isError = !loading && error && error !== "";
  const filmsCount = films?.length;
  const noFilms =
    filmsCount === 0 &&
    !loading &&
    !error &&
    trimString(search) !== "" &&
    !typing;
  const showFilms = filmsCount > 0 && !loading && !typing;

  return (
    <BackgroundWrap>
      <Container>
        <Header />
        <SearchInput
          setSearch={inputChange}
          search={search}
          loading={loading}
          error={error}
        />
        <Status>
          {loading && <Loader title="Searching" />}
          {isError && <Error>{error}</Error>}
          {noFilms && (
            <EmptyFilms>{`no film(s) with name ${search}`}</EmptyFilms>
          )}
          {showFilms && (
            <FilmsCount>
              {`${filmsCount} movie${filmsCount > 1 ? "s" : ""} found`}
            </FilmsCount>
          )}
        </Status>
        {showFilms && <Films films={films} />}
        <SearchHistory />
      </Container>
    </BackgroundWrap>
  );
};
export default Search;
