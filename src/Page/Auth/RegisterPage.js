import React from 'react'
import {Container,Row,Col,} from "react-bootstrap"
import { Link } from 'react-router-dom'
import RegisterHook from '../../Hoock/auth/registerHook'
import { ToastContainer, toast } from 'react-toastify';
const RegisterPage = () => {

  const [onchangename,onchangeEmail,onchangePhone,onchangePass,onchangeRpass,onsubmit,name,email,phone,pass,rpass]= RegisterHook();

  return (
    <Container style={{ minHeight: "680px" }}>
    <Row className="py-5 d-flex justify-content-center hieght-search">
      <Col sm="12" className="d-flex flex-column ">
        <label className="mx-auto title-login">تسجيل حساب جديد</label>
        <input
      value={name}
        onChange={onchangename}
      
          placeholder="اسم المستخدم..."
          type="text"
          className="user-input mt-3 text-center mx-auto"
        />
        <input
           value={email}
           onChange={onchangeEmail}
          placeholder="الايميل..."
          type="email"
          className="user-input my-3 text-center mx-auto"
        />
        <input
         value={phone}
          onChange={onchangePhone}
          placeholder="الهاتف..."
          type="phone"
          className="user-input  text-center mx-auto"
        />
        <input
         value={pass}
          onChange={onchangePass}
          placeholder="كلمه السر..."
          type="password"
          className="user-input text-center mt-3 mx-auto"
        />
        <input
         value={rpass}
          onChange={onchangeRpass}
          placeholder="تاكيد كلمه السر..."
          type="password"
          className="user-input text-center mt-3 mx-auto"
        />
        <button  onClick={onsubmit} className="btn-login mx-auto mt-4">تسجيل الحساب</button>
        <label className="mx-auto my-4">
          لديك حساب بالفعل؟{" "}
          <Link to="/login" style={{ textDecoration: "none" }}>
            <span style={{ cursor: "pointer" }} className="text-danger">
              اضغط هنا
            </span>
          </Link>
        </label>
      </Col>
    </Row>
    <ToastContainer />

  </Container>
  )
}

export default RegisterPage
