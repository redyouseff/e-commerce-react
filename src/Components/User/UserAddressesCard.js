import React from 'react'
import { Button, Col, Modal, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import deleteicon from "../../Images/delete.png"
const UserAddressesCard = () => {
  return (
    
        <div className="user-address-card my-3 px-2">

            <Modal >
                <Modal.Header >
                    <Modal.Title> <div className='font'>تاكيد الحذف</div></Modal.Title>
                </Modal.Header>
                <Modal.Body><div className='font'>هل انتا متاكد من عملية الحذف العنوان</div></Modal.Body>
                <Modal.Footer>
                    <Button className='font' variant="success" >
                        تراجع
                    </Button>
                    <Button className='font' variant="dark" >
                        حذف
                    </Button>
                </Modal.Footer>
            </Modal>

            <Row className="d-flex justify-content-between  ">
                <Col xs="6">
                    <div className="p-2"> المنزل</div>
                </Col>
                <Col xs="6" className="d-flex d-flex justify-content-end">
                    <div className="d-flex p-2">
                        <Link to={`/user/edit-address/`} style={{ textDecoration: 'none' }}>
                            <div className="d-flex mx-2">
                               
                                <p className="item-delete-edit"> تعديل</p>

                            </div>
                        </Link>
                        <div  className="d-flex ">
                            <img
                                alt=""
                                className="ms-1 mt-2"
                                src={deleteicon}
                                height="17px"
                                width="15px"
                            />
                            <p className="item-delete-edit"> حذف</p>
                        </div>
                    </div>
                </Col>
            </Row>

            <Row>
                <Col xs="12">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "14px",
                        }}>
                        13 elarabe street
                    </div>
                </Col>
            </Row>

            <Row className="mt-3">
                <Col xs="12" className="d-flex">
                    <div
                        style={{
                            color: "#555550",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}>
                        رقم الهاتف:
                    </div>

                    <div
                        style={{
                            color: "#979797",
                            fontFamily: "Almarai",
                            fontSize: "16px",
                        }}
                        className="mx-2">
                       01026964097
                    </div>
                </Col>
            </Row>
        </div>
  )
}

export default UserAddressesCard
