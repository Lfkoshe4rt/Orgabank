export const API_BASE_URL = "https://orgabank.onrender.com/";

export const API_DEV_URL = `http://localhost:3001/`;

const Authorization = () => {
  const state = JSON.parse(localStorage.getItem("reduxState"));

  if (state) {
    return { Authorization: `Bearer ${state.token}` };
  } else {
    return {};
  }
};

export default {
  Authorization,
};
