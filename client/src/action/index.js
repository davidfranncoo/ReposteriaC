import axios from "axios";

export function getProduct() {
  return async function (dispatch) {
    const json = await axios("http://localhost:3001/product");
    return dispatch({
      type: "GET_PRODUCT",
      payload: json.data,
    });
  };
}

export function seachProduct(seach) {
  return async function (dispatch) {
    const category = seach.category;
    const json = await axios("http://localhost:3001/product/" + category);

    return dispatch({
      type: "SEACH_PRODUCT",
      payload: json.data,
    });
  };
}
