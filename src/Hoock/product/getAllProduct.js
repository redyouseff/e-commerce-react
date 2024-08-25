import React from 'react'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/Actions/productAction';
import { all } from 'axios';


const GetAllProducts = () => {
    const dispatch=useDispatch();
    useEffect(()=>{
        dispatch(getAllProduct)

    },[])

    
    const allProduct=useSelector((state)=>state.allProduct.allProducts)
    let item=[];
    let data;
    if(allProduct){
         data=allProduct.data;
    }
  
   
    if(data){
        item =data.slice(0,4);
    }
    else{
        item=[];
    }
  

  return item
}

export default GetAllProducts
