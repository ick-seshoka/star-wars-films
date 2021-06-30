import { initialState, reducer } from "../../search-history/reducer";
import * as actions from "../../search-history/actions";

describe("Test search history reducer", () => {
  test("Has default state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  test("ADD_FILM_TO_SEARCH_HISTORY", () => {
    expect(
      reducer(initialState, {
        type: actions.ADD_FILM_TO_SEARCH_HISTORY,
        payload: { film: { title: "a new hope" } },
      })
    ).toEqual({
      ...initialState,
      films: [{ title: "a new hope" }],
    });
  });
});
