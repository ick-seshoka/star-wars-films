export const SET_SEARCH = "SET_SEARCH";
export const SET_FILMS = "SET_FILMS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";
export const SET_TYPING = "SET_TYPING";

export function setSearch(dispatch, search) {
  dispatch({ type: SET_SEARCH, payload: { search } });
}

export function setFilms(dispatch, films) {
  dispatch({ type: SET_FILMS, payload: { films } });
}

export function setLoading(dispatch, loading) {
  dispatch({ type: SET_LOADING, payload: { loading } });
}

export function setError(dispatch, error) {
  dispatch({ type: SET_ERROR, payload: { error } });
}

export function setTyping(dispatch, typing) {
  dispatch({ type: SET_TYPING, payload: { typing } });
}
