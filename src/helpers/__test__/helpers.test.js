import { trimString, getUrlSearchParams, isValidSearch } from "../utils";
import { getFilmIdFromUrl } from "../film";

describe("Test helpers", () => {
  test("Trim string", () => {
    const search = " a new   ";
    expect(trimString(search)).toBe("a new");
    expect(() => trimString()).toThrow();
  });

  test("Url search param", () => {
    const urlSearchParam = "search?id=1";
    expect(getUrlSearchParams(urlSearchParam)).toStrictEqual(
      new URLSearchParams(urlSearchParam)
    );
  });

  test("Search value validity", () => {
    const validSearch = "a new value";
    expect(isValidSearch(validSearch)).toBeTruthy();
    const invalidSearch = "a new a new a new a new a new a new a new a new a ";
    expect(isValidSearch(invalidSearch)).toBeFalsy();
    expect(() => isValidSearch()).toThrowError();
  });

  test("Date formatting", () => {
    const date = "2021-06-29";
    const formateDate = jest.fn((date) => {
      if (date) {
        if (!isNaN(new Date(date).getTime())) {
          return "Tuesday 29 June 2021";
        } else {
          throw {
            errorInfo: "something went wrong in date formatting",
            error: "formatDate error",
          };
        }
      } else {
        throw new Error("received invalid date string");
      }
    });

    const result = formateDate(date);

    expect(result).toMatch(/tuesday 29 june 2021/i);
    expect(formateDate).toHaveBeenCalledTimes(1);
    expect(formateDate).toHaveBeenCalledWith(date);
    expect(() => formateDate()).toThrowError();
    expect(() => formateDate("2021-13-09")).toThrowError();
  });

  test("Get film id from url ", () => {
    const url = "https://swapi.dev/api/films/1/";
    const invalidUrl = "https://swapi.dev/api/films/1s";
    expect(getFilmIdFromUrl(url)).toMatch(/1/);
    expect(() => getFilmIdFromUrl()).toThrowError();
    expect(() => getFilmIdFromUrl(invalidUrl)).toThrowError();
  });
});
