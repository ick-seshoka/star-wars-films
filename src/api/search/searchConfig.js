export const searchConfig = (search) => ({
  method: "get",
  url: "/films",
  params: { search },
});
