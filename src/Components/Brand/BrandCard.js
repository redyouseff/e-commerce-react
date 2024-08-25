import React from 'react'
import {Col,Card} from 'react-bootstrap'
const BrandCard = ({img}) => {
  return (
    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

    <Card
        className="my-2"
        style={{
            width: "150px",
            height: "150px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}>
        
            <Card.Img style={{ height: "228px", width: "100%" }} src={img} />    
    </Card>
    
</Col>
   
  )
}

export default BrandCard
