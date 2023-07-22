import React, { useEffect ,useState} from "react";
import Table from "react-bootstrap/Table";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
function CardDetails() {

const [data,setData] = useState([]);
const {id} = useParams();

// console.log(id);
const getdata = useSelector((state) => state.CartReducer.carts);
console.log(getdata);

const compare = (e)=> {
let compareData = getdata.filter((e)=> {
return e.id === id
})
console.log(compareData);
setData(compareData);
}

useEffect(()=> {
compare()
},[id])


return (
    <>
<div className="container mt-2">
<h2 className="text-center">Items Detail Page</h2>

<section className="container mt-3">

<div className="iteamsdetails">

{
data.map((element)=> {
return(


<>
<div className="items_img">
              <img
                alt=""
src={element.imgdata}
              />
            </div>

            <div className="details">
              <Table>
                <tr>
                  <td>
                    <p>
                      <strong>Resturant</strong>:{element.rname}
                    </p>
                    <p>
                      <strong>Price</strong>:₹{element.price}
                    </p>
                    <p>
                      <strong>Dishes</strong>: {element.address}
                    </p>

                    <p>
                      <strong>Total</strong>: ₹300
                    </p>
                  </td>
                  <td>
                    <p><strong>Rating:</strong><span style={{background:"green",padding:"2px 5px",borderRadius:"5px"}}>3.5★</span></p>
                    <p><strong>
Order Review:</strong><span >
    1175 + order placed from here recently</span></p>
                    <p><strong>Remove</strong><span ><i className="fas fa-trash" 
                    style={{color:"red",cursor:"pointer",fontSize:"20"}}
                    ></i></span></p>


                  </td>
                </tr>
              </Table>
            </div>
</>
)
})
}


</div>
</section>
</div>
</>
);
}

export default CardDetails;
