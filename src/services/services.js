import axios from "axios";

const BASE_URL = import.meta.env.VITE_API_URL;

function postCsv(formData) {
  const request = axios.post(`${BASE_URL}/stock/validate`, formData);
  return request;
}

function updateDb(formData) {
  const request = axios.put(`${BASE_URL}/stock/update`, formData);
  return request;
}

export { postCsv, updateDb };
