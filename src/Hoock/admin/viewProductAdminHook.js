import React from 'react'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/Actions/productAction';
import { all } from 'axios';


const ViewProductAdminHook = () => {
    
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllProduct(10))

    },[])

    
    const allProduct=useSelector((state)=>state.allProduct.allProducts)
    let item;
    let data;
    let pagination
    if(allProduct){
         data=allProduct.data;
        
    }
  
   
    if(data){
        item =data;
        pagination=allProduct.pagination
    }
    else{
        item=[];
        pagination=[];
    }
  

  return [item,pagination]
}

export default ViewProductAdminHook
