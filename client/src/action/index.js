import axios from "axios";

// export function sendProduct(payload){

//     return async function(dispatch){
//        const res= await axios("http://localhost:3001/carrito/",payload );
//         console.log("esto es requei",res)

//         return dispatch({
//             type:"SEND_PRODUCT",
//             res,
//         })
//     }
// }

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

export function getDetail(id, token) {
  return async function (dispatch) {
    // aca tenemos que mandar el token
    try {
      const Autenticaion = `Bearer ${token}`;

      const json = await axios("http://localhost:3001/detail/" + id, {
        headers: {
          Authorization: Autenticaion,
        },
      });

      return dispatch({
        type: "ID_DETAIL",
        payload: json.data,
      });
    } catch (error) {
      // HAY QUE LOGUEARSEEEEEEEEEE CARAJ MIERD DIRIA MIRTHA JE

      return dispatch({
        type: "ERROR",
      });
    }
  };
}

export function getCarrito() {
  return async function (dispatch) {
    const requeri = await axios.get("http://localhost:3001/carrito");
    return dispatch({
      type: "GET_CARRITO",
      payload: requeri.data,
    });
  };
}

export function sendProduct(payload,token) {


    const autenticacion= `Bearer ${token}`


    const response = axios.post(`http://localhost:3001/carrito`, payload,{
      headers:{
        Authorization:autenticacion,
      }
    });
    const data = response.data;
    console.log("dataaaaaaa de agregar el producto", data)
  
    return {
      type: "SEND_PRODUCT",
      payload: data,
    };

  
}

// export const loginUser=(email)=>{

//   console.log("email",email)

//   return async function(dispatch) {

//     console.log("requeeeri")
//     const requeri = await axios.post("http://localhost:3001/login", email);

//     return dispatch({
//       type:"TOKEN",
//       payload:requeri
//     })

//   }
// };
export function loginUser(user) {
  return async function (dispatch) {
    const requeri = await axios.post("http://localhost:3001/login", user);

    // ---------- INGRESO DE SESION TOKEN---------------
    const clave = requeri.data.token;
    window.localStorage.setItem("TOKEN", JSON.stringify(clave));

    return dispatch({
      type: "TOKEN",
      payload: requeri.data,
    });
  };
}

//  export default loginUser;
