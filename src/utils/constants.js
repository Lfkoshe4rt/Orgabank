export const API_BASE_URL = "https://orgabank.onrender.com/";

export const API_DEV_URL = `http://localhost:3001/`;

export const Authorization = () => {
  const { token } = JSON.parse(localStorage.getItem("reduxState"));
  return { Authorization: `Bearer ${token}` };
};
