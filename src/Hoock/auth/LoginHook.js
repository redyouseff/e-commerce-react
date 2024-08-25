import  { useEffect, useState } from 'react'
import notify from '../useNotifaction';
import { useDispatch, useSelector } from 'react-redux';

import {  useNavigate } from 'react-router-dom';
import { loginUser } from '../../Redux/Actions/AuthAction';


const LoginHook = () => {
    const [email,setemail]=useState("")
    const [pass,setpass]=useState("");

    const onChangeEmail=(e)=>{
        setemail(e.target.value)
    }
    const onchangePass=(e)=>{
        setpass(e.target.value)
    } 

    const validation=()=>{
        if(email==""){
           
            return notify("email is required","warn")
        }
       
        if(pass!=""){
           
              
            return notify("enter the password","warn")
        }

       }
       const  [loading,setLoading]=useState(false)
       const dispatch=useDispatch();
       const res=useSelector((state)=>state.AuthReducer.loginuser)
       const onsubmit= async()=>{
        setLoading(false)
        setpass(true)
        await dispatch(loginUser({
            email:email,
            password:pass
        }))
        setLoading(true)
        setprss(false)

       }

       const  navigate=useNavigate()
       const [press,setprss]=useState(false)


       useEffect(()=>{
        console.log(res)
        if(res.length!=0){
            if(res.status==200){
                
                localStorage.setItem("token",res.data.token)
                localStorage.setItem("user",JSON.stringify(res.data.data))
                console.log("res")
                notify("logged in ","success")
                
                setTimeout(() => {
                    window.location.href="/"
                }, 2000);

            }

            else{
                localStorage.removeItem("token")
                localStorage.removeItem("user")
               notify("email or password is not corrent ","error")
            }
       
          
        }

       },[loading])


  return [email,pass,loading,onChangeEmail,onchangePass,onsubmit,press]

}

export default LoginHook
