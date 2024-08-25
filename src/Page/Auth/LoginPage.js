import React from 'react'
import {Container,Row,Col,}from "react-bootstrap"
import { Link } from 'react-router-dom'
import Spinner from 'react-bootstrap/Spinner';
import LoginHook from '../../Hoock/auth/LoginHook';
import { ToastContainer, toast } from 'react-toastify';

const Login = () => {
    const  [email,pass,loading,onChangeEmail,onchangePass,onsubmit,press]=LoginHook()
  return (
    <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login">تسجيل الدخول</label>
                    <input
                        value={email}
                        onChange={onChangeEmail}
                        placeholder="الايميل..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <input
                       value={pass}
                       onChange={onchangePass}
                        placeholder="كلمه السر..."
                        type="password"
                        className="user-input text-center mx-auto"
                    />
                    <button onClick={onsubmit}  className="btn-login mx-auto mt-4">تسجيل الدخول</button>
                    <label className="mx-auto my-4">
                        ليس لديك حساب ؟{" "}
                        <Link to="/register" style={{ textDecoration: 'none' }}>
                            <span style={{ cursor: "pointer" }} className="text-danger">
                                اضغط هنا
                            </span>
                        </Link>
                        
                    </label>
                    <Link to="/user/forgetpassword" style={{ textDecoration: 'none' ,textAlign:'center' }}>
                           هل نسيت كلمه اسر
                        </Link>
                    {
                            press?(
                                <Spinner animation="border" role="status">
                                <span className="visually-hidden">Loading...</span>
                              </Spinner>
                            ):null
                        }

                    <label className="mx-auto my-4">

                        <Link to="/admin/allproducts" style={{ textDecoration: 'none', color: 'red' }}>
                            الدخول كادمين 
                        </Link>
                    </label>
                    <label className="mx-auto my-4">

<Link to="/user/allorders" style={{ textDecoration: 'none', color: 'red' }}>
    الدخول يوزر 
</Link>
</label>

                    


                </Col>



            </Row>
            <ToastContainer />
        </Container>
        
  )
}

export default Login
