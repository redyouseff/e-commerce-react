import { Get_Error,CREATE_SUB_CATEGORY ,GET_SUB_CATEGORY} from "../Type";
import {UseGetData} from "../../Hooks/UseGetData";
import {useInsetDataWithImage,useInsetData} from "../../Hooks/useInsertData"



//create category 
export const createSubCategory = (formData) => async (dispatch) => {
    try {
        const response = await useInsetData(`/api/v1/subCategore`,formData);
        dispatch({
            type: CREATE_SUB_CATEGORY,
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
//get all subcategory of the category 
export const GetSubcategoryFromCategory = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/categore/${id}/subCategore`);
        
        dispatch({
            type: GET_SUB_CATEGORY,
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





