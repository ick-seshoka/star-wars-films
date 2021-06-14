export function getFilmIdFromUrl(url) {
  const urlParts = url?.split("/").filter(Boolean);
  return urlParts[urlParts.length - 1];
}
