import React, { useEffect, useState } from "react";
// import { useDispatch } from "react-redux";
// import { Add } from "../Action/action";
import { NavLink } from "react-router-dom";

import Navbar from './Navbar';
import Footer from './Footer'


// catogiries remianing



const ProductContainer = () => {
  const [products,setProducts]=useState([]);
  // const [data, setData] = useState(Detail);
  async function fetchData() {
    const response = await fetch("https://web-app-backend-one.vercel.app/http://localhost:3000/Productmanage");
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

  // const dispatch = useDispatch();

  // const send = (element) => {
  //   dispatch(Add(element));
  // };
  const linkStyles = {
    textDecoration: "none",
  };
  const filterResult = (item) => {
    const result = products.filter((e) => {
      return e.cat === item;
    });
    // setData(result);
  };

  return (
    <>
         <Navbar/>
    <div className="container" >
        <div className="row" >
          <div className="d-flex justify-content-between  m-2">
            <h1>JUST FOR YOU</h1>
            <button
              class="btn btn-primary"
              type="button"
              data-bs-toggle="offcanvas"
              data-bs-target="#offcanvasRight"
              aria-controls="offcanvasRight"
            >
              Filter
            </button>
            <div
              class="offcanvas offcanvas-end"
              tabindex="-1"
              id="offcanvasRight"
              aria-labelledby="offcanvasRightLabel"
            >
              <div class="offcanvas-header">
                <h5 class="offcanvas-title" id="offcanvasRightLabel">
                  Offcanvas right
                </h5>
                <button
                  type="button"
                  class="btn-close"
                  data-bs-dismiss="offcanvas"
                  aria-label="Close"
                ></button>
              </div>
              <div class="offcanvas-body">
                <h3 className="px-2">Filter</h3>
                <h5 className="my-3 px-2 ">catogiries</h5>
                <div className="py-0 my-0">
                  <input
                    className="w-10"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        filterResult("cameraAccosiries");
                      } else {
                        // setData(Detail); // Reset the data to the original state
                      }
                    }}
                  />
                  cameraAccosiries
                </div>
                <div className="py-0 my-0">
                  <input
                    className="w-10"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        filterResult("dailyuse");
                      } else {
                        // setData(Detail); // Reset the data to the original state
                      }
                    }}
                  />
                  dailyuse
                </div>
                <div className="py-0 my-0">
                  <input
                    className="w-10"
                    type="checkbox"
                    onChange={(e) => {
                      if (e.target.checked) {
                        filterResult("dailyuse");
                      } else {
                        // setData(Detail); // Reset the data to the original state
                      }
                    }}
                  />
                  dailyuse
                </div>
                <hr />
              </div>
            </div>
          </div>
          <div className="row m-0" style={{ paddingLeft: "px" }}>
            {products.map((element) => (
              <div
                className="col-lg-4 col-md-4 col-sm-6 m-0"
                style={{
                  maxWidth: "12rem",
                  paddingLeft: "0px",
                  paddingBottom: "12px",
                  paddingRight: "5px",
                }}
              >
                <NavLink to={`/ProductDetail/${element._id}`} style={linkStyles}>
                  <div className="card" style={{ maxHeight: "20rem" }}>
                    <img
                      src={element.imgurl}
                      className="card-img-top"
                      alt="..."
                      style={{ width: "270px", height: "180px" }}
                    />
                    <div
                      className="card-body"
                      style={{ paddingLeft: "3px", paddingBottom: "px" }}
                    >
                      <h5 className="card-title" style={{ fontSize: "14px" }}>
                        {element.title.slice(0, 30)}...
                      </h5>
                      {/* <p className="card-text">{des}...</p> */}
                      <p
                        className="price-tag"
                        style={{
                          fontSize: "14px",
                          color: "#F85606",
                          fontWeight: "600",
                          fontFamily: "Roboto, Arial, sans-serif",
                          marginBottom: "-5px",
                        }}
                      >
                        <ins style={{ textDecoration: "none" }}>
                          Rs.{element.price}
                        </ins>
                      </p>
                      {element.deleteprice ? (
                        <del style={{ fontSize: "11px" }}>
                          Rs:{element.deleteprice}
                        </del>
                      ) : (
                        <div className="p-2"> </div>
                      )}
                    </div>
                    <span className="flex items-center  mb-1">
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-3 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-3 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-3 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="currentColor"
                        stroke="curentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-3 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <svg
                        fill="none"
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        className="w-4 h-3 text-indigo-500"
                        viewBox="0 0 24 24"
                      >
                        <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
                      </svg>
                      <span
                        className="text-gray-600 ml-1 mb-0"
                        style={{ fontSize: "12px" }}
                      >
                        4 Reviews
                      </span>
                    </span>
                    {/* <button onClick={()=>send(element)} className="btn btn-sm btn-danger">Add to cart</button> */}
                  </div>
                </NavLink>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
          </>
  );
};

export default ProductContainer;
