export function trimString(value) {
  return value.trim();
}

export function getUrlSearchParams(params) {
  return new URLSearchParams(params);
}

export function isValidSearch(search) {
  if (search.length >= 50) {
    return false;
  }

  return true;
}
