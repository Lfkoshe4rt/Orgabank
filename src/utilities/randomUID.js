export const uid = () => {
  return String(Date.now().toString(36) + Math.random().toString(36)).replace(
    /\./g,
    ""
  );
};
