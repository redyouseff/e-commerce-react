import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { GetAllCategory } from '../../Redux/Actions/CategoryAction'
import { GetAllBrand } from '../../Redux/Actions/BrandAction'
import ViewSearchProductHook from '../product/viewSearchProductHook'

const SidebarSearchHook = () => {
const [item,pagination,result,onpress,getProduct]=ViewSearchProductHook();
    const dispatch =useDispatch()
    useEffect(()=>{
        const get=async()=>{
            await dispatch(GetAllCategory())
            await dispatch(GetAllBrand())
        }
     get();
    },[])
  
    const cat =useSelector(state=>state.AllCategore.category)
    const bra =useSelector(state=>state.AllBrand.brand)

    let categore,brand;
    if(cat){
        categore=cat.data
    }
    if(bra){
        brand=bra.data
    }
    const [categoreChecked,setcategoreChecked]=useState([])
    const [brandChecked,setBrandChecked]=useState([]);

    const clickCategore=(e)=>{
        if(e.target.value==0){
            
            setcategoreChecked([])
            return
        }

        if(e.target.checked==true){
            setcategoreChecked([...categoreChecked,e.target.value])
        }
        else if(e.target.checked==false){
            const newArray=categoreChecked.filter((item,index)=>item!=e.target.value)
            setcategoreChecked(newArray);
        }
         
        

      
        
    }

    useEffect(()=>{
        const queyCat=categoreChecked.map((item)=>`categore=${item}`).join("&")
        localStorage.setItem("catQuery",queyCat);
        setTimeout(() => {
 
         getProduct();
        }, 1000);
    },[categoreChecked])

    useEffect(()=>{
        const queyBra=brandChecked.map((item)=>`brand=${item}`).join("&")
        localStorage.setItem("brandQuery",queyBra);
        setTimeout(() => {

         getProduct();
        }, 1000);
    },[brandChecked])

    const clickBrand=(e)=>{
       
        if(e.target.checked==true){
            setBrandChecked([...brandChecked,e.target.value])
        }
        else if(e.target.checked==false){

            const newArray=brandChecked.filter((item,index)=>item!=e.target.value)
            setBrandChecked(newArray);
        }
        if(e.target.value==0){
            setBrandChecked([]);
        }
        
    }

    const [from,setform]=useState(0)
    const [to,setto]=useState(0);

    const priceFrom=(e)=>{

        setform(e.target.value)
        setTimeout(() => {
            getProduct();
        }, 1000);
    }   
    const priceTo=(e)=>{
        setto(e.target.value)
        setTimeout(() => {
            getProduct();
        }, 1000);
       
    } 
    useEffect(()=>{
        localStorage.setItem("from",from)
        localStorage.setItem("to",to)

    },[from,to])
    
  return  [categore,brand,clickCategore,clickBrand,priceFrom,priceTo]
}

export default SidebarSearchHook
