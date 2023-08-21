const intialState={
product:[],
productSeach:[]
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
            default:
                return state;



}}