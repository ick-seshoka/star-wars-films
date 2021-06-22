import React, { useEffect, useReducer } from "react";
import { useLocation } from "react-router-dom";

import {
  getDetails,
  getError,
  getLoading,
  initialState,
  reducer,
  setLoading,
  setError,
  setDetails,
  fetchFilmDetails,
} from "@modules/film-details";
import { axios } from "@helpers";

import BackgroundWrap from "@components/background-wrap";
import Header from "@components/header";
import Details from "./Details";

import { Container } from "./styles";

const FilmDetails = () => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const details = getDetails(state);
  const error = getError(state);
  const loading = getLoading(state);

  const useQuery = () => new URLSearchParams(useLocation().search);
  const query = useQuery();
  const id = query.get("id");

  useEffect(() => {
    const request = axios.CancelToken.source();
    setLoading(dispatch, true);

    fetchFilmDetails(id, request.token).then(({ error, results }) => {
      if (error) {
        if (!axios.isCancel(error)) {
          setError(dispatch, "Something went wrong");
          setLoading(dispatch, false);
        }
      } else {
        setDetails(dispatch, { id, ...results });
        setLoading(dispatch, false);
      }
    });

    return () => {
      request.cancel("cancel pending request");
    };
  }, []);

  return (
    <BackgroundWrap imageId={id}>
      <Container>
        <Header />
        <Details details={details} loading={loading} error={error} />
      </Container>
    </BackgroundWrap>
  );
};

export default FilmDetails;
