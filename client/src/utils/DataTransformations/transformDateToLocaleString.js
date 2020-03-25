const transformDateToLocaleString = (
  date,
  day = "numeric",
  month = "long",
  year = "numeric"
) =>
  new Date(date).toLocaleString("en-us", {
    day: day,
    month: month,
    year: year
  });

export default transformDateToLocaleString;
