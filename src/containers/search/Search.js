import React, { useEffect, useRef, useState } from "react";

import { axios } from "@helpers";
import { searchConfig } from "@api/search";
import Header from "@components/header";
import SearchInput from "@components/search-input";
import Loader from "@components/loader";
import Films from "./films";

import {
  Background,
  Container,
  Status,
  Error,
  EmptyFilms,
  FilmsCount,
} from "./styles";

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [films, setFilms] = useState(null);
  const mounted = useRef();

  let searchInterval = null;
  let request = axios.CancelToken.source();

  useEffect(() => {
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
    <Background>
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
      </Container>
    </Background>
  );
};
export default Search;
