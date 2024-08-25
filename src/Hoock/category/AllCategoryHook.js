import React, {useEffect } from 'react'
import BaseUrl from '../../Api/BaseUel';

import {GetAllCategory,getAllCategoryPage} from '../../Redux/Actions/CategoryAction';
import { useDispatch, useSelector } from 'react-redux';
const AllCategoryHook = () => {

    const dispatch =useDispatch()
    useEffect(()=>{
     dispatch(GetAllCategory())
    },[])
  
    const data =useSelector(state=>state.AllCategore.category)
    const loading =useSelector(state=>state.AllCategore.loading)
    let pageCount=0

  if(data.pagination)
     pageCount=data.pagination.numberOfPadge
  
  const page=(data)=>{
   
  dispatch(getAllCategoryPage(data.selected +1))
  
    
  }

  return [data,loading,pageCount,page]
}

export default AllCategoryHook
