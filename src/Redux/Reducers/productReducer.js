import { updateProduct } from "../Actions/productAction"
import  { Get_All_Category,Get_Error,CREATE_CATEGORY,CREATE_PRODUCT,GET_ALL_PRODUCT,GET_PRODUCT_DETAILS ,DELETE_PRODUCT, UPDATE_PRODUCT} from "../Type"
const initail={
    product:[],
    allProducts:[],
    oneProduct:[],
    deleteproduct:[],
    updateProduct:[],
    loading:true
}
const productReducer=(state=initail,action)=>{
  
    switch(action.type){
      
            case CREATE_PRODUCT:
                return{
                    loading :false,
                    product:action.payload
                }
                
                case GET_ALL_PRODUCT:
                return{
                    loading :false,
                    allProducts:action.payload
                }
                case GET_PRODUCT_DETAILS:
                    return{
                        loading :false,
                        oneProduct:action.payload
                    }
                    case DELETE_PRODUCT:{
                        return{
                            loading :false,
                            deleteproduct:action.payload
                        }
                    }
                    case UPDATE_PRODUCT :{
                        return{
                            loading :false,
                            updateProduct:action.payload
                        }
                    }
                case Get_Error :
                    return {
                       loading:true,
                       product:action.payload
       
                   }
            default:
                return state;
    }
        
      

}
export default productReducer