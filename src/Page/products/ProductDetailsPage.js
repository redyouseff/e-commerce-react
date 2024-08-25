import React from 'react'
import CategoreHeader from '../../Components/Categore/CategoreHeader'
import ProductDetails from '../../Components/products/ProductDetails'
import {  Container } from 'react-bootstrap'
import RateContainer from '../../Components/Rate/RateContainer'
import CardProductContainer from '../../Components/products/CardProductContainer'
import { useParams } from 'react-router-dom'

const ProductDetailsPage = () => {
  const {id}=useParams();
 

  return (
    <div style={{minHeight:"900px"}}>
        <CategoreHeader></CategoreHeader>
        <Container >
           <ProductDetails id={id}></ProductDetails>
        </Container>

        <Container >
            
            <RateContainer>

            </RateContainer>
            <CardProductContainer title="منتجات قد تعجبك "></CardProductContainer>
        </Container>
        
      


      
    </div>
  )
}

export default ProductDetailsPage
