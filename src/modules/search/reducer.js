import * as actions from "./actions";

export const initialState = {
  search: "",
  films: [],
  loading: false,
  error: "",
  typing: false,
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.SET_SEARCH: {
      const {
        payload: { search },
      } = action;

      return {
        ...state,
        search,
      };
    }

    case actions.SET_FILMS: {
      const {
        payload: { films },
      } = action;

      return {
        ...state,
        films,
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

    case actions.SET_LOADING: {
      const {
        payload: { loading },
      } = action;

      return {
        ...state,
        loading,
      };
    }

    case actions.SET_TYPING: {
      const {
        payload: { typing },
      } = action;

      return {
        ...state,
        typing,
      };
    }

    default:
      return state;
  }
}
