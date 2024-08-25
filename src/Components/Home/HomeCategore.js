import React from "react";
import {Container,Row} from "react-bootstrap"
import SubTitle from "../uitilty/SubTitle";
import CategoreCard from "../Categore/CategoreCard";
import Spinner from 'react-bootstrap/Spinner';
import HomeCategoryHook from "../../Hoock/category/HomeCategoryHook";



const HomeCategore=()=>{
   const [loading,data,colors]=HomeCategoryHook();

    return(
    
       <Container>
        <SubTitle title="التصنيفات " btntitle="المزيد " pathText="/allcategore"></SubTitle>
        <Row className="my-2 d-flex justify-content-between">
        {
          loading ==false ?(
         data.data ? data.data.map((item,index)=>{
          return   <CategoreCard key={index} id={item._id} title={item.name} img={item.image} background={colors[Math.floor(Math.round() *5)+1]}></CategoreCard>
         
        }) : <h4> لا يوجد تصنيفات </h4>
      ) :    <Spinner animation="border" variant="primary" />


      }
            
        </Row>
       
       </Container>
    
      
    )
}


export default HomeCategore