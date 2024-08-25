import React, { useEffect, useState } from 'react'
import {createSubCategory} from "../../Redux/Actions/subCategoryAction"
import { useDispatch, useSelector } from 'react-redux';
import {GetAllCategory} from "../../Redux/Actions/CategoryAction"
import notify from '../../Hoock/useNotifaction.js'
const AddSubCategoryHook = () => {

    const dispatch =useDispatch();
    useEffect(()=>{
            dispatch( GetAllCategory(29))
           

    },[])

    const data= useSelector(state=>state.AllCategore.category)
    const [id,setid]=useState("0")
    const [name,setname]=useState("")
    const [loading,setLoading]=useState(true)

    const habdleChange=(e)=>{
        setid(e.target.value)

    }
    const handelSubmit=async(e)=>{
        e.preventDefault();
        if(!navigator.onLine){
            notify("هناك مشكله ف الانترنت","warn")
            return;
        }
        if(name==""){
            notify("من فضلك ادخل الاسم ","warn")
            return;
        }
        if(id=="0"){
            notify("من اخنر التصنيف   ","warn")
            return;

        }
          setLoading(true)

            await dispatch(createSubCategory({
                name:name,
                categore:id
            }))
            setLoading(false)
    }
    const subCategory=useSelector(state=>state.SubCategory.subcategory)
    console.log(subCategory)
    useEffect(()=>{
        if(!navigator.onLine){
            notify("هناك مشكله ف الانترنت","warn")
            return;
        }
        if(loading==false){

            setname("")
            setid("0")  
            if(subCategory.status==200){
                notify("تمت الاضافه بنجاح ","success")
            }
            else{
                notify("هناك مشكله ف عمليه الاضافه ","warn")
            }
            setLoading(true)

        }

        },[loading])

       const onChangeName=(e)=>{
        e.persist();
        setname(e.target.value)
       }



  return [onChangeName,loading,name,id,data,subCategory,handelSubmit,habdleChange]
}

export default AddSubCategoryHook
