describe("Test fetch film details", () => {
  test("Fetches film details with mock", () => {
    const fetchName = jest.fn((id, token) => {
      if (id && token) {
        return Promise.resolve({
          error: {},
          results: { id: "1", title: "a new hope" },
        });
      } else {
        return Promise.reject({
          error: { error: "something went wrong" },
          results: {},
        });
      }
    });

    fetchName("1", "token").then((response) => {
      expect(response).toEqual({
        error: {},
        results: { id: "1", title: "a new hope" },
      });
    });

    fetchName(null, "token").catch((error) => {
      expect(error).toEqual({
        error: { error: "something went wrong" },
        results: {},
      });
    });
  });
});
