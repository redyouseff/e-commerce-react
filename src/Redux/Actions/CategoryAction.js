import { Get_All_Category,Get_Error,CREATE_CATEGORY,GET_ONE_CATEGORE } from "../Type";
import {UseGetData} from "../../Hooks/UseGetData";
import {useInsetDataWithImage,useInsetData} from "../../Hooks/useInsertData"

export const GetAllCategory=(limit)=> async(dispatch)=>{
    try{
        const res= await UseGetData(`/api/v1/categore?limit=${limit}`)
    
        dispatch ({
            type:Get_All_Category,
            payload: res
        })

    }
    catch(e){
        dispatch ({
            type:Get_Error,
            payload:"error" + e
        })

    }



}

//get all category with pagination
export const getAllCategoryPage = (page) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categore?limit=6&padge=${page}`);
        dispatch({
            type: Get_All_Category,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
        })
    }
}

//create category 
export const createCategory = (formData) => async (dispatch) => {
    try {
        const response = await useInsetDataWithImage(`/api/v1/categore`,formData);
        dispatch({
            type: CREATE_CATEGORY,
            payload: response,
            loading:true
        })

    } catch (e) {
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}

//get one category 
export const GetOneCategore = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categore/${id}`);
        dispatch({
            type: GET_ONE_CATEGORE,
            payload: response,
            loading:true
        })

    } catch (e) {
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}




