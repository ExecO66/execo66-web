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
  const pad = function (num: number) {
    return (num < 10 ? "0" : "") + num;
  };

  return (
    date.getFullYear() +
    "-" +
    pad(date.getMonth() + 1) +
    "-" +
    pad(date.getDate()) +
    "T" +
    pad(date.getHours()) +
    ":" +
    pad(date.getMinutes()) +
    ":" +
    pad(date.getSeconds()) +
    dif +
    pad(Math.floor(Math.abs(tzo) / 60)) +
    ":" +
    pad(Math.abs(tzo) % 60)
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
