import { getDetails, getError, getLoading } from "../../film-details/selectors";
import { initialState } from "../../film-details/reducer";

describe("Test film details selectors", () => {
  test("Get details", () => {
    const details = {
      id: "1",
      url: "https://url/to/the/film/1",
      name: "a new hope",
    };

    expect(getDetails()).toBeUndefined();
    expect(getDetails(initialState)).toEqual({});
    expect(getDetails({ ...initialState, details })).toStrictEqual(details);
  });

  test("Get loading", () => {
    expect(getLoading()).toBeUndefined();
    expect(getLoading(initialState)).toBeTruthy();
    expect(getLoading({ ...initialState, loading: false })).toBeFalsy();
  });

  test("Get error", () => {
    expect(getError()).toBeUndefined();
    expect(getError(initialState)).toMatch("");
    expect(
      getError({ ...initialState, error: "Something went wrong" })
    ).toMatch(/something went wrong/i);
  });
});
