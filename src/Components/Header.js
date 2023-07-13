import React,{useState} from "react";
import { Navbar, Container, Nav, } from "react-bootstrap";
import Badge from '@mui/material/Badge';
import {NavLink}  from "react-router-dom";
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
function Header() {

  const [anchorEl, setAnchorEl] = useState()
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };



  return (
    <div>
      <Navbar bg="dark" data-bs-theme="dark" style={{height:"60px"}}>
        <Container>
          <NavLink className={'text-decoration-none text-light mx-3'} to='/' href="#home ">Add To Cart</NavLink>
          <Nav className="me-auto">
            <NavLink to='/' className={'text-decoration-none text-light'} href="#home">Home</NavLink>
          </Nav>
          <Badge badgeContent={1} color="primary">
          <i class="fa-solid fa-cart-shopping text-light " style={{fontSize:25,cursor:'pointer'}}></i>
    </Badge>
        </Container>

      </Navbar>
    </div>
  );
}

export default Header;
