
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux';
import Navbar from './Navbar'
import Footer from './Footer'

export default function ProductDetail() {
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  
  const hideAlerts = () => {
    setSuccessAlert(false);
    setErrorAlert(false);
  };
  const { id }=  useParams();
  const[data,setData]=useState(null);
  async function fetchData() {
    const response = await fetch(`http://localhost:3000/ProductDetail/${id}`);
    console.log("===== Response =====:", response); // Log the response object
    const result = await response.json();
    console.log("Result:", result); // Log the parsed JSON result
    if (response) {
      setData(result);
      console.log(data)
    } else {
      console.log("Fetch failed");
    }
  }
  
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, [id,]);

  const dispatch=useDispatch();

  // const send=(element)=>{
  //   dispatch(Add(element));
  // }
    // const {id}=useParams();
    // const compare = () => {
    //     let comparedata = Detail.filter((e) => {
    //       return parseInt(e._id) == id;
    //     });
    //     setdata(comparedata);
    //   };
    //   useEffect(() => {
    //     compare();
    //   }, [id]);


    const handleAddToCart = async () => {
      if (data?.SingleUser) {
        const { title, price, imgurl, cat } = data.SingleUser;
        const productToAdd = {
          title: title,
          price: price,
          imgurl: imgurl,
          cat: cat,
        };
    
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(productToAdd),
        };
    
        try {
          const response = await fetch("http://localhost:3000/CartProduct", options);
          console.log("Response:", response);
          if (response.status === 201) {
            console.log("Product added successfully");
            setSuccessAlert(true);
            setTimeout(hideAlerts, 5000);
          } else {
            setErrorAlert(true);
            setTimeout(hideAlerts, 5000);
          }
        } catch (error) {
          console.error("Error adding product:", error);
        }
      }
    };
    
  
  return (
    <>
       <Navbar/>
       {successAlert && (
          <div className="alert alert-success" role="alert">
            Product added successfully
          </div>
        )}    {errorAlert && (
          <div className="alert alert-danger" role="alert">
Product not added try again or check yyour network connection         </div>
        )}
    <div>
      <section className="text-gray-600 body-font overflow-hidden">
  <div className="container px-5 py-24 mx-auto">
  {data?.SingleUser && (
        <div className="lg:w-4/5 mx-auto flex flex-wrap">
        <img alt="ecommerce" className="lg:w-1/2 w-full lg:h-auto h-64 object-cover object-center rounded" src={data.SingleUser.imgurl}/>
        <div className="lg:w-1/2 w-full lg:pl-10 lg:py-6 mt-6 lg:mt-0">
          <h1 className="text-gray-900 text-3xl title-font font-medium mb-1">{data.SingleUser.title}</h1>
          <div className="flex mb-4">
            <span className="flex items-center">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4 text-indigo-500" viewBox="0 0 24 24">
                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path>
              </svg>
              <span className="text-gray-600 ml-3">4 Reviews</span>
            </span>
            <span className="flex ml-3 pl-3 py-2 border-l-2 border-gray-200 space-x-2s">
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M18 2h-3a5 5 0 00-5 5v3H7v43v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
                </svg>
              </a>
              <a className="text-gray-500">
                <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                  <path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
                </svg>
              </a>
            </span>
          </div>
          <p className="leading-relaxed">{data.SingleUser.des}</p>
          <div className="flex mt-6 items-center pb-5 border-b-2 border-gray-100 mb-5">
            <div className="flex">
              <span className="mr-3">Color</span>
              <button className="border-2 border-gray-300 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-gray-700 rounded-full w-6 h-6 focus:outline-none"></button>
              <button className="border-2 border-gray-300 ml-1 bg-indigo-500 rounded-full w-6 h-6 focus:outline-none"></button>
            </div>
            <div className="flex ml-6 items-center">
              <span className="mr-3">Size</span>
              <div className="relative">
                <select className="rounded border appearance-none border-gray-300 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-200 focus:border-indigo-500 text-base pl-3 pr-10">
                  <option>SM</option>
                  <option>M</option>
                  <option>L</option>
                  <option>XL</option>
                </select>
                <span className="absolute right-0 top-0 h-full w-10 text-center text-gray-600 pointer-events-none flex items-center justify-center">
                  <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-4 h-4" viewBox="0 0 24 24">
                    <path d="M6 9l6 6 6-6"></path>
                  </svg>
                </span>
              </div>
            </div>
          </div> 
           <div className="flex">
            <span className="title-font font-medium text-2xl text-gray-900">Rs:{data.SingleUser.price}</span>
                <button  onClick={handleAddToCart} className="flex ml-auto text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded">Add to cart</button>
           <button className="rounded-full w-10 h-10 bg-gray-200 p-0 border-0 inline-flex items-center justify-center text-gray-500 ml-4">
            <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"></path>
            </svg>
          </button> 
        </div>
        </div>
      </div>
      )}
  </div>
</section>
    </div>
       <Footer />
       </>
  )
}