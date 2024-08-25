import React , { useEffect } from 'react'
import { useDispatch, useSelector } from "react-redux";
import {GetAllBrand} from "../../Redux/Actions/BrandAction";

const HomeBrandHook = () => {
    const dispatch =useDispatch()
    useEffect(()=>{
     dispatch(GetAllBrand())
    },[])
 
    const data =useSelector(state=>state.AllBrand.brand)
    const loading =useSelector(state=>state.AllBrand.loading)


  return [loading,data]
  
}

export default HomeBrandHook