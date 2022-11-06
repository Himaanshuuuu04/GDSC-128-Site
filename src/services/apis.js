import axios from "axios";

function getConfig() {
  const config = {
    headers: {
      Authorization: "Bearer " + localStorage.getItem("token"),
      "Content-Type": "application/json",
    },
  };
  return config;
}

function httpConfig() {
  const config = "http://localhost:3000/api/v1/"; //local host
  return config;
}


export function signUpApi(data) {
    const URL = httpConfig() + "auth/signup-user";
    return axios.post(URL, data, getConfig());
}