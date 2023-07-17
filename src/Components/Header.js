import React, { useState } from "react";
import "./style.css";
import { Navbar, Container, Nav } from "react-bootstrap";
import Badge from "@mui/material/Badge";
import { NavLink } from "react-router-dom";
import Menu from "@mui/material/Menu";
import { useSelector } from "react-redux";
import { Table } from "react-bootstrap";

// import MenuItem from "@mui/material/MenuItem";
function Header() {
 
const [anchorEl, setAnchorEl] = useState();
  
const open = Boolean(anchorEl);
  
const handleClick = (event) => {
setAnchorEl(event.currentTarget);
};

const handleClose = () => {
setAnchorEl(null);
};

const getdata = useSelector((state) => state.CartReducer.carts);
console.log(getdata);

return (
<div>
<Navbar bg="dark" data-bs-theme="dark" style={{ height: "60px" }}>
<Container>
<NavLink className={"text-decoration-none text-light mx-3"} to="/" href="#home " >Add To Cart</NavLink>
          
<Nav className="me-auto">
             
<NavLink to="/" className={"text-decoration-none text-light"} href="#home">Home </NavLink>
          
</Nav>
<Badge badgeContent={getdata.length} color="primary" id="basic-button"
 aria-controls={open ? "basic-menu" : undefined} aria-haspopup="true" 
 aria-expanded={open ? "true" : undefined} onClick={handleClick} >

<i class="fa-solid fa-cart-shopping text-light " style={{ fontSize: 25, cursor: "pointer" }}></i>
          
</Badge>
</Container>
        
<Menu id="basic-menu" anchorEl={anchorEl} open={open} onClose={handleClose} 
MenuListProps={{"aria-labelledby": "basic-button",}}>
          
{getdata.length ? (
            
<div className="card_details" style={{ width: "24rem", padding: 10 }}>
<i className="fas fa-close smallclose"
onClick={handleClose}
style={{
position: "absolute",
top: 2,
right: 20,
fontSize: 23,
cursor: "pointer",
}}
></i>    
<Table>
<thead>
<tr>
<th>Photo</th>
<th>Resturant Name</th>
</tr>
</thead>

<tbody >
{getdata.map((e) => {
return (
<>
<tr>
<td>
<NavLink to={`/cart/${e.id}`}>
<img alt="cart-productImage" src={e.imgdata} style={{ width: "5rem", height: "5rem" }}/>
</NavLink>
</td>
<td>
<p>{e.rname}</p></td> 
<td><p>Price: ₹{e.price}</p></td>
<td>
<p>Quantity :{e.qnty}</p>
<p style={{color:"red",fontSize:20,cursor:"pointer"}}>
<i className="fas fa-trash smalltrash"></i>
</p>
</td>

<td className="mt-5" style={{color:"red",fontSize:20,cursor:"pointer"}}>
<i className="fas fa-trash largetrash"></i>
</td>
</tr>

</>
);
})}
<p className="text-center">Total:₹ 300</p>
</tbody>
</Table>
</div>
) : (
<div
className="card_details d-flex justify-content-center align-items-center"
style={{ width: "24rem", padding: 10, position: "relative" }}
>
  
<i className="fas fa-close smallclose"
onClick={handleClose}
style={{
position: "absolute",
top: 2,
right: 20,
fontSize: 23,
cursor: "pointer",
}}
></i>
<p style={{ fontSize: 22 }}>Your Cart is Empty</p>
<img
alt=""
src="./cart.gif"
className="emptycart_img"
style={{ width: "5rem", padding: 10 }}
/>
</div>
)}
</Menu>
</Navbar>
</div>
);
}

export default Header;