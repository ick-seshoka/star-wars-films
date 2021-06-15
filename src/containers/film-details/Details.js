import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { SearchHistoryContext } from "@contexts/search-history";
import { formatDate } from "@helpers";
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
} from "./styles";

const Details = ({ details, loading }) => {
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
};

Details.defualtProps = {
  detials: PropTypes.object.isRequired,
  loading: PropTypes.bool.isRequired,
};

export default Details;
