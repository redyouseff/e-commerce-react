import React from 'react'
import {Container,Row,} from "react-bootstrap"
import BrandCard from './BrandCard'
import brand1 from "../../Images/brand1.png"
import brand2 from "../../Images/brand2.png"
import brand3 from "../../Images/brand3.png"
import brand4 from "../../Images/brand3.png"
import {Spinner} from 'react-bootstrap'
const BrandContainer = ({data,loading}) => {
  
  return (
    <Container className='mx-10'>
     

     <Row className="my-2 d-flex justify-content-between">

        
        {
          loading ==false ?(
         data.data ? data.data.map((item,index)=>{
          return   <BrandCard key={index} id={item._id} title={item.name} img={item.image} ></BrandCard>
         
        }) : <h4> لا يوجد ماركات  </h4>
      ) :    <Spinner animation="border" variant="primary" />


      }
        
       
     </Row>
   
    
   </Container>
  )
}

export default BrandContainer
