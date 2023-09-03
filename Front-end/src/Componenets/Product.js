import React, { Component } from "react";

export default function Product(props) {
  let { title, des, imgurl, price, deleteprice } = props;

//   return (
//   //   <div className="col-lg-2 col-md-3 col-sm-6 col-6 my-3" style={{ padding: "2px" }}>
//   //     <div className="card">
//   //       <img src={imgurl} className="card-img-top" alt="..." style={{ width: "270px", height: "180px" }} />
//   //       <div className="card-body" style={{ paddingLeft: "3px" }}>
//   //         <h5 className="card-title" style={{ fontSize: "14px" }}>{title}...</h5>
//   //         {/* <p className="card-text">{des}...</p> */}
//   //         <p className="price-tag" style={{ fontSize: "14px", color: "#F85606", fontWeight: "600", fontFamily: "Roboto, Arial, sans-serif", marginBottom: "-10px" }}>
//   //           <ins style={{ textDecoration: "none" }}>Rs.{price}</ins>
//   //         </p>
//   //         <del style={{ fontSize: "11px" }}>Rs.{deleteprice}</del>
//   //       </div>
//   //       <button onClick={()=>send()} className="btn btn-sm btn-danger">Add to cart</button>
//   //     </div>
//   //   </div>
//   // );
// }
}