import  { CREATE_USER,Get_Error,LOGIN_USER,GET_CURRENT_USER,FORGET_PASSWORD,VERIFY_PASSWORD,RESET_PASSWORD} from "../Type"
const initail={
    createuser:[],
    loginuser:[],
    currentuser:[],
    forgetpassword:[],
    verifypassword:[],
    resetpassword:[],
    loading:true
}
const AuthReducer=(state=initail,action)=>{
  
    switch(action.type){
        case CREATE_USER:
            return{
                ...state,
                createuser:action.payload,
                loading:false
                
            }
            case LOGIN_USER:
                 return{
                ...state,
                loginuser:action.payload,
                loading:false
                
            }
            case GET_CURRENT_USER:
                return{
               ...state,
               currentuser:action.payload,
               loading:false
               
           }
           case FORGET_PASSWORD:
            return{
           ...state,
           forgetpassword:action.payload,
           loading:false
           
       }
       case VERIFY_PASSWORD:
        return{
       ...state,
       verifypassword:action.payload,
       loading:false
       
   }
   case RESET_PASSWORD:
        return{
       ...state,
       resetpassword:action.payload,
       loading:false
       
   }
            
            case Get_Error :
             return {
                loading:true,
                createuser:action.payload

            }
           
            default:
                return state;
    }



}
export default AuthReducer
