import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import CartItem from '../../Components/Cart/CartItem'
import CartCheckout from '../../Components/Cart/CartCheckout'

const CartPage = () => {
  return (

      <Container style={{minHeight:"670px"}}>
      <Row>
        <div className='cart-title mt-4 '>
            عربه التسوق 
        </div>
        </Row> 
        <Row className='d-flex justify-content-center'>
            <Col md="9" xm="12">
             <CartItem></CartItem>
            </Col>

            <Col md="3" xm="6">
                <CartCheckout>

                </CartCheckout>

            </Col>
            </Row> 
      
      </Container>
   
  )
}

export default CartPage
