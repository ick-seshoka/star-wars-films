import { days, months } from "@enums";

export function formatDate(dateString) {
  const date = new Date(dateString);

  const weekDay = date.getDay();
  const month = date.getMonth();
  const day = date.getDate();
  const year = date.getFullYear();

  return days[weekDay] + " " + day + " " + months[month] + " " + year;
}
