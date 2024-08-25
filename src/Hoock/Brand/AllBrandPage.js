import React, {useEffect } from 'react'
import BaseUrl from '../../Api/BaseUel';

import {GetAllBrand,getAllBrandPage} from '../../Redux/Actions/BrandAction';
import { useDispatch, useSelector } from 'react-redux';
const AllBrandHook = () => {

    const dispatch =useDispatch()
    useEffect(()=>{
     dispatch(GetAllBrand())
    },[])
  
    const data =useSelector(state=>state.AllBrand.brand)
    const loading =useSelector(state=>state.AllBrand.loading)
    let pageCount=0

  if(data.pagination)
     pageCount=data.pagination.numberOfPadge
  
  const page=(data)=>{
   
  dispatch(getAllBrandPage(data.selected +1))
  
    
  }

  return [data,loading,pageCount,page]
}

export default AllBrandHook
