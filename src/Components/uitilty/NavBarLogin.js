import React, { useEffect, useState } from 'react'
import { Navbar, Container, FormControl, Nav, NavDropdown } from 'react-bootstrap'
import logo from '../../Images/logo.png'
import login from '../../Images/login.png'
import cart from '../../Images/cart.png'
import "../../index.css"
import NavbarSearchHook from '../../Hoock/search/NavbarSearchHook'


const NavBarLogin = () => {
    const [onChangeSearch,search]=NavbarSearchHook()
    const [user,setuser] =useState("")
    // const dispatch=useDispatch();

    useEffect(()=>{
        if(localStorage.getItem("user")!=""){
                setuser( JSON.parse( localStorage.getItem("user")))
        }
            // dispatch(GetloggedUser())
    },[])
        // const res=useSelector((state)=>state.AuthReducer.currentuser)
        
    
    const logout=()=>{
        localStorage.removeItem("user");
        localStorage.removeItem("token")
        setuser("")
        window.location.href="/"
    }
    

  return (
   
     <>
 <Navbar className="sticky-top" bg="dark" variant="dark" expand="sm">
            <Container>
                <Navbar.Brand>
                    <a href='/'>
                        <img src={logo} className='logo' />
                    </a>
                </Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <FormControl
                        value={search}
                        onChange={onChangeSearch}
                        
                        type="search"
                        placeholder="ابحث..."
                        className="me-2 w-100 text-center"
                        aria-label="Search"
                    />
                    <Nav className="me-auto d-flex align-items-center">
    {
        user ?  
        <NavDropdown title={user.name} id="basic-nav-dropdown">
            <NavDropdown.Item onClick={logout}>تسجيل خروج</NavDropdown.Item>
            {
                user.role=="admin"?<NavDropdown.Item href="/admin/allproducts"> لوحه التحكم </NavDropdown.Item>
                :<NavDropdown.Item href="/user/profile">الصفحه الشخصيه</NavDropdown.Item>
            }
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
        </NavDropdown>
        : 
        <Nav.Link href='/login' className="nav-text d-flex justify-content-center align-items-center">
            <img src={login} className="login-img" alt="Login" />
            <p style={{ color: "white" }}>دخول</p>
        </Nav.Link>
    }
    
    <Nav.Link href='/cart' className="nav-text position-relative d-flex justify-content-center align-items-center" style={{ color: "white" }}>
        <img src={cart} className="login-img" alt="Cart" />
        
        <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
        </span>
    </Nav.Link>
</Nav>

                </Navbar.Collapse>
            </Container>
        </Navbar>
     </>
  
  )
}

export default NavBarLogin
