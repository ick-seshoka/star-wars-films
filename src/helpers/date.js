import { days, months } from "@enums";
import { trimString } from "./utils";

export function formatDate(dateString) {
  if (dateString && trimString(dateString) !== "") {
    const date = new Date(dateString);

    if (!isNaN(date.getTime())) {
      const weekDay = date.getDay();
      const month = date.getMonth();
      const day = date.getDate();
      const year = date.getFullYear();

      return days[weekDay] + " " + day + " " + months[month] + " " + year;
    } else {
      throw new Error({
        errorInfo: "received invalid date string",
        error: "formatDate error",
      });
    }
  } else {
    throw new Error({
      errorInfo: "something went wrong in date formatting",
      error: "formatDate error",
    });
  }
}
