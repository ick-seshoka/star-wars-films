import { axios, logger } from "@helpers";
import { searchConfig } from "@api/search";

export function searchFilms(search, token) {
  return axios(searchConfig(search, token))
    .then(({ data: { results } }) => results)
    .catch((error) => {
      logger(error);
      if (axios.isCancel(error)) {
        return;
      } else {
        return "something went worng";
      }
    });
}
