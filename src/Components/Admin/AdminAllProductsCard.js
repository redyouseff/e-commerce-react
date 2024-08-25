import React from 'react'
import { Card, Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import prod1 from "../../Images/prod1.png"
import favImg from "../../Images/fav-off.png"
import rate from "../../Images/rate.png"
import { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch } from 'react-redux'
import { deleteProduct } from '../../Redux/Actions/productAction'
const AdminAllProductsCard = ({item}) => {

    const dispatch=useDispatch();
    const [show, setShow] = useState(false);

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const handleDelete= async()=>{
      
    await dispatch(deleteProduct(item._id))
    
    
       setShow(false)
      //  window.location.reload();
    }
    
  return (
<>


      <Modal show={show} onHide={handleClose}>
        <Modal.Header >
          <Modal.Title>حزف المنتج</Modal.Title>
        </Modal.Header>
        <Modal.Body>هل انت متاكد من عمليه الحزف !</Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            تراجع
          </Button>
          <Button variant="primary" onClick={handleDelete}>
            حزف 
          </Button>
        </Modal.Footer>
      </Modal>


    <Col xs="6" sm="6" md="4" lg="3" className="d-flex">

    <Card
        className="my-2"
        style={{
            width: "100%",
            height: "345px",
            borderRadius: "8px",
            border: "none",
            backgroundColor: "#FFFFFF",
            boxShadow: "0 2px 2px 0 rgba(151,151,151,0.5)",
        }}>
            <Row className='d-flex justify-content-center px-2'>
                <Col className='d-flex justify-content-between '>
                <div onClick={handleShow} className='d-inline item-delete-edit'>ازاله </div>

                <Link to={`/admin/editproduct/${item._id}`}style={{textDecoration:"none"}} >
                <div className='d-inline item-delete-edit'>تعديل</div>
            </Link>
                
                </Col>
               

            </Row>
                <Link to={`/products/${item._id}`}style={{textDecoration:"none"}} >
            <Card.Img style={{ height: "228px", width: "100%" }} src={item.imageCover} />
            </Link>
        <div className="d-flex justify-content-end mx-2">
           
        </div>
        <Card.Body>
            <Card.Title>
                <div className="card-title">
                    {item.title}
                </div>
            </Card.Title>
            <Card.Text>
                <div className="d-flex justify-content-between ">
                    <div className="d-flex">
                       
                        <div className="card-rate mx-2"></div>
                    </div>
                    <div className="d-flex">
                        <div className="card-price">  {item.price} </div>
                         <div className="card-currency mx-1">جنيه</div>
                    </div>
                </div>
            </Card.Text>
        </Card.Body>
    </Card>
    
</Col>
</>
  )
}

export default AdminAllProductsCard
