const intialState={
product:[],
productSeach:[],
detailProduct:[],
myCArrito:[],
userStatus:[],
alerta:false
}
export default function rootRecuducer(state=intialState,action){
  console.log("esto es action",action)
 
    switch(action.type){
        case "GET_PRODUCT":
            
            return {
                ...state,
                product:action.payload,
                
            }
         case "SEACH_PRODUCT":
            return {
                ...state,
                productSeach:action.payload

            }
        case "ID_DETAIL":
            return {
                ...state,
                detailProduct:action.payload
            }
        case "GET_CARRITO":
            return {
                ...state,
                myCarrito:action.payload
            }
            
        case "SEND_PRODUCT":
            return {
                ...state,
            }
        case "TOKEN":  
            return {
                ...state,
                alerta:false,
                userStatus:action.payload
            } 
            case "ERROR":  
            return {
                ...state,
                alerta:true
            }    
                
                default:
                    return state;
}}