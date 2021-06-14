export const searchConfig = (search, token) => ({
  method: "get",
  url: "/films",
  params: { search },
  cancelToken: token,
});
