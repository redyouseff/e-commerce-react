import  { Get_All_Category,Get_Error,CREATE_CATEGORY ,GET_ONE_CATEGORE} from "../Type"
const initail={
    category:[],
    onecategore:[],
    loading:true
}
const CategoryReducer=(state=initail,action)=>{
  
    switch(action.type){
        case Get_All_Category:
            return{
                ...state,
                category:action.payload,
                loading:false
                
            }
            case GET_ONE_CATEGORE:{
                return{
                    loading:false,
                    onecategore:action.payload
                }
            }

            case Get_Error :
             return {
                loading:true,
                category:action.payload

            }

            case CREATE_CATEGORY:
                return{
                    loading :false,
                    category:action.payload
                }
            default:
                return state;
    }



}
export default CategoryReducer