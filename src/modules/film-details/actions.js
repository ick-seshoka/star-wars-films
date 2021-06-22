export const SET_DETAILS = "SET_DETAILS";
export const SET_LOADING = "SET_LOADING";
export const SET_ERROR = "SET_ERROR";

export function setDetails(dispatch, details) {
  dispatch({ type: SET_DETAILS, payload: { details } });
}

export function setLoading(dispatch, loading) {
  dispatch({ type: SET_LOADING, payload: { loading } });
}

export function setError(dispatch, error) {
  dispatch({ type: SET_ERROR, payload: { error } });
}
