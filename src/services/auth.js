import httpClient from "../utils/httpClient";

const login = async (user) => {
  try {
    const res = await httpClient.post("/auth", { data: user });
    return res;
  } catch (err) {
    return err;
  }
};

export default {
  login,
};
