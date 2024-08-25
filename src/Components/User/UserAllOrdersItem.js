import React from 'react'
import { Col, Row } from 'react-bootstrap'
import UserAllOrderCard from './UserAllOrderCard'

const UserAllOrdersItem = () => {
  return (
    <div className='user-order mt-2'>
        <Row>
            <div className='py-2 order-title'>طلب رقم #2222</div>
        </Row>
         <UserAllOrderCard></UserAllOrderCard>
         <UserAllOrderCard></UserAllOrderCard>


<Row className="d-flex justify-content-between">
                <Col xs="6" className="d-flex">
                    <div>
                        <div className="d-inline"> التوصيل</div>
                        <div className="d-inline mx-2 stat">قيد التنفيز </div>
                    </div>
                  

                </Col>
                <Col xs="6" className="d-flex justify-content-end">
                    <div>
                        <div className="barnd-text">1000 جنية</div>
                    </div>
                </Col>
            </Row>
    </div>
   
  )
}

export default UserAllOrdersItem
