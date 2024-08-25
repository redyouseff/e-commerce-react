import React from 'react'
import {Container,Row,Col,}from "react-bootstrap"

import { ToastContainer } from 'react-toastify';

import VerifyPasswordHook from '../../Hoock/auth/VerifyPasswordHook';

const VerifyPasswordPage = () => {
    const [code,onchangeCode,submit]=VerifyPasswordHook();
   
  return (
    <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login"> ادخل الكود المرسل فى الايميل </label>
                    <input
                        value={code}
                        onChange={onchangeCode}
                        placeholder="الكود ..."
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

export default VerifyPasswordPage
