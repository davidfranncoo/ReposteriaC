import axios from "axios";

export function getProduct() {
  return async function (dispatch) {
    const json = await axios("/product");
    return dispatch({
      type: "GET_PRODUCT",
      payload: json.data,
    });
  };
}
export function seachProduct(seach) {
  return async function (dispatch) {
    const category = seach.category;
    const json = await axios("/product/" + category);

    return dispatch({
      type: "SEACH_PRODUCT",
      payload: json.data,
    });
  };
}
export function getDetail(id, token) {
  return async function (dispatch) {
    // aca tenemos que mandar el token
    try {
      const Autenticaion = `Bearer ${token}`;

      const json = await axios("/product/detail/" + id, {
        headers: {
          Authorization: Autenticaion,
        },
      });

      return dispatch({
        type: "ID_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      return dispatch({
        type: "ERROR",
      });
    }
  };
}
export function getCarrito() {
  const noParse = window.localStorage.getItem("TOKEN");
  const token = JSON.parse(noParse);

  return async function (dispatch) {
    const autenticacion = `Bearer ${token}`;

    const requeri = await axios.get("/carrito", {
      headers: {
        Authorization: autenticacion,
      },
    });

    return dispatch({
      type: "GET_CARRITO",
      payload: requeri.data,
    });
  };
}
export function deleteOneCarrito(info) {
  return async function (dispatch) {
    return dispatch({
      type: "GET_CARRITO",
      payload: info,
    });
  };
}
export function deleteteAllCarrito(info) {
  return async function (dispatch) {
    return dispatch({
      type: "GET_CARRITO",
      payload: info,
    });
  };
}
export function sendProduct(payload, token) {
  const autenticacion = `Bearer ${token}`;

  const response = axios.post(`/carrito`, payload, {
    headers: {
      Authorization: autenticacion,
    },
  });
  const data = response.data;

  return {
    type: "SEND_PRODUCT",
    payload: data,
  };
}

export function loginUser(user) {
  return async function (dispatch) {
    console.log("acaaaaaaaa");
    try {
      const requeri = await axios.post("/login", user);

      const clave = requeri.data.token;

      window.localStorage.setItem("TOKEN", JSON.stringify(clave));

      return dispatch({
        type: "TOKEN",
        payload: requeri.data,
      });
    } catch (error) {
      return dispatch({
        type: "TOKEN",
        payload: { ERROR: true },
      });
    }
  };
}
export function getLogin() {
  const loggedUserJSON = window.localStorage.getItem("TOKEN");

  if (loggedUserJSON) {
    return {
      type: "GET_LOGIN",
      payload: loggedUserJSON,
    };
  } else {
    return {
      type: "GET_LOGIN",
      payload: "ERROR_LOGIN",
    };
  }
}
export function getUser() {
  const loggedUserJSON = window.localStorage.getItem("TOKEN");
  const user = JSON.parse(loggedUserJSON);

  const autenticacion = `Bearer ${user}`;
  return async function (dispatch) {
    const response = await axios.get(`/user`, {
      headers: {
        Authorization: autenticacion,
      },
    });

    return dispatch({
      type: "GET_USER",
      payload: response.data,
    });
  };
}
export function deleteCarritoUni(id) {
  return async function () {
    const noParse = window.localStorage.getItem("TOKEN");
    const token = JSON.parse(noParse);

    const autenticacion = `Bearer ${token}`;
    await axios.delete(`/carrito`, {
      headers: {
        Authorization: autenticacion,
      },
      data: { id: id },
    });

    return {
      type: "DELETE_ONE_CARRITO",
    };
  };
}
export function deleteAllCarrito(ids) {
  return async function () {
    const noParse = window.localStorage.getItem("TOKEN");
    const token = JSON.parse(noParse);

    const autenticacion = `Bearer ${token}`;
    await axios.delete(`/carrito/compra`, {
      headers: {
        Authorization: autenticacion,
      },
      data: { idsCarritos: ids },
    });

    return {
      type: "DELETE_ONE_CARRITO",
    };
  };
}
// export function createUser(payload) {
//   return async function (dispatch) {
//     console.log("acaaaestoy");

//     try {
//       const statu = await axios.post("/singup", payload);
//       console.log("paseporaccccc", statu);

//       dispatch({
//         type: "CREATE_USER",
//         payload: statu.data, // Asumiendo que el objeto statu tiene una propiedad data
//       });
//     } catch (error) {
//       console.error("Error en createUser:", error);

//       dispatch({
//         type: "CREATE_USER",
//         payload: error.message,
//       });
//     }
//   };
// }
