
import  { useEffect, useState } from 'react'

import { useDispatch, useSelector } from 'react-redux';
import {GetAllCategory} from "../../Redux/Actions/CategoryAction"
import {GetAllBrand} from "../../Redux/Actions/BrandAction"


import {GetSubcategoryFromCategory} from "../../Redux/Actions/subCategoryAction"
import {createProduct, updateProduct} from "../../Redux/Actions/productAction"


import notify from '../../Hoock/useNotifaction';
import { getProductDetails } from '../../Redux/Actions/productAction';
const EditProductHook= (id)=>{  
    const [images, setImages] = useState([]);

    const [productName,setProductNmae]=useState("")
    const [productDescription,setProductDescription]=useState("")
    const [priceBefore,setPriceBefore]=useState("")
    const [priceAfter,setPriceAfter]=useState("")
    const[qty,setQty]=useState("")
    const [catId,setCatId]=useState("")
    const [brandId,setBrandId]=useState("0")
    const [subCatId,setSubCatId]=useState([])
    const [setlectedSubCatId,setSetlectedSubCatId]=useState([])
    const [loading,setLoading]=useState(true)
  


   
    

     //to change name state
     const onChangeProdName = (event) => {
        event.persist();
        setProductNmae(event.target.value)
    }
    //to change name state
    const onChangeDesName = (event) => {
        event.persist();
        setProductDescription(event.target.value)
    }
    //to change name state
    const onChangePriceBefor = (event) => {
        event.persist();
        setPriceBefore(event.target.value)
    }
    //to change name state
    const onChangePriceAfter = (event) => {
        console.log("jj")
        // event.persist();
        // setPriceAfter(event.target.value)
    }  //to change name state
    const onChangeQty = (event) => {
       
        event.persist();
        setQty(event.target.value)
    }

    const onChangeColor = (event) => {
        
        event.persist();
        setShowColor(!showColor)
    }
  
  //show color 
  const [showColor,setShowColor]=useState(false)
  const [colors,setColors]=useState([]);
  
  const handelChangeComplete = (color) => {
    setColors([...colors, color.hex])
    setShowColor(!showColor)
}
  
  
    //dispath all brand and category 
    const dispatch=useDispatch()
      useEffect(()=>{
        const run= async ()=>{
           await dispatch(getProductDetails(id))
            await dispatch(GetAllCategory())
            await dispatch(GetAllBrand())
        }
        run();
  
  
      },[])
  
      const item =useSelector(state=>state.allProduct.oneProduct)
    
      const categore=useSelector(state=> state.AllCategore.category)
      const brand =useSelector(state=>state.AllBrand.brand)

      useEffect(()=>{
        if(item){
            console.log(item)
            setImages(item.images)
            setProductNmae(item.title)
            setProductDescription(item.description)
            setQty(item.quantity)
            setPriceBefore(item.price)
            setBrandId(item.brand)
          setCatId(item.categore)
          setColors(item.colors)
          
          
          
         
         }
      },[item])
    
  
      const onSelectCategory=(e)=>{
          dispatch(GetSubcategoryFromCategory(e.target.value))
          setCatId(e.target.value)
         
  
         
  
      }
  
  
      const onSelectBrand= (e)=>{    
           setBrandId(e.target.value)
           
      }
  
  
//    const onChangeColor=(color)=>{
//       setShowColor(!showColor)
//       setColors([...colors,color.hex])
      
//    }
  
   const removeColor=(color)=>{

      const newColor=  colors.filter((item)=> item !==color)
      setColors(newColor)

   }
   const subcategore=useSelector(state=>state.SubCategory.subcategory)
  
   const [options,setOptions]=useState([])
  
  
  
  useEffect(()=>{
  
   setOptions(subcategore.data)
  
  }, [subcategore])
  
  
  
  
  const onSelect=(selectedList)=>{
    
      setSetlectedSubCatId(selectedList)
  
  }
  const onRemove=(selectedList)=>{
      setSetlectedSubCatId(selectedList)
     
  
  }
  
  
  
  
  function dataURLtoFile(dataurl, filename) {
      if (!dataurl) {
          console.error('Invalid data URL:', dataurl);
          return;
      }
  
      var arr = dataurl.split(','),
          mime = arr[0].match(/:(.*?);/)[1],
          bstr = atob(arr[1]),
          n = bstr.length,
          u8arr = new Uint8Array(n);
  
      while (n--) {
          u8arr[n] = bstr.charCodeAt(n);
      }
  
      return new File([u8arr], filename, { type: mime });
  }
  
  const handelSubmit=async (e)=>{
    e.preventDefault()
    
   
    
    
    
    // const imageCover =dataURLtoFile(images[0], Math.random()+ ".png")
    
    
    
    //  let imageArray = Object.values(images);
    
    
    // let itemImages=imageArray.map((item)=>{
       
        
    //     return dataURLtoFile(item, Math.random()+ ".png")
    // })
 
   
   
   
   
    const formData = new FormData();
formData.append("title", productName);
formData.append("description", productDescription);
formData.append("quantity", qty);
formData.append("price", priceBefore);
formData.append("brand", brandId);
       
    
       // itemImages.map((item)=> data.append("images",item))
    

   
    setLoading(true);
    
    await dispatch(updateProduct(id,formData))
    setLoading(false);
    
    
  }
  
  
  const product =useSelector((state)=>state.allProduct.product)
  
  useEffect(()=>{
  
      
      if(loading==false){
          setProductNmae("")
          setProductDescription("")
          setPriceBefore("")
          setPriceAfter("")
          setQty("")
          setCatId("")
          setBrandId("0")
          
       setTimeout(() => setLoading(true),1500);
       if(product){
         if(product.status===200){
         notify("تم الاضافه ","success")
         }
         else {
          notify("هناك مشكله فى البيانات ","error")
         }
       }
          
      }
  }
  ,[loading])

  return([productName,setProductNmae,
   productDescription,setProductDescription,
    priceBefore,setPriceBefore,
    priceAfter,setPriceAfter,
   qty,setQty,
    catId,setCatId,brandId,setBrandId,
    subCatId,setSubCatId,
 setlectedSubCatId,setSetlectedSubCatId,
    loading,setLoading ,
    images,setImages,
     showColor,setShowColor,
     colors,setColors,
     options,setOptions,
     categore,brand,
      onChangeProdName,
     onChangeDesName,
     onChangePriceBefor 
        ,
       
        
     onChangePriceAfter ,
     ,onChangeQty 

     ,onChangeColor ,onSelectCategory,onSelectBrand,removeColor,onSelect,onRemove,handelChangeComplete,handelSubmit
    ])
    
    
    
    
    }


    export default EditProductHook