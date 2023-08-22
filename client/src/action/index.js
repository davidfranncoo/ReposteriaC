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
export function getDetail(id) {
  return async function (dispatch) {
    const json = await axios("http://localhost:3001/detail/" + id);

    return dispatch({
      type: "ID_DETAIL",
      payload: json.data,
    });
  };
}
export function getCarrito(){
    return async function (dispatch){
        const requeri= await axios.get("http://localhost:3001/carrito");
        return dispatch({
            type:"GET_CARRITO",
            payload: requeri.data
        })
    }
}

export function sendProduct(payload){
    console.log("estoy acaaa")
   
      
        const response =  axios.post(`http://localhost:3001/carrito`,payload);
        const data = response.data;
        
      return ({
        type:"SEND_PRODUCT",
        payload:data
      })
    
  };
