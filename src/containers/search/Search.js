import React, { useEffect, useRef, useState } from "react";

import { axios, logger } from "@helpers";
import { searchConfig } from "@api/search";
import BackgroundWrap from "@components/background-wrap";
import Header from "@components/header";
import SearchInput from "@components/search-input";
import Loader from "@components/loader";
import Films from "./films";
import SearchHistory from "@containers/search-history";

import { Container, Status, Error, EmptyFilms, FilmsCount } from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [films, setFilms] = useState(null);
  const mounted = useRef();

  useEffect(() => {
    let searchInterval = null;
    let request = axios.CancelToken.source();

    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (search !== "") {
        setLoading(true);
        setFilms(null);
        searchInterval = setTimeout(() => {
          axios(searchConfig(search, request.token))
            .then(({ data: { results } }) => {
              setFilms(results);
            })
            .catch((error) => {
              if (axios.isCancel(error)) {
                return;
              } else {
                setError("Something went wrong:(, please try again");
                logger(error);
              }
            })
            .finally(() => {
              setLoading(false);
            });
        }, 500);
      } else {
        setLoading(false);
        setFilms(null);
      }
    }

    return () => {
      clearInterval(searchInterval);
      request.cancel("cancel pending request");
    };
  }, [search]);

  const inputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

  const isError = !loading && error && error !== "";
  const filmsCount = films?.length;
  const noFilms = filmsCount === 0 && !loading && !error && search !== "";

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
          {loading && <Loader />}
          {isError && <Error>{error}</Error>}
          {noFilms && (
            <EmptyFilms>{`no film(s) with name ${search}`}</EmptyFilms>
          )}
          {filmsCount > 0 && (
            <FilmsCount>
              {`${filmsCount} movie${filmsCount > 1 ? "s" : ""} found`}
            </FilmsCount>
          )}
        </Status>
        <Films films={films} />
        <SearchHistory />
      </Container>
    </BackgroundWrap>
  );
};
export default Search;
