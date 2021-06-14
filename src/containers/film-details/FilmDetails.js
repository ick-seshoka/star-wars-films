import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

import { axios, logger } from "@helpers";
import { filmDetailsConfig } from "@api/film-details";
import BackgroundWrap from "@components/background-wrap";
import Header from "@components/header";

import { Container } from "./styles";

const FilmDetails = () => {
  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();

  const [filmDetails, setFilmsDetails] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  useEffect(() => {
    const id = query.get("id");
    let request = axios.CancelToken.source();

    axios(filmDetailsConfig(id, request.token))
      .then(({ data }) => {
        setFilmsDetails(data);
      })
      .catch((error) => {
        if (axios.isCancel(error)) return;
        setError("Something went wrong");
        logger(error);
      });

    return () => {
      request.cancel("cancel pending request");
    };
  }, []);

  return (
    <BackgroundWrap>
      <Container>
        <Header />
      </Container>
    </BackgroundWrap>
  );
};

export default FilmDetails;
