import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'

const CartCheckout = () => {
  return (
    <div>
     <Row className="my-1 d-flex justify-content-center cart-checkout pt-3">
            <Col xs="12" className="d-flex  flex-column  ">
                <div className="d-flex  ">
                    <input
                        // value={couponName}
                        // onChange={(e) => onChangeCoupon(e.target.value)}
                        className="copon-input d-inline text-center "
                        placeholder="كود الخصم"
                    />
                    <button  className="copon-btn d-inline ">تطبيق</button>
                </div>
                <div className="product-price d-inline w-100 my-3  border">
                    
                        3444 جنيه مصرى
                    
                </div>
                    <Link to="/order/paymethoud" style={{textDecoration:"none"}} className='product-cart-add  d-inline '>
                <button className="product-cart-add  d-inline " > اتمام الشراء</button>
                </Link>

                <button  className="product-cart-add w-100 px-2 my-1"> مسح العربة</button>
            </Col>
           
        </Row>
      
    </div>
  )
}

export default CartCheckout
