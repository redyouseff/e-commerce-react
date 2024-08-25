import { Get_All_BRAND,Get_Error,CREATE_BRAND,GET_ONE_BRAND } from "../Type";

import {UseGetData} from "../../Hooks/UseGetData";
import {useInsetDataWithImage,useInsetData} from "../../Hooks/useInsertData"

export const GetAllBrand=(limit)=> async(dispatch)=>{
    try{
        const res= await UseGetData(`/api/v1/brand?limit=${limit}`)
        dispatch ({
            type:Get_All_BRAND,
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

//get all brand with pagination
export const getAllBrandPage = (page) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/brand?limit=6&padge=${page}`);
        dispatch({
            type: Get_All_BRAND,
            payload: response,
        })

    } catch (e) {
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
        })
    }
}

//create brand 
export const createBrand = (formData) => async (dispatch) => {
    try {
        const response = await useInsetDataWithImage(`/api/v1/brand`,formData);
     
        dispatch({
            type: CREATE_BRAND,
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
//get one brand 
export const GetOneBrand = (id) => async (dispatch) => {
    try {
        const response = await UseGetData(`/api/v1/brand/${id}`);
     
        dispatch({
            type: GET_ONE_BRAND,
            payload: response.data,
            loading:true
        })

    } catch (e) {
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}




