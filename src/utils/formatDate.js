export const formatDate = () => {
  const shortDate = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month =
      dateObj.getMonth() + 1 < 10
        ? `0${dateObj.getMonth() + 1}`
        : dateObj.getMonth() + 1;
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const getHour = (date) => {
    const dateObj = new Date(date);

    const hour = dateObj.getHours();
    const minutes = dateObj.getMinutes();

    return `${hour}:${minutes}`;
  };

  return {
    shortDate,
    getHour,
  };
};
