import { axios, logger } from "@helpers";
import { filmDetailsConfig } from "@api/film-details";

export function fetchFilmDetails(id, token) {
  return axios(filmDetailsConfig(id, token))
    .then(({ data }) => data)
    .catch((error) => {
      logger(error);
      if (axios.isCancel(error)) {
        return;
      } else {
        return "something went worng";
      }
    });
}
