export function trimString(value) {
  try {
    return value.trim();
  } catch (error) {
    throw new Error({
      error,
      errorInfo: "trim string value is undefined",
    });
  }
}

export function getUrlSearchParams(params) {
  try {
    return new URLSearchParams(params);
  } catch (error) {
    throw new Error({
      error,
      errorInfo: "something went wrong creating new url search params",
    });
  }
}

export function isValidSearch(search) {
  try {
    if (search.length >= 50) {
      return false;
    }

    return true;
  } catch (error) {
    throw new Error({
      error,
      errorInfo: `something went wrong validating search string: ${search}`,
    });
  }
}
