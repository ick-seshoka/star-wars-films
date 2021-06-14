export const ADD_FILM_TO_SEARCH_HISTORY = "ADD_FILM_TO_SEARCH_HISTORY";

export function addFilm(film) {
  return { type: ADD_FILM_TO_SEARCH_HISTORY, payload: { film } };
}
