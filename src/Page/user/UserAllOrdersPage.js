import React from 'react'
import { Col, Container, Row } from 'react-bootstrap'
import UserSideBar from '../../Components/User/UserSideBar'
import Pagination from '../../Components/uitilty/Pagination'
import UserAllOrders from '../../Components/User/UserAllOrders'

const UserAllOrdersPage = () => {
  return (
    <Container style={{minHeight:"500px"}}>
    <Row className='py-3'>
        <Col sm="3" md="2" xs="2">
            <UserSideBar></UserSideBar>
        </Col>

        <Col sm="9" md="10" xs="10">
            <UserAllOrders></UserAllOrders>
          
           <Pagination></Pagination>
        </Col>
    </Row>
  </Container>
  )
}

export default UserAllOrdersPage
