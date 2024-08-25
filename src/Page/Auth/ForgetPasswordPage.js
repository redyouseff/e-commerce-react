import React from 'react'
import {Container,Row,Col,}from "react-bootstrap"

import { ToastContainer } from 'react-toastify';
import ForgetPasswordHook from '../../Hoock/auth/ForgetPasswordHook';
const ForgetPasswordPage = () => {
    const  [onchangeEmail,submit,email] =ForgetPasswordHook()
  return (
    <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login"> ادخل الايميل  </label>
                    <input
                        value={email}
                        onChange={onchangeEmail}
                        placeholder="الايميل..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                  
                    <button onClick={submit}  className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                </Col>



            </Row>
            <ToastContainer />
        </Container>
        
  )
}

export default ForgetPasswordPage
