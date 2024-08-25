import { CREATE_USER,LOGIN_USER,GET_CURRENT_USER,FORGET_PASSWORD,VERIFY_PASSWORD,RESET_PASSWORD} from "../Type";
import {UseGetData,UseGetDataToken} from "../../Hooks/UseGetData";
import {useInsetDataWithImage,useInsetData} from "../../Hooks/useInsertData"


export const createUser = (data) => async (dispatch) => {
    try {
        const response = await useInsetData(`/api/v1/auth/signup`,data);
        dispatch({
            type: CREATE_USER,
            payload: response,
            loading:true
        })

    } catch (e) {
        dispatch({
            type: CREATE_USER,
            payload: e.response,
            
        })
    }
}


export const loginUser = (data) => async (dispatch) => {
    try {
        const response = await useInsetData(`/api/v1/auth/login`,data);
        dispatch({
            type: LOGIN_USER,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e)
        dispatch({
            type: LOGIN_USER,
            payload: e.response,
            
        })
    }
}

export const GetloggedUser = (data) => async (dispatch) => {
    try {
        const response = await UseGetDataToken(`/api/v1/user/getme`);
        dispatch({
            type: GET_CURRENT_USER,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e)
        dispatch({
            type: GET_CURRENT_USER,
            payload: e.response,
            
        })
    }
}
export const forgetPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsetData(`/api/v1/auth/forgetPassword`,data);
        dispatch({
            type: FORGET_PASSWORD,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e)
        dispatch({
            type: FORGET_PASSWORD,
            payload: e.response,
            
        })
    }
}

export const verifyPassword = (data) => async (dispatch) => {
    try {
        const response = await useInsetData(`/api/v1/auth/verifyResetCode`,data);
        dispatch({
            type: VERIFY_PASSWORD,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e)
        dispatch({
            type: VERIFY_PASSWORD,
            payload: e.response,
            
        })
    }
}

export const resetpassword = (data) => async (dispatch) => {
    try {
        const response = await useInsetData(`/api/v1/auth/resetPassword`,data);
        dispatch({
            type: RESET_PASSWORD,
            payload: response,
            loading:true
        })

    } catch (e) {
        console.log(e)
        dispatch({
            type: RESET_PASSWORD,
            payload: e.response,
            
        })
    }
}