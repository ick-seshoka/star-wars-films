import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { axios, logger } from "@helpers";
import { filmDetailsConfig } from "@api/film-details";
import BackgroundWrap from "@components/background-wrap";
import Header from "@components/header";
import Details from "./Detials";

import { Container } from "./styles";

const FilmDetails = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  const [filmDetails, setFilmsDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = query.get("id");

    axios(filmDetailsConfig(id))
      .then(({ data }) => {
        setFilmsDetails({ id, ...data });
      })
      .catch((error) => {
        setError("Something went wrong");
        logger(error);
      });
  }, []);

  return (
    <BackgroundWrap>
      <Container>
        <Header />
        {filmDetails && <Details details={filmDetails} />}
      </Container>
    </BackgroundWrap>
  );
};

export default FilmDetails;
