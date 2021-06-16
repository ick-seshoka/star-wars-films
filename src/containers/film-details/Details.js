import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { SearchHistoryContext } from "@contexts/search-history";
import { formatDate } from "@helpers";
import { routes } from "@enums";
import Skeleton from "./Skeleton";

import {
  Author,
  DetailsWrap,
  EM,
  Episode,
  OpeningCrawl,
  ReaseDate,
  Title,
  Wrap,
  ErrorMessage,
  SearchLink,
} from "./styles";

const Details = ({ details, loading, error }) => {
  const { addFilmToSearchHistory } = useContext(SearchHistoryContext);

  const {
    id,
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
  } = details || {};

  useEffect(() => {
    id && title && addFilmToSearchHistory({ id, title });
  }, [id, title]);

  if (loading) return <Skeleton />;

  if (error)
    return (
      <ErrorMessage>
        Something went wrong trying to load the page :( click{" "}
        <SearchLink to={routes.home}>here</SearchLink> to search for a film or
        reload the page if that does not work
      </ErrorMessage>
    );

  return (
    <DetailsWrap>
      <Title>{`Star Wars: ${title}`}</Title>
      <Wrap>
        <Episode>{`Episode ${episode_id}`}</Episode>
        <ReaseDate>
          <EM>{`released: ${formatDate(release_date)}`}</EM>
        </ReaseDate>
      </Wrap>
      <OpeningCrawl>{opening_crawl}</OpeningCrawl>
      <Wrap>
        <Author>{`Prod: ${producer}`}</Author>
        <Author>{`Dir: ${director}`}</Author>
      </Wrap>
    </DetailsWrap>
  );
};

Details.defualtProps = {
  detials: {},
  loading: false,
  error: "",
};

Details.defualtProps = {
  detials: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Details;
