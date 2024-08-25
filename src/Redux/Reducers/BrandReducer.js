import  { Get_All_BRAND,Get_Error,CREATE_BRAND ,GET_ONE_BRAND} from "../Type"
const initail={
    brand:[],
    onebrand:[],
    loading:true
}
const brandReducer=(state=initail,action)=>{
  
    switch(action.type){
        case Get_All_BRAND:
            return{
                ...state,
                brand:action.payload,
                loading:false
                
            }
            case Get_Error :
             return {
                loading:true,
                brand:action.payload

            }
            case GET_ONE_BRAND:{
                return {
                    loading:false,
                    onebrand:action.payload
                }
            }
            case CREATE_BRAND:
                return{
                    loading :false,
                    brand:action.payload
                }
            default:
                return state;
    }



}
export default brandReducer
