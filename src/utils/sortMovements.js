export const sortMovements = (movements) => {
  return [...movements].sort((a, b) => {
    return new Date(b.createdAt) - new Date(a.createdAt);
  });
};
