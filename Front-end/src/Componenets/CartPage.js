import React, { useState } from 'react';
import Navbar from './Navbar';
import Footer from './Footer'
// import { useSelector } from 'react-redux';
// import { useDispatch } from 'react-redux';
// import {  Remove } from '../Action/action';
import { useEffect } from 'react';
import EmptyCartPage from './CartEmpty';
export default function CartPage(props) {
  // const getdata = useSelector((state) => state.CartReducer.carts);
  const [price,setprice]=useState (0);
  // const data = useSelector((state) => state.CartReducer.carts);
  // const dispatch = useDispatch();


  // const removeItem = (id) => {
  //   dispatch(Remove(id)); // Call your removeItemFromCart action creator with the index of the item to be removed
  // };
  const [products,setProducts]=useState([]);
  async function fetchData() {
    const response = await fetch("http://localhost:3000/CartPage");
    const result = await response.json();
    if (response.ok) {
      setProducts(result);
    } else {
      console.log("Fetch failed");
    }
  }
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);


  const handelRemoveProduct = async (id) => {
    console.log(id , "====  deleteData ====");
    const response = await fetch(`http://localhost:3000/RemoveCartProduct/${id}`,{
      method: 'DELETE',
    });
    console.log(response?.url,"====== response =====");
    if (response.ok) {
      console.log("Delete successful");
      fetchData(); // Fetch data after successful deletion
    } else {
      console.log("Delete failed");
    }
  }
  
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [handelRemoveProduct]);
   const subtotal=()=>{
    let price=0;
    products.map((ele,p)=>{
     price=parseFloat(ele.price) + price
   })
   setprice(price)
  }
  useEffect(()=>{
subtotal();
  },[subtotal])

  const total = (price) => {
    const totalPrice = parseFloat(price) + 100;
    return totalPrice;
  };
if(products.length==0){
  return(
    <EmptyCartPage/>
  )
}
else{
  return (
    <>
 <Navbar/>
    <div className='container '>
      <div className="row">
      <div className="col-md-8">
      <table className="table">
        <thead>
          <tr>
            <th scope="col" style={{ alignSelf: "center" }}>IMG</th>
            <th scope="col" style={{ alignSelf: "center" }}>TITLE</th>
            <th scope="col" style={{ alignSelf: "center" }}>PRICE</th>
            <th scope="col" style={{ alignSelf: "center" }}></th>
          </tr>
        </thead>
        <tbody>
          {products.map((item, index) => (
            <tr key={index}>
              <td>
                <img
                  src={item.imgurl}
                  style={{ maxHeight: "120px"}}
                  alt="Product"
                />
              </td>
              <td >
                {item.title.slice(0, 30)}
              </td>
              <td className='p-2'>
                <div style={{ display: "flex", flexDirection: "column"}}>
                  <span style={{ alignSelf: "center" }}>{item.price}</span>
                </div>
                    <button className='mt-5 '>
                    Quantity
                  </button>
              </td>
              <td style={{ verticalAlign: "middle", textAlign: "center" }}>
                <button onClick={() => handelRemoveProduct(item._id)}>Remove</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      </div>
      <div className='col-md-4'>
      <div className='checkout-section ' style={{ marginLeft: '20px' }}>
      <div className="checkout-total">
        <h5>ORDER SUMMARY</h5>
          <div className="subtotal">
            <span>Sub total:</span>
            <span>PKR:{price}</span>
          </div>
          <div className="subtotal">
            <span>Delivery:</span>
            <span>PKR:100</span>
          </div>

          <div className="total">
            <span>Total:</span>
            <span>todo</span>
          </div>
        </div>

        <button className="checkout-button">Proceed to Checkout</button>
      </div>
    </div>
    </div>
    </div>
    <Footer />
    </>
  );
}
}