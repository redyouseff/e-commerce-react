import React from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import Pagination from '../../Components/uitilty/Pagination'
import AdminOrderDetails from '../../Components/Admin/AdminOrderDetails'
const AdminOrderDetailsPage = () => {
  return (
<Container style={{minHeight:"500px"}}>
    <Row className='py-3'>
        <Col sm="3" md="2" xs="2">
           <AdminSideBar></AdminSideBar>
        </Col>

        <Col sm="9" md="10" xs="10">
          
            <AdminOrderDetails></AdminOrderDetails>
        </Col>
    </Row>
  </Container>
  )
}

export default AdminOrderDetailsPage
