const intialState={
product:[],
productSeach:[],
detailProduct:[],
myCArrito:[],
userStatus:[]
}
export default function rootRecuducer(state=intialState,action){
 
 
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
                userStatus:action.payload
            }    
                
                default:
                    return state;
}}