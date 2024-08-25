import React, { useEffect } from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import mobile from "../../Images/mobile.png"
import RightButton from './RightButton';
import LeftButton from './LeftButton';
import { useParams } from 'react-router-dom';

import ViewProductDetailsHook from '../../Hoock/product/viewProductDetailsHook';
import { useDispatch, useSelector } from 'react-redux';
import { getProductDetails } from '../../Redux/Actions/productAction';

const ProductGallery = () => {

  const {id}=useParams();  
  const [item,images]=ViewProductDetailsHook(id)
   

 

//   const {id}=useParams();

//   const dispatch=useDispatch();

//   useEffect(()=>{
//     dispatch(getProductDetails(id))

// },[])
  

//  const productDetails=  useSelector((state)=>state.allProduct.oneProduct)

//  let item=[];
//  let images=[];
//  if(productDetails){
//    item=productDetails.data;
//    if(item){
//     images=item.images.map((i)=> {return { original:i}})
//    }
//    else{
//     images=[{original:`${mobile}`}]
//    }
//  }

 

// if(item){
//   console.log(item.title);
// }
// else{
//   console.log("no")
// }

 
//  if(productDetails.data.images){
//   images =productDetails.data.images.map((i)=> {return{ original:i}})
//  }
//  else images=[ {
//   original:`${mobile}`
// },]

    // const images = [
    //     {
    //       original:`${mobile}`,
    //     },
    //     {
    //       original: `${mobile}`,
     
    //     },
    //     {
    //       original: `${mobile}`,
        
    //     },
    //   ];
  return (
    <div>
     <ImageGallery items={images}
                showFullscreenButton={false}
                isRTL={true}
                showPlayButton={false}
                showThumbnails={false}
                renderRightNav={RightButton}
                renderLeftNav={LeftButton}


     ></ImageGallery>
    </div>
  )
}

export default ProductGallery
