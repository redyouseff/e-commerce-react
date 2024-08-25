import React from 'react'
import { Col, Container,  Row } from 'react-bootstrap'
import AdminSideBar from '../../Components/Admin/AdminSideBar'
import AdminAllProducts from '../../Components/Admin/AdminAllProducts'
import Pagination from '../../Components/uitilty/Pagination'
import ViewProductAdminHook from '../../Hoock/admin/viewProductAdminHook'
import { useDispatch } from 'react-redux'
import { getAllProductPage } from '../../Redux/Actions/productAction'
import { getAllBrandPage } from '../../Redux/Actions/BrandAction'

const AdminAllProductPage = () => {
  const dispatch =useDispatch();
  const [item,pagination]=ViewProductAdminHook();

  if(pagination)
    var pageCount=pagination.numberOfPadge
  else
  pageCount=0;

  const onpress= async(page)=>{
    await dispatch(getAllProductPage(page,10))

  }

  return (
  <Container style={{minHeight:"500px"}}>
    <Row className='py-3'>
        <Col sm="3" md="2" xs="2">
            <AdminSideBar></AdminSideBar>
        </Col>

        <Col sm="9" md="10" xs="10">
           <AdminAllProducts product={item}></AdminAllProducts>
           <Pagination pageCount={pageCount} onpress={onpress}></Pagination>
        </Col>
    </Row>
  </Container>
  )
}

export default AdminAllProductPage
