import api from "./Api";
import { type LoginResponce } from "./types";

// login API
export const loginUser = async (data: LoginResponce) => {
  const res = await api.post("/users/loginuser", data);
  console.log("Login API response:", res.data);
  return res.data;
};

export const registerUser = async (payload: Record<string, any>) => {
  const { data } = await api.post("/users/registeruser", payload);
  return data;
};

