export const filmDetailsConfig = (id, token) => ({
  method: "get",
  url: "/films/" + id,
  cancelToken: token,
});
