import React from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAddProduct from '../../Components/Admin/AdminAddProduct'

const AdminAddProductPage = () => {
  return (
    <Container style={{minHeight:"500px"}}>
    <Row className='py-3'>
        <Col sm="3" md="2" xs="2">
           <AdminSideBar></AdminSideBar>
        </Col>

        <Col sm="9" md="10" xs="10">
     
    <AdminAddProduct></AdminAddProduct>
        </Col>
    </Row>
  </Container>
  )
}

export default AdminAddProductPage
