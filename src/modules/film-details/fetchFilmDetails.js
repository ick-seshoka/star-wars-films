import { axios, logger } from "@helpers";
import { filmDetailsConfig } from "@api/film-details";

export function fetchFilmDetails(id, token) {
  return axios(filmDetailsConfig(id, token))
    .then(({ data }) => ({ error: null, results: data }))
    .catch((error) => {
      logger(error);
      return { error, results: {} };
    });
}
