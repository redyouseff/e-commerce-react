import React from 'react'
import { Col, Row } from 'react-bootstrap'
import img from "../../Images/mobile.png"
import { Link } from 'react-router-dom'
const UserAllOrderCard = () => {
  return (
    <Row className="d-flex mb-2">
    <Col xs="3" md="2" className="d-flex justify-content-start">
        <Link to={`/products/:id`} style={{ textDecoration: 'none' }}>
            <img width="93px" height="120px" src={img} alt="" />
        </Link>
    </Col>
    <Col xs="8" md="6">
        <div className="d-inline pt-2 cat-title">
          مع تطبيق فيس بوك وسعه تخزينيه 126
        </div>
        <div className="d-inline pt-2 cat-rate me-2">4.5</div>
        <div className="rate-count d-inline p-1 pt-2">4</div>
        <div className="mt-3 d-flex">
            <div className="cat-text mt-1  d-inline">الكميه</div>
            <input
               
                className="mx-2 "
                type="number"
                style={{ width: "40px", height: "30px" }}
            />
            <div
                className="color  d-inline"
                ></div>
        </div>
    </Col>
</Row>

  )
}

export default UserAllOrderCard
