export const generateHeader = (token) => {
  return {
    Authorization: `Bearer ${token}`,
  };
};
