import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import notify from '../useNotifaction'
import { useNavigate } from 'react-router-dom'
import { verifyPassword } from '../../Redux/Actions/AuthAction'

const VerifyPasswordHook = () => {

    const [code,setcode]=useState("")
    const [loading,setLoading]=useState(true)
    const onchangeCode=(e)=>{
        setcode(e.target.value)
    }
    const dispatch=useDispatch();
    const res=useSelector((state)=>state.AuthReducer.verifypassword)
    const submit= async()=>{
        setLoading(true)
        await dispatch(verifyPassword({
            resetCode:code
        }))
        setLoading(false)
        
    }
    const navigate=useNavigate()
    useEffect(()=>{
        if(res.length!=0){
            if(res.status==200){
                notify("   الكود صحيح  ","success")
                setTimeout(() => {
                    navigate("/user/resetpassword")
                }, 2000);
            }
            else{
               notify("   الكود ليس صحيحا ","error")
            }
        }
    },[loading])
   
  return [code,onchangeCode,submit]

}

export default VerifyPasswordHook
