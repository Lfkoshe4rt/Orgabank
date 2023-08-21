import httpClient from "../utils/httpClient";

const login = async (user) => {
  try {
    const res = await httpClient.post("/auth", { data: user });
    return res;
  } catch (err) {
    return err;
  }
};

const register = async (user) => {
  try {
    const res = await httpClient.post("/user", { data: user });
    return res;
  } catch (err) {
    const { data } = err.response;
    return data;
  }
};

export default {
  login,
  register,
};
