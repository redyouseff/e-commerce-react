import React, { useEffect } from 'react'
import {Container,Row} from "react-bootstrap"
import CategoreCard from './CategoreCard'
import Spinner from 'react-bootstrap/Spinner';
import { useDispatch, useSelector } from 'react-redux'
import {GetAllCategory} from "../../Redux/Actions/CategoryAction"
const CategoreContainer = ({data,loading}) => {

//   const dispatch=useDispatch();
//  useEffect(()=>{
//       dispatch(GetAllCategory())
//  },[])

//  const data =useSelector(state=>state.AllCategore.category)
//  const loading =useSelector(state=>state.AllCategore.loading)

 const colors = ["#FFD3E8", "#F4DBA5", "#55CFDF", "#FF6262", "#0034FF", "#FFD3E8"]

  return (
    <Container>
   
   
    <Row className="my-2 d-flex justify-content-between">
      {
          loading ==false ?(
         data.data ? data.data.map((item,index)=>{
          return   <CategoreCard key={index} id={item._id} title={item.name} img={item.image} background={colors[index]}></CategoreCard>
         
        }) : <h4> لا يوجد تصنيفات </h4>
      ) :    <Spinner animation="border" variant="primary" />


      }
      
       
        
    </Row>
   
   </Container>

  )
}

export default CategoreContainer
