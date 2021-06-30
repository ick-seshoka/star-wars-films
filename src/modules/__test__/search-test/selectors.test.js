import { initialState } from "../../search/reducer";
import {
  getLoading,
  getError,
  getFilms,
  getTyping,
  getSearch,
} from "../../search/selectors";

describe("Test search selectors", () => {
  test("Get search", () => {
    expect(getSearch()).toBeUndefined();
    expect(getSearch(initialState)).toMatch("");
    expect(getSearch({ ...initialState, search: "a new" })).toMatch(/a new/);
  });

  test("Get Error", () => {
    expect(getError()).toBeUndefined();
    expect(getError(initialState)).toMatch("");
    expect(
      getError({ ...initialState, error: "something went wrong" })
    ).toMatch(/something went wrong/);
  });

  test("Get loading", () => {
    expect(getLoading()).toBeUndefined();
    expect(getLoading(initialState)).toBeFalsy();
    expect(getLoading({ ...initialState, loading: true })).toBeTruthy();
  });

  test("Get films", () => {
    expect(getFilms()).toBeUndefined();
    expect(getFilms(initialState)).toEqual([]);
    expect(
      getFilms({ ...initialState, films: [{ title: "a new hope" }] })
    ).toEqual([{ title: "a new hope" }]);
  });

  test("Get typing", () => {
    expect(getTyping()).toBeUndefined();
    expect(getTyping(initialState)).toBeFalsy();
    expect(getTyping({ ...initialState, typing: true })).toBeTruthy();
  });
});
