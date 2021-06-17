import React, { useEffect, useRef, useState } from "react";

import { axios, trimString } from "@helpers";
import { useDebounceValue } from "@hooks";
import { searchFilms } from "@modules/search";
import BackgroundWrap from "@components/background-wrap";
import Header from "@components/header";
import SearchInput from "@components/search-input";
import Loader from "@components/loader";
import Films from "./films";
import SearchHistory from "@components/search-history";

import { Container, Status, Error, EmptyFilms, FilmsCount } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [films, setFilms] = useState(null);
  const mounted = useRef();
  const [debouncedSearch, typing] = useDebounceValue(search, 500);

  useEffect(() => {
    const request = axios.CancelToken.source();

    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (debouncedSearch !== "" && error === "") {
        setLoading(true);
        searchFilms(debouncedSearch, request.token)
          .then((films) => {
            setFilms(films);
          })
          .catch((error) => {
            setError(error);
          })
          .finally(() => {
            setLoading(false);
          });
      } else {
        setFilms([]);
      }
    }

    return () => {
      request.cancel("cancel pending request");
    };
  }, [debouncedSearch]);

  const inputChange = (e) => {
    const { value } = e.target;
    if (value.length >= 50) {
      setError("Search value too long, should be less than 50 characters");
    } else {
      setError("");
    }
    setSearch(value);
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
        {/* <Status>
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
        <SearchHistory /> */}
      </Container>
    </BackgroundWrap>
  );
};
export default Search;
