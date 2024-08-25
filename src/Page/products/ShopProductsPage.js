import React from 'react'
import CategoreHeader from '../../Components/Categore/CategoreHeader'
import SearchCountResult from '../../Components/uitilty/SearchCountResult'
import { Col, Container, Row } from 'react-bootstrap'
import SideFilter from '../../Components/uitilty/SideFilter'
import CardProductContainer from '../../Components/products/CardProductContainer'
import ViewSearchProductHook from '../../Hoock/product/viewSearchProductHook'
import Pagination from '../../Components/uitilty/Pagination'
import { useDispatch } from 'react-redux'
import { getAllProductPage } from '../../Redux/Actions/productAction'

const ShopProductsPage = () => {
  const dispatch=useDispatch();

const [item,pagination,result,onpress,getProduct]=ViewSearchProductHook();


if(pagination)
  var pageCount=pagination.numberOfPadge
else
pageCount=0;


  return (
    <div style={{minHeight:'500px'}}>

     <CategoreHeader></CategoreHeader>
     <Container>
     <SearchCountResult getProduct={getProduct} title={`${result} نتيجه بحث`}></SearchCountResult>
     </Container>

     <Container>
        <Row className='d-flex flex-row'>
            <Col sm="2" xm="2" md="1" className='d-flex' >
            <SideFilter></SideFilter>

            </Col>
            <Col sm="10" xm="10" md="11">
            <CardProductContainer products={item}></CardProductContainer>
            </Col>
        
        </Row>
     
     </Container>
     <Pagination pageCount={pageCount} onpress={onpress}></Pagination>
 
    </div>
  )
}

export default ShopProductsPage



