import React from 'react'
import { Col, Container, PageItem, Row } from 'react-bootstrap'
import rate from "../../Images/rate.png"
import RateItem from './RateItem'
import RatePost from './RatePost'
import Pagination from '../../Components/uitilty/Pagination'
const RateContainer = () => {
  return (
    <Container className='rate-container'>
            <Row>
                <Col className="d-flex">
                    <div className="sub-tile d-inline p-1 ">التقيمات</div>
                    <img className="mt-2" src={rate} alt="" height="16px" width="16px" />
                    <div className="cat-rate  d-inline  p-1 pt-2">3.4</div>
                    <div className="rate-count d-inline p-1 pt-2">(160تقيم)</div>
                </Col>
            </Row>

            <RatePost></RatePost>

            <RateItem>

            </RateItem>
         
            <Pagination></Pagination>
        </Container>
  )
}

export default RateContainer
