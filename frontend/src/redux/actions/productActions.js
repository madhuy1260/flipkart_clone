import axios from "axios";
import {
  GET_PRODUCTS_SUCCESS,
  GET_PRODUCTS_FAIL,
  GET_PRODUCT_DETAILS_REQUEST,
  GET_PRODUCT_DETAILS_SUCCESS,
  GET_PRODUCT_DETAILS_FAIL,
} from "../constants/productConstants";

const url = "http://localhost:8000";

export const getProducts = () => async (dispatch) => {
  try {
    let response = await axios.get(`${url}/products`);
    // console.log(response);
    dispatch({ type: GET_PRODUCTS_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCTS_FAIL, payload: err.message });
    // console.log("error while calling getproducts api", err.message);
  }
};

export const getProductDetails = (id) => async (dispatch) => {
  try {
    dispatch({ type: GET_PRODUCT_DETAILS_REQUEST });
    let response = await axios.get(`${url}/product/${id}`);
    dispatch({ type: GET_PRODUCT_DETAILS_SUCCESS, payload: response.data });
  } catch (err) {
    dispatch({ type: GET_PRODUCT_DETAILS_FAIL, payload: err.message });
  }
};
