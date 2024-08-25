import React from 'react'
import {Container,Row}from "react-bootstrap"
import SubTitle from '../uitilty/SubTitle'
import ProsuctCard from './ProsuctCard'
import laptop from "../../Images/labtop.png"

const CardProductContainer = ({title,btntitle,pathText,products}) => {
  return (
   <Container className='mx-10'>
    {products? <SubTitle title={title} btntitle={btntitle} pathText={pathText}></SubTitle>:null}

     <Row className="my-2 d-flex justify-content-between">

         
       {products?products.map((item,index)=>
           <ProsuctCard key={index} item={item} ></ProsuctCard>
      ):null}

     </Row>
   
    
   </Container>
  )
}

export default CardProductContainer
