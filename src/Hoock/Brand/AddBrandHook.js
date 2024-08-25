
import  { useEffect, useState } from 'react'

import avatar from "../../Images/avatar.png"
import {createBrand} from "../../Redux/Actions/BrandAction.js"
import { useDispatch, useSelector } from 'react-redux'

import 'react-toastify/dist/ReactToastify.css';
import notify from '../../Hoock/useNotifaction.js'

const AddBrandHook =  () => {
    const dispatch=useDispatch();
    const [img,setImg]=useState(avatar)
    const [name,setName]=useState("")
    const [selectedFile,setselectedFile] =useState("")
    const [loading,setLoading]=useState(true)
    const [isPressed,setisPressed]=useState(false)

    const onImageChange=(event)=>{
       
        if(event.target.files && event.target.files[0]){
            setImg(URL.createObjectURL(event.target.files[0]))
            setselectedFile(event.target.files[0])
        
          
        }
       
         

    }
 

const res = useSelector( state=> state.AllBrand.brand)


    const handleSubmit=async(event)=>{
        if(name == "" || selectedFile==null){
            console.log("من فضلك ادخل البيانا")
            notify("من فضلك ادخل البيانات  كامله ","warn")
            return ;
        }
        
        event.preventDefault();
        const formData =new FormData();
        formData.append("name", name)
        formData.append("image",selectedFile)
       
        
        setLoading(true)
        await dispatch(createBrand(formData))
        setLoading(false)

        setisPressed(true)

        
    }
    useEffect(()=>{
        if(loading===false){
            setImg(avatar)
            setName("")
            setselectedFile(null)
            console.log("done it ")
            setLoading(true)
           setTimeout(() => setisPressed(false), 1000); 

        }
        if(res.status==200){
            console.log("category is added")
            notify("تمت عمليه الاضافه ","success")
        }
        else{
            console.log("there is problem on add the category ")
            notify("من فضلك ادخل بيانات ","warn")

        }
    },[loading])

    const onChangeName=(event)=>{
                event.persist();
        setName(event.target.value)
        
    }

    return [img,name,isPressed,selectedFile,loading,onImageChange,handleSubmit,onChangeName]
 
  
}

export default AddBrandHook
