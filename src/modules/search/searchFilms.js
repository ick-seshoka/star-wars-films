import { axios, logger } from "@helpers";
import { searchConfig } from "@api/search";

export function searchFilms(search, token) {
  return axios(searchConfig(search, token))
    .then(({ data: { results } }) => ({
      error: null,
      results,
    }))
    .catch((error) => {
      logger(error);
      return { error, results: [] };
    });
}
