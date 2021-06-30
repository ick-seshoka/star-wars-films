import { initialState } from "../../search-history/reducer";
import { getSearchHistory } from "../../search-history/selector";

describe("Test search history selectors", () => {
  test("Get search history", () => {
    expect(getSearchHistory()).toBeUndefined();
    expect(getSearchHistory(initialState)).toEqual([]);
    expect(
      getSearchHistory({ ...initialState, films: [{ title: "a new hope" }] })
    ).toEqual([{ title: "a new hope" }]);
  });
});
