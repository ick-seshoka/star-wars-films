import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { axios, logger } from "@helpers";
import { filmDetailsConfig } from "@api/film-details";
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
    setLoading(true);
    axios(filmDetailsConfig(id))
      .then(({ data }) => {
        setFilmsDetails({ id, ...data });
      })
      .catch((error) => {
        setError("Something went wrong");
        logger(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <BackgroundWrap imageId={id}>
      <Container>
        <Header />
        <Details details={filmDetails} loading={loading} />
      </Container>
    </BackgroundWrap>
  );
};

export default FilmDetails;
