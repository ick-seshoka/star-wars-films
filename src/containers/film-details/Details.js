import React, { useEffect, memo } from "react";
import PropTypes from "prop-types";

import { useSearchHistoryContext } from "@contexts/search-history";
import { formatDate } from "@helpers";
import { routes } from "@enums";
import Skeleton from "./Skeleton";

const ErrorMessage = memo(() => (
  <ErrorMessage>
    Something went wrong trying to load the page :( click{" "}
    <SearchLink to={routes.home}>here</SearchLink> to search for a film or
    reload the page if that does not work
  </ErrorMessage>
));

import {
  Author,
  DetailsWrap,
  EM,
  Episode,
  OpeningCrawl,
  ReleaseDate,
  Title,
  Wrap,
  SearchLink,
  Label,
} from "./styles";

const Details = ({ details, loading, error }) => {
  const { addFilmToSearchHistory } = useSearchHistoryContext();

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

  if (error) return <ErrorMessage />;

  return (
    <DetailsWrap>
      <Title>
        <Label>Star Wars: </Label>
        {title}
      </Title>
      <Wrap>
        <Episode>{`Episode ${episode_id}`}</Episode>
        <ReleaseDate>
          <EM>{`released: ${formatDate(release_date)}`}</EM>
        </ReleaseDate>
      </Wrap>
      <OpeningCrawl>{opening_crawl}</OpeningCrawl>
      <Wrap>
        <Author>{`Prod: ${producer}`}</Author>
        <Author>{`Dir: ${director}`}</Author>
      </Wrap>
    </DetailsWrap>
  );
};

Details.defaultProps = {
  details: {},
  loading: false,
  error: "",
};

Details.defaultProps = {
  details: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
  error: PropTypes.string,
};

export default Details;
