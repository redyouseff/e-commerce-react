import React from 'react'
import { Col, Row } from 'react-bootstrap'
import ProductGallery from './ProductGallery'
import ProductText from './ProductText'

const ProductDetails = () => {

  return (
    <div>
        <Row className='pt-3' >
            <Col lg="4">
               <ProductGallery ></ProductGallery>
            </Col>
            
            <Col lg="8">
               <ProductText ></ProductText>
            </Col>


        </Row>
      
    </div>
  )
}

export default ProductDetails
