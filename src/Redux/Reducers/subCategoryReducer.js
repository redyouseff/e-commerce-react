import  { Get_Error,CREATE_SUB_CATEGORY,GET_SUB_CATEGORY } from "../Type"
const initail={
    subcategory:[],
    loading:true
}
const SubCategoryReducer=(state=initail,action)=>{
  
    switch(action.type){
        case CREATE_SUB_CATEGORY:
            return{
                ...state,
                subcategory:action.payload,
                loading:false
                
            }
            case GET_SUB_CATEGORY:
            return{
                ...state,
                subcategory:action.payload,
                loading:false
                
            }
            case Get_Error :
             return {
                loading:true,
                subcategory:action.payload

            }
           
            default:
                return state;
    }



}
export default SubCategoryReducer