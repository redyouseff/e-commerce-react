import React, { useEffect, useState } from 'react'
import { Col, Row } from 'react-bootstrap'
import {GetAllCategory} from "../../Redux/Actions/CategoryAction"
import { useDispatch, useSelector } from 'react-redux'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import AddSubCategoryHook from '../../Hoock/SubCategory/AddSubCategoryHook';




const AdminAddSubCategory = () => {

  const [onChangeName,loading,name,id,data,subCategory,handelSubmit,habdleChange]=AddSubCategoryHook()
  
    


  return (
    <div>
        <Row className="justify-content-start ">
            <div className="admin-content-text pb-4">اضافه تصنيف فرعي جديد</div>
            <Col sm="8">
                <input
                    onChange={onChangeName}
                    type="text"
                    className="input-form d-block mt-3 px-3"
                    placeholder="اسم التصنيف الفرعي"
                />
                <select name='category' className="select mt-3 px-2 " onChange={habdleChange}>
                
                    <option value="0">اختر تصنيف رئيسي</option>
                    {
                        data.data ?data.data.map((item,index)=>{
                            return <option key={item._id} value={item._id}>{item.name}</option>
                         
                            
                        }):null
                    }
                   
                </select>
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

export default AdminAddSubCategory
