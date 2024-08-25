import  { useEffect, useState } from 'react'
import notify from '../useNotifaction';
import { useDispatch, useSelector } from 'react-redux';
import { createUser } from '../../Redux/Actions/AuthAction';
import {  useNavigate } from 'react-router-dom';

const RegisterHook = () => {
   const [name,setname]=useState("");
   const [email,setemail]=useState("");
   const [phone,setphone]=useState("");
   const [pass,setpass]=useState("");
   const [rpass,setrpass]=useState("");

   const onchangename=(e)=>{
    setname(e.target.value);
   }
   const onchangeEmail=(e)=>{
    setemail(e.target.value);
   }
   const onchangePhone=(e)=>{
    setphone(e.target.value);
   }
   const onchangePass=(e)=>{
    setpass(e.target.value);
   }
   const onchangeRpass=(e)=>{
    setrpass(e.target.value);
   }

   const validation=()=>{
    if(name==""){
       
        return notify("name is required","warn")
    }
    if(email.length<5){
        return notify("in correct email","warn")
    }
    if(pass!=rpass){

        console.log("jjj")
        return notify("confirm the same password","warn")
    }
   }


const dispatch =useDispatch();
const [loading,setLoading]=useState(true)
   const onsubmit= async()=>{
    validation()
    await dispatch(createUser({
        name:name,
        email:email,
        password:pass,
        passwordConfirm:rpass,
        phone:phone
    }))
    setLoading(false)

   }
   const res=useSelector((state)=>state.AuthReducer.createuser)
const nagigate=useNavigate();
   useEffect(()=>{
 
    if(res.length!=0){
       
        if(!res.data.errors){
            localStorage.setItem("token",res.data.data.token)
            localStorage.setItem("user",res.data)
            console.log("jjjj")
            notify("user added","success")
           
            setTimeout(()=>{
                nagigate("/login")
            },2000)
        
        }
        if(res.data.errors){
            notify(res.data.errors[0].msg,"error")
            localStorage.removeItem("token")
            localStorage.removeItem("user")

        }
    }
   },[res])

  return [onchangename,onchangeEmail,onchangePhone,onchangePass,onchangeRpass,onsubmit,name,email,phone,pass,rpass]
}

export default RegisterHook
