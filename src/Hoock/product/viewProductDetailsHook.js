import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../Redux/Actions/productAction';
import mobile from "../../Images/mobile.png"
import { GetOneBrand } from '../../Redux/Actions/BrandAction';
import { GetOneCategore } from '../../Redux/Actions/CategoryAction';


const ViewProductDetailsHook =  (id) => {
  const [loading,setLoading]=useState(true)
   

  const dispatch=useDispatch();

  useEffect(()=>{
    setLoading(true)
    dispatch(getProductDetails(id))
    setLoading(false)

},[])
  
let productDetails;
  productDetails=  useSelector( (state)=>state.allProduct.oneProduct)


 let item;
 let images=[];

 if(productDetails){
 

   item=productDetails.length!=0?productDetails:null
  
   
  
  
 }

 if(item){
 
  images=item.images.map((i)=> {return { original:i}})
 }
 else{
  images=[{original:`${mobile}`}]
 }

 useEffect(()=>{
      if(item){
        dispatch(GetOneBrand(item.brand))
        console.log(item.categore)
     
      }


 },[item])
const brand =useSelector((state)=>state.AllBrand.onebrand)
// const categore=useSelector((state)=>state.AllCategore.onecategore)



     
  return [item,images,brand]

}

export default ViewProductDetailsHook
