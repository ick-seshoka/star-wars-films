import { initialState, reducer } from "../../search/reducer";
import * as actions from "../../search/actions";

describe("Test search reducer", () => {
  test("Has default state", () => {
    expect(reducer(initialState, {})).toEqual(initialState);
  });

  test("SET_SEARCH", () => {
    expect(
      reducer(initialState, {
        type: actions.SET_SEARCH,
        payload: { search: "a new" },
      })
    ).toEqual({ ...initialState, search: "a new" });
  });

  test("SET_FILMS", () => {
    expect(
      reducer(initialState, {
        type: actions.SET_FILMS,
        payload: { films: [{ title: "a new" }] },
      })
    ).toEqual({ ...initialState, films: [{ title: "a new" }] });
  });

  test("SET_ERROR", () => {
    expect(
      reducer(initialState, {
        type: actions.SET_ERROR,
        payload: { error: "something went wrong" },
      })
    ).toEqual({ ...initialState, error: "something went wrong" });
  });

  test("SET_LOADING", () => {
    expect(
      reducer(initialState, {
        type: actions.SET_LOADING,
        payload: { loading: true },
      })
    ).toEqual({ ...initialState, loading: true });
  });

  test("SET_TYPING", () => {
    expect(
      reducer(initialState, {
        type: actions.SET_TYPING,
        payload: { typing: true },
      })
    ).toEqual({ ...initialState, typing: true });
  });
});
