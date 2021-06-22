import * as actions from "./actions";

export const initialState = {
  films: [],
};

export function reducer(state = initialState, action) {
  switch (action.type) {
    case actions.ADD_FILM_TO_SEARCH_HISTORY: {
      const {
        payload: { film },
      } = action;

      const filmsCopy = [...state.films];

      if (filmsCopy.filter((item) => item.id === film.id).length === 0) {
        return {
          ...state,
          films: [...filmsCopy, film],
        };
      }

      return state;
    }

    default:
      return state;
  }
}
