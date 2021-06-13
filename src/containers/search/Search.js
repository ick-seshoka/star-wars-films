import React, { useEffect, useRef, useState } from "react";

import Header from "@components/header";
import SearchInput from "@components/search-input";

import { Background, Container } from "./styles";
import { axios } from "@helpers";
import { searchConfig } from "@api/search";

const Search = () => {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [films, setFilms] = useState([]);

  const mounted = useRef();
  let searchInterval = null;

  useEffect(() => {
    if (!mounted.current) {
      mounted.current = true;
    } else {
      if (search !== "") {
        searchInterval = setTimeout(() => {
          setLoading(true);
          axios(searchConfig(search))
            .then(({ data: { results } }) => {
              setFilms(results);
            })
            .catch((error) => {
              setError("Something went wrong:(, please try again");
              logger(error);
            })
            .finally(() => {
              setLoading(false);
            });
        }, 500);
      } else {
        setLoading(false);
      }
    }

    return () => {
      clearInterval(searchInterval);
    };
  }, [search]);

  const inputChange = (e) => {
    const { value } = e.target;
    setSearch(value);
  };

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
      </Container>
    </Background>
  );
};
export default Search;
