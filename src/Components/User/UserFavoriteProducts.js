import React from 'react'
import { Row } from 'react-bootstrap'
import ProsuctCard from '../products/ProsuctCard'
import img from '../../Images/prod1.png'
const UserFavoriteProducts = () => {
  return (
    <div>
      <div className="admin-content-text pb-4">قائمة المفضلة</div>
            <Row className='justify-content-start'>
               
                <ProsuctCard prod1={img}></ProsuctCard>
                <ProsuctCard prod1={img}></ProsuctCard>
                <ProsuctCard prod1={img}></ProsuctCard>
                <ProsuctCard prod1={img}></ProsuctCard>
                <ProsuctCard prod1={img}></ProsuctCard>

            </Row>
    </div>
  )
}

export default UserFavoriteProducts
