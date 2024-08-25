import React, { useEffect } from 'react'
import { Col, Row, ToastContainer } from 'react-bootstrap'
import ViewProductDetailsHook from '../../Hoock/product/viewProductDetailsHook';
import { useParams } from 'react-router-dom';
const ProductText = () => {
  const {id}=useParams();  
  const [item,images,brand]=ViewProductDetailsHook(id)


  
  
  return (

    <div>
      <Row className="mt-2">
        <div className="cat-text">{item? item.categore.name:null}</div>
      </Row>
      <Row>
        <Col md="8">
          <div className="cat-title d-inline">
         {item? item.title:null}
            <div className="cat-rate d-inline mx-3">reating</div>
          </div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-4">
          <div className="cat-text d-inline">الماركة :</div>
          <div className="barnd-text d-inline mx-1"> {brand.name}</div>
        </Col>
      </Row>
      <Row>
        <Col md="8" className="mt-1 d-flex">
        {
            item ? (item.colors.map((color, index) => {
              return (<div
                key={index}
                className="color ms-2"
                style={{ backgroundColor: color }}></div>)
            })) : null
          }
      
          

        </Col>
        <div className="cat-text d-inline">الكمية المتاحة : {item?item.quantity:null} </div>
      </Row>

      <Row className="mt-4">
        <div className="cat-text">المواصفات : </div>
      </Row>
      <Row className="mt-2">
        <Col md="10">
          <div className="product-description d-inline">
          {item?item.description:null}
          </div>
        </Col>
      </Row>
      <Row className="mt-4">
        <Col md="12">
          {/* {item.priceAfterDiscount >= 1 ? (
            <div className="product-price d-inline px-3 py-3 border">
              <span style={{ textDecorationLine: 'line-through' }}> {item.price}</span> {item.priceAfterDiscount} جنية
            </div>) : <div className="product-price d-inline px-3 py-3 border"><span> {item.price}</span> جنية </div>
          } */}

           <div  className=" px-3 py-3 d-inline mx-3">السعر : {item?item.price:null}</div>
          <div  className="product-cart-add px-3 py-3 d-inline mx-3">اضف للعربة</div>
         
        </Col>
      </Row>
      <ToastContainer />
    </div>
  )
}

export default ProductText
