import React,{useState}from "react";
import { Card,Button } from "react-bootstrap";
import CardsData from './CardsData'
import './style.css'
function Cards() {

const [data,setData] = useState(CardsData)
console.log(data);
  return (
    
<div className="container mt-3">

<h2 className="text-center">AddToCart Project</h2>
    
    <div className="row d-flex justify-content-center align-items-center">
 {data.map((items,key)=> {
return(
<>

<Card style={{ width: '22rem',border:"none"}} className="mx-2 mt-4 card_style">
      <Card.Img variant="top" src={items.imgdata} style={{height:'16rem'}} className="mt-3" />
      <Card.Body>
        <Card.Title>{items.rname}</Card.Title>
        <Card.Text>
          Price: ₹{items.price}
        </Card.Text>
        <div className="button_div d-flex justify-content-center">

        <Button className="col-lg-12" variant="primary">Add To Cart</Button>
        </div>
      </Card.Body>
    </Card>
</>
)
 })}



    </div>
    </div>
  );
}

export default Cards;
