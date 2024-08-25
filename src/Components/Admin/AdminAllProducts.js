import React from 'react'
import { Row } from 'react-bootstrap'
import AdminAllProductsCard from './AdminAllProductsCard'

const AdminAllProducts = ({product}) => {
  return (
    <div>
       <div className='admin-content-text'> اداره جميع المنتجات</div>
      <Row className='justify-content-start'>

        {
          product? product.map((item,index)=>{
            return   <AdminAllProductsCard item={item}></AdminAllProductsCard>
          }):<p>لا يوجد منتجات </p>
        }
      
     

      </Row>
    </div>
  )
}

export default AdminAllProducts
