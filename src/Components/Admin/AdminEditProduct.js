import React from 'react'
import { useParams } from 'react-router-dom'
import  { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import Multiselect from 'multiselect-react-dropdown';
import img from "../../Images/avatar.png"
import MultiImageInput from 'react-multiple-image-input';
import { useDispatch, useSelector } from 'react-redux';
import {GetAllCategory} from "../../Redux/Actions/CategoryAction"
import {GetAllBrand} from "../../Redux/Actions/BrandAction"
import add from "../../Images/add.png"
import { CompactPicker } from 'react-color'
import {GetSubcategoryFromCategory} from "../../Redux/Actions/subCategoryAction"
import {createProduct} from "../../Redux/Actions/productAction"

import notify from '../../Hoock/useNotifaction';
import { ToastContainer, toast } from 'react-toastify';
import AddProductHook from "../../Hoock/product/addProductHook"
import EditProductHook from '../../Hoock/product/EditProductHook';

const AdminEditProduct = () => {
    const {id}=useParams();

    const [productName,setProductNmae,
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
         ]=EditProductHook(id);
         

  return (
    
    <div>
    <Row className="justify-content-start ">
        <div className="admin-content-text pb-4">   تعديل المنتج -</div>
        <Col sm="8">
            <div className="text-form pb-2"> صور للمنتج</div>
           
            <MultiImageInput    
      images={images}
      setImages={setImages}
      theme={"light"}
      allowCrop={true}
      max={4}
     
    />
          

            <input
               
                type="text"
                className="input-form d-block mt-3 px-3"
                placeholder="اسم المنتج"
                value={productName}
                onChange={onChangeProdName}
                
            />
            <textarea
                className="input-form-area p-2 mt-3"
                rows="4"
                cols="50"
                placeholder="وصف المنتج"
                value={productDescription}
                onChange={onChangeDesName}
             
            />
            <input
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="السعر قبل الخصم"
                value={priceBefore}
                onChange={onChangePriceBefor}
              
            />
            <input
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="السعر بعد الخصم"
                
                onChange={onChangePriceAfter}
               
            />
            <input
                type="number"
                className="input-form d-block mt-3 px-3"
                placeholder="الكمية المتاحة"
                value={qty}
                onChange={onChangeQty}
                
            />
            <select
                name="cat"
                value={catId}
                onChange={onSelectCategory}
                className="select input-form-area mt-3 px-2 ">
                <option value="0">التصنيف الرئيسي</option>
               {
                categore.data ?
                categore.data.map((item,index)=>{
                            return <option key={item._id} value={item._id}>{item.name}</option>
                        })
                
                :null
               }
               
            </select>

            <Multiselect
                className="mt-2 text-end"
                placeholder="التصنيف الفرعي"
               options={options}
                displayValue="name"
                style={{ color: "red" }}
                onSelect={onSelect}
                onRemove={onRemove}
            />
            <select
                name="brand"
              value={brandId}
               onChange={onSelectBrand}
                className="select input-form-area mt-3 px-2 ">
                <option value="0">اختر ماركة</option>
               {
                brand.data ?
                brand.data.map((item,index)=>{

                    return <option value={item._id}> {item.name}</option>
                })
                :null
               }
               
            </select>
            <div className="text-form mt-3 "> الالوان المتاحه للمنتج</div>
            <div className="mt-1 d-flex">
            {
                            colors.length >= 1 ? (
                                colors.map((item, index) => {
                                    return (
                                        <div key={index}
                                           onClick={()=> removeColor(item)}
                                            className="color ms-2 border  mt-1"
                                            style={{ backgroundColor: item }}></div>
                                    )
                                })

                            ) : null
                        }
               

                <img onClick={onChangeColor} src={add} alt="" width="30px" height="35px" style={{ cursor: 'pointer' }} />

              {
                showColor?  <CompactPicker onChange={handelChangeComplete} ></CompactPicker>:null
              }
              

            </div>
        </Col>
    </Row>
    <Row>
        <Col sm="8" className="d-flex justify-content-end ">
            <button onClick={handelSubmit} className="btn-save d-inline mt-2 ">حفظ التعديلات</button>
        </Col>
    </Row>
    <ToastContainer />
   
</div>
  )
}

export default AdminEditProduct
