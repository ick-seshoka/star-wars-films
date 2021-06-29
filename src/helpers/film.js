export function getFilmIdFromUrl(url) {
  try {
    const urlParts = url?.split("/").filter(Boolean);
    const filmId = urlParts[urlParts.length - 1];
    if (!isNaN(filmId)) {
      return filmId;
    } else {
      throw new Error({
        error,
        errorInfo: "something went wrong trying to get film id",
      });
    }
  } catch (error) {
    throw new Error({
      error,
      errorInfo: "something went wrong trying to get film id",
    });
  }
}
