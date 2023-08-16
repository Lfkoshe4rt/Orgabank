import httpClient from "../utils/httpClient";
import { generateHeader } from "../utils/generateHeaders";

const create = async (data, token) => {
  try {
    const response = await httpClient.post("/caja", {
      data: data,
      headers: generateHeader(token),
    });

    return response;
  } catch (err) {
    return err;
  }
};

const update = async (data, token) => {
  try {
    const response = await httpClient.put("/caja", {
      data: data,
      headers: generateHeader(token),
    });
    return response;
  } catch (err) {
    return err;
  }
};

const remove = async (id, token) => {
  try {
    const response = await httpClient.delete(`/caja/${id}`, {
      headers: generateHeader(token),
    });
    return response;
  } catch (err) {
    return err;
  }
};

export default {
  create,
  update,
  remove,
};
