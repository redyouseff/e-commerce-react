import { Get_Error,CREATE_SUB_CATEGORY ,GET_SUB_CATEGORY,CREATE_PRODUCT,GET_ALL_PRODUCT,GET_PRODUCT_DETAILS,DELETE_PRODUCT,UPDATE_PRODUCT} from "../Type";
import {useInsetDataWithImage,useInsetData} from "../../Hooks/useInsertData"
import {UseGetData} from "../../Hooks/UseGetData";
import UseDeleteData from "../../Hooks/UseDeleteData";
import { useUdpateData, useUpdateDataWithImage } from "../../Hooks/UseUpdateData";

export const createProduct = (formData) => async (dispatch) => {
   
    try {
        const response = await useInsetDataWithImage(`/api/v1/product`,formData);
        
        dispatch({
            type: CREATE_PRODUCT,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}

export const getAllProduct =(limit)=> async (dispatch) => {
   
    try {
        const response = await UseGetData(`/api/v1/product?limit=${limit}`);
        
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}

export const getAllProductPage =(page,limit)=> async (dispatch) => {
   
    try {
        const response = await UseGetData(`/api/v1/product?padge=${page}&limit=${limit}`);
        
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}

export const getAllProductSearch =(querystring)=> async (dispatch) => {

    
    try {
     
        const response = await UseGetData(`/api/v1/product?${querystring}`);
        
        dispatch({
            type: GET_ALL_PRODUCT,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}


export const getProductDetails =(id)=> async (dispatch) => {
   
    try {
        const response = await UseGetData(`/api/v1/product/${id}`);
        
      
        
        dispatch({
            type: GET_PRODUCT_DETAILS,
            payload: response.data,
            loading:true
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}

export const deleteProduct =(id)=> async (dispatch) => {
   
    try {
        const response = await UseDeleteData(`/api/v1/product/${id}`);
        console.log("jjj")
        console.log(response)
      
        
        dispatch({
            type:DELETE_PRODUCT ,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: DELETE_PRODUCT,
            payload: "Error " + e,
            
        })
    }
}

export const updateProduct =(id,data)=> async (dispatch) => {
   
    try {
        const response = await  useUdpateData(`/api/v1/product/${id}`,data)
        
      
        
        dispatch({
            type: UPDATE_PRODUCT,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e.response)
        dispatch({
            type: Get_Error,
            payload: "Error " + e,
            
        })
    }
}