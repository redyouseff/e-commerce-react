   import React from 'react'
    import {Container,Row,Col,}from "react-bootstrap"
    
    import { ToastContainer } from 'react-toastify';
    import ResetPasswordHook from '../../Hoock/auth/ResetPasswordHook';
 
const ResetPasswordPage = () => {
    const [pass,rpass,onchangepass,onchangerpass,submit]=ResetPasswordHook()
     
  return (
    <Container style={{ minHeight: "690px" }}>
            <Row className="py-5 d-flex justify-content-center ">
                <Col sm="12" className="d-flex flex-column ">
                    <label className="mx-auto title-login"> ادخل كلمه سر جديده </label>
                    <input
                        value={pass}
                        onChange={onchangepass}
                        placeholder="كلمه السر ..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    <label className="mx-auto title-login"> اعد كتابه كلمه السر   </label>
                    <input
                        value={rpass}
                        onChange={onchangerpass}
                        placeholder="تاكيد كلمه السر ..."
                        type="email"
                        className="user-input my-3 text-center mx-auto"
                    />
                    
                  
                    <button onClick={submit}  className="btn-login mx-auto mt-4"> حفظ </button>
                </Col>



            </Row>
            <ToastContainer />
        </Container>
  )
}

export default ResetPasswordPage
