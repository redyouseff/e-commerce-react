import React from 'react'
import {Container,Row, Spinner}from "react-bootstrap"
import BrandCard from './BrandCard'
import brand1 from "../../Images/brand1.png"
import brand2 from "../../Images/brand2.png"
import brand3 from "../../Images/brand3.png"
import brand4 from "../../Images/brand3.png"
import SubTitle from '../uitilty/SubTitle'
import HomeBrandHook from "../../Hoock/Brand/HomeBrandHook"
import { useSelector } from 'react-redux'


const BrandFeature =  ({title,btntitle}) => {
  const  [loading,data]  =  HomeBrandHook()

  return (
    <Container className='mx-10'>
    {
     data?<div>
       <SubTitle title={title} btntitle={btntitle} pathText="/allbrand"></SubTitle>

<Row className="my-2 d-flex justify-content-between">
   {
    loading==false ? (
      data.data.slice(0,4).map((item,index)=>{
        return  <BrandCard key={index} img={item.image}></BrandCard>
      })
    ):<h4>لا يوجد بيانات </h4>
   }

</Row>
     </div>:<Spinner ></Spinner>
     }
   
    
   </Container>
  )
}

export default BrandFeature
