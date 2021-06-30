import { initialState, reducer } from "../../film-details/reducer";
import * as actions from "../../film-details/actions";

describe("Test film details reducer", () => {
  test("Has default state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  test("SET_DETAILS", () => {
    const details = {
      id: "1",
      url: "https://url/to/the/film/1",
      name: "a new hope",
    };

    expect(
      reducer(initialState, {
        type: actions.SET_DETAILS,
        payload: {
          details,
        },
      })
    ).toEqual({ ...initialState, details });
  });

  test("SET_LOADING", () => {
    expect(
      reducer(initialState, {
        type: actions.SET_LOADING,
        payload: { loading: true },
      })
    ).toEqual({
      ...initialState,
      loading: true,
    });

    expect(
      reducer(initialState, {
        type: actions.SET_LOADING,
        payload: { loading: false },
      })
    ).toEqual({
      ...initialState,
      loading: false,
    });
  });

  test("SET_ERROR", () => {
    const error = "something went wrong";

    expect(
      reducer(initialState, { type: actions.SET_ERROR, payload: { error } })
    ).toEqual({ ...initialState, error });
  });
});
