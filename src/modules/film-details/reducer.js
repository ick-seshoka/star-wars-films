import * as actions from "./actions";

export const initialState = {
  loading: false,
  error: "",
  details: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_DETAILS: {
      const {
        payload: { details },
      } = action;

      return {
        ...state,
        details,
      };
    }

    case actions.SET_LOADING: {
      const {
        payload: { loading },
      } = action;

      return {
        ...state,
        loading,
      };
    }

    case actions.SET_ERROR: {
      const {
        payload: { error },
      } = action;

      return {
        ...state,
        error,
      };
    }

    default:
      return state;
  }
}
