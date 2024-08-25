import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { forgetPassword } from '../../Redux/Actions/AuthAction'
import notify from '../useNotifaction'
import { useNavigate } from 'react-router-dom'


const ForgetPasswordHook = () => {
    const [email,setemail]=useState("")
    const [loading,setLoading]=useState(true)
    const onchangeEmail=(e)=>{
        setemail(e.target.value)
    }
    const dispatch=useDispatch();
    const res=useSelector((state)=>state.AuthReducer.forgetpassword)
    const submit= async()=>{
        setLoading(true)
        await dispatch(forgetPassword({
            email:email
        }))
        setLoading(false)
        
    }
    const navigate=useNavigate()
    useEffect(()=>{
        if(res.length!=0){
            if(res.status==200){
                notify("تم ارسال الكود للايمل ","success")
                localStorage.setItem("email",email)
                setTimeout(() => {
                    navigate("/user/verifycode")
                }, 2000);
            }
            else{
               notify(" الايمل ليس صحيح ","error")
            }
        }
    },[loading])
   

  return [onchangeEmail,submit,email]
}

export default ForgetPasswordHook
