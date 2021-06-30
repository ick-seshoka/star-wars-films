describe("Test search films", () => {
  test("Fetch films on search", () => {
    const searchFilms = jest.fn((search) => {
      if (search) {
        return Promise.resolve({
          error: {},
          results: [{ name: "a new hope" }, { name: "another one" }],
        });
      } else {
        return Promise.reject({
          error: "something went wrong",
          results: [],
        });
      }
    });

    searchFilms("a new hope").then((response) => {
      expect(response).toEqual({
        error: {},
        results: [{ name: "a new hope" }, { name: "another one" }],
      });
    });

    searchFilms(null).catch((error) => {
      expect(error).toEqual({
        error: "something went wrong",
        results: [],
      });
    });
  });
});
