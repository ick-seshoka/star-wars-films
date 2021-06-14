import React, { useEffect, useContext } from "react";
import PropTypes from "prop-types";

import { SearchHistoryContext } from "@contexts/search-history";

import {
  Author,
  DateInfo,
  DetailsWrap,
  EM,
  Episode,
  OpeningCrawl,
  ReaseDate,
  Title,
  Wrap,
} from "./styles";

const Details = ({ details }) => {
  const { addFilmToSearchHistory } = useContext(SearchHistoryContext);

  const {
    id,
    title,
    episode_id,
    opening_crawl,
    director,
    producer,
    release_date,
    created,
  } = details;

  useEffect(() => {
    addFilmToSearchHistory({ id, title });
  }, []);

  return (
    <DetailsWrap>
      <Title>{`Star Wars: ${title}`}</Title>
      <Wrap>
        <Episode>{`Episode ${episode_id}`}</Episode>
        <ReaseDate>
          <EM>{`released ${release_date}`}</EM>
        </ReaseDate>
      </Wrap>
      <OpeningCrawl>{opening_crawl}</OpeningCrawl>
      <Wrap>
        <Author>{`Prod: ${producer}`}</Author>
        <Author>{`Dir: ${director}`}</Author>
        <DateInfo>
          <EM>{`created: ${created}`}</EM>
        </DateInfo>
      </Wrap>
    </DetailsWrap>
  );
};

Details.defualtProps = {
  detials: {},
};

Details.defualtProps = {
  detials: PropTypes.object.isRequired,
};

export default Details;
