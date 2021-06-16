import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { fetchFilmDetails } from "@modules/film-details";
import { axios } from "@helpers";
import BackgroundWrap from "@components/background-wrap";
import Header from "@components/header";
import Details from "./Details";

import { Container } from "./styles";

const FilmDetails = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  const [filmDetails, setFilmsDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const id = query.get("id");

  useEffect(() => {
    const request = axios.CancelToken.source();
    setLoading(true);

    fetchFilmDetails(id, request.token)
      .then((details) => {
        setFilmsDetails(details);
      })
      .catch((error) => {
        setError(error);
      })
      .finally(() => {
        setLoading(false);
      });

    return () => {
      request.cancel("cancel pending request");
    };
  }, []);

  const details = { id, ...filmDetails };

  return (
    <BackgroundWrap imageId={id}>
      <Container>
        <Header />
        {<Details details={details} loading={loading} error={error} />}
      </Container>
    </BackgroundWrap>
  );
};

export default FilmDetails;
