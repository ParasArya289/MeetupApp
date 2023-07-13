export const dateFormatter = (date) => {
    return date
  const options = { dateStyle: "full", timeStyle: "long" };
  const formattedDate = new Intl.DateTimeFormat("en-US", options).format(date);
//   return formattedDate;
};
