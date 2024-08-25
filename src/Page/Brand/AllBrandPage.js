import React from 'react'
import BrandContainer from '../../Components/Brand/BrandContainer'
import {Container} from "react-bootstrap"
import Pagination from '../../Components/uitilty/Pagination'
import AllBrandHook from '../../Hoock/Brand/AllBrandPage'
const AllBrandPage = () => {
  const [data,loading,pageCount,page] =AllBrandHook();
  
  return (
  <Container>
          <BrandContainer data={data} loading={loading}> </BrandContainer>
          <Pagination pageCount={pageCount} page={page}></Pagination>
          </Container>

  
    
  )
}

export default AllBrandPage
