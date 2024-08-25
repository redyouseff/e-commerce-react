import React , { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {GetAllCategory} from "../../Redux/Actions/CategoryAction";

const HomeCategoryHook = () => {
    const dispatch =useDispatch()
    useEffect(()=>{
     dispatch(GetAllCategory())
    },[])
 
    const data =useSelector(state=>state.AllCategore.category)
    const loading =useSelector(state=>state.AllCategore.loading)
    const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

  return [loading,data,colors]
}

export default HomeCategoryHook
