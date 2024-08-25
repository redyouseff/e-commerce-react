import React from 'react'
import  { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { getAllProduct } from '../../Redux/Actions/productAction';
import { all } from 'axios';
import { getAllProductSearch } from '../../Redux/Actions/productAction';
import { getAllProductPage } from '../../Redux/Actions/productAction';

const ViewSearchProductHook = () => {

    const dispatch=useDispatch();
    let limit=6


    const getProduct= async()=>{
        sortData();
        let  catQuery="";
        let brandQuery=""
        if(localStorage.getItem("catQuery")!=""){
           catQuery=localStorage.getItem("catQuery")
            
        }
        if(localStorage.getItem("brandQuery")!=""){

            brandQuery=localStorage.getItem("brandQuery");
        }
        let fromQuery=""
        let toQuery="";
       
        if(localStorage.getItem("from")>0){
            fromQuery=`&price[gt]=${localStorage.getItem("from")}`

        }
        if(localStorage.getItem("to")>0){
            toQuery=`&price[lt]=${localStorage.getItem("to")}`

        }
        
      
      await dispatch(getAllProductSearch(`limit=${limit}&sort=${sort}&${catQuery}&${brandQuery}${fromQuery}${toQuery}`))
  
    //  await dispatch(getAllProduct(10))

    }
    
    useEffect(()=>{
        
        getProduct();
        

    },[])
    
    const allProduct=useSelector((state)=>state.allProduct.allProducts)
    
    let item=[];
    let pagination;
    let result;
    if(allProduct.data){
        item =allProduct.data
        pagination=allProduct.pagination
        result=allProduct.result
    }
    else{
        item=[];
        pagination=[]
    }

    const onpress= async(page)=>{
        let  catQuery="";
         let brandQuery=""
        if(localStorage.getItem("catQuery")!=""){
           catQuery=localStorage.getItem("catQuery")
            
        }
        if(localStorage.getItem("brandQuery")!=""){

            brandQuery=localStorage.getItem("brandQuery");
        }
        await dispatch(getAllProductSearch(`limit=${limit}&page=${page}&${catQuery}&${brandQuery}`))

      
      }
      let sort="";

      const sortData=()=>{

        if(localStorage.getItem("sortType")!=null)
             
            sort=localStorage.getItem("sortType")

      }
           
         
  return [item,pagination,result,onpress,getProduct]
}

export default ViewSearchProductHook
