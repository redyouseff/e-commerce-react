import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import {  resetpassword } from '../../Redux/Actions/AuthAction'
import notify from '../useNotifaction'
import { useNavigate } from 'react-router-dom'



const ResetPasswordHook = () => {
    const [pass,setpass]=useState("")
    const [rpass,setrpass]=useState("")
    const [loading,setLoading]=useState(true)
    const onchangepass=(e)=>{
        setpass(e.target.value)
    }
    const onchangerpass=(e)=>{
        setrpass(e.target.value)
    }


    const dispatch=useDispatch();
    const res=useSelector((state)=>state.AuthReducer.resetpassword)
    const submit= async()=>{
        const email=localStorage.getItem("email")
       
        setLoading(true)
        await dispatch(resetpassword({
            email:email,
            password:pass
         
        }))
        setLoading(false)
        
    }
    const navigate=useNavigate()
    useEffect(()=>{
        console.log(res)
        if(res.length!=0){
            if(res.status==200){
                notify("    تم تغير كلمه المرور  ","success")
                setTimeout(() => {
                    navigate("/login")
                }, 2000);
            }
            else{
               notify("     هناك شئ خاطئ  ","error")
            }
        }
    },[loading])
   
  return [pass,rpass,onchangepass,onchangerpass,submit]

}

export default ResetPasswordHook
