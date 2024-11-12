import axios from "axios";
import { apiUrl } from "../utils/consts";

export const api = axios.create({
  baseURL: apiUrl,
  validateStatus: (status) => {
    if (status === 401) {
      return false;
    }
    return true;
  },
});
