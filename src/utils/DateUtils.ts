export const months = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

export const monthsAbbr = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "June",
  "July",
  "Aug",
  "Sept",
  "Oct",
  "Nov",
  "Dec",
];

export function getMonthAbbr(date: Date): string {
  return monthsAbbr[date.getMonth()];
}

export function getMonthFullname(date: Date): string {
  return months[date.getMonth()];
}

export function toISOString(date: Date): string {
  const tzo = -date.getTimezoneOffset();
  const dif = tzo >= 0 ? "+" : "-";

  return (
    date.getFullYear() +
    "-" +
    padNum(date.getMonth() + 1) +
    "-" +
    padNum(date.getDate()) +
    "T" +
    padNum(date.getHours()) +
    ":" +
    padNum(date.getMinutes()) +
    ":" +
    padNum(date.getSeconds()) +
    dif +
    padNum(Math.floor(Math.abs(tzo) / 60)) +
    ":" +
    padNum(Math.abs(tzo) % 60)
  );
}

// 2022-02-27T19:03:20-06:00
export function ISOStringToDate(dateStr: string): Date {
  const date = new Date();
  const [yr, mon, day, hr, min, sec] = dateStr.split(/[-T:+]/gi);

  date.setFullYear(parseInt(yr));
  date.setMonth(parseInt(mon) - 1);
  date.setDate(parseInt(day));
  date.setHours(parseInt(hr));
  date.setMinutes(parseInt(min));
  date.setSeconds(parseInt(sec));

  return date;
}

export function formatTwelveHHMin(date: Date): string {
  const hr = date.getHours();
  let twelveHr: number;
  let apPm: string;

  if (hr <= 12) {
    twelveHr = hr;
    apPm = "AM";
  } else {
    twelveHr = hr - 12;
  }

  apPm = "PM";

  return `${twelveHr}:${padNum(date.getMinutes())} ${apPm}`;
}

function padNum(n: number) {
  return (n < 10 ? "0" : "") + n;
}
