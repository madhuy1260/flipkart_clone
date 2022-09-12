import axios from "axios";

const url = "http://localhost:8000";

export const authenticateSignup = async (user) => {
  try {
    const resData = await axios.post(`${url}/signup`, user, {
      headers: { "Content-Type": "application/json" },
    });
    return resData;
  } catch (error) {
    console.log("error while calling Signup API: ", error);
  }
};

export const authenticateLogin = async (user) => {
  try {
    const resData = await axios.post(`${url}/login`, user, {
      headers: { "Content-Type": "application/json" },
    });
    return resData;
  } catch (error) {
    console.log("error while calling Login API: ", error);
    return error.response;
  }
};

export const payUsingPaytm = async (data) => {
  try {
    const response = await axios.post(`${url}/payment`, data);
    return response.data;
  } catch (err) {
    console.log("Error While Paytm Payment Process", err.message);
  }
};
