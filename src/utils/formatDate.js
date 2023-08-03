export const formatDate = () => {
  const shortDate = (date) => {
    const dateObj = new Date(date);

    const day = dateObj.getDate();
    const month = (dateObj.getMonth() + 1).toString().padStart(2, "0");
    const year = dateObj.getFullYear();

    return `${day}/${month}/${year}`;
  };

  const getHour = (date) => {
    const dateObj = new Date(date);

    const hour = dateObj.getHours().toString().padStart(2, "0");
    const minutes = dateObj.getMinutes().toString().padStart(2, "0");

    return `${hour}:${minutes}`;
  };

  return {
    shortDate,
    getHour,
  };
};
