import React , { useState } from 'react'
import { useNavigate } from 'react-router';

export default function AddProduct() {
  const navigate = useNavigate();

    const [product, setProduct] = useState({
        title: "",
        des: "",
        imgurl: "",
        price: "",
        cat:"",
        deleteprice: "",
      });
    let value, name;                  
      const getUserdata = (e) => {
        name = e.target.name;
        value = e.target.value;
        setProduct({ ...product, [name]: value });
        console.log(product);
      };
      const sendData = async (e) => {
        e.preventDefault();
        const { title, des, imgurl, price,deleteprice,cat} = product;
        const options = {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            title: title,
            des: des,
            imgurl: imgurl,
            cat:cat,
            price: price,
            deleteprice:deleteprice
          }),
        };
        if (title && imgurl && price ) {
          const response = await fetch(
            "http://localhost:3000/AddProduct",
            options
          );
          console.log(response);
          if (response) {
            alert("Product has been added ");
            navigate("/Productmanage");

          }
        } else {
          alert("Product not added ");
        }
      };
  return (
    <div>
      <section>
          <div class=" overflow-hidden">
               <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="w-full max-w-xl mx-auto lg:w-96">
                <div>
                    <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">ADD NEW PRODUCT</h2>
                </div>
                <div class="mt-8">
                    <div class="mt-6">
                        <form onSubmit={sendData} method="POST" class="space-y-6">
                        <div>
                                <label for="title" class="block text-sm font-medium text-neutral-600"> Title </label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="title" name="title" type="text"  required="" placeholder="Title" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <label for="des" class="block text-sm font-medium text-neutral-600"> Description </label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="des" name="des" type="text" placeholder="Your Email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div class="form-floating">
                                <select onChange={getUserdata} class="form-select" id="floatingSelect" name="cat" aria-label="Floating label select example">
                                   <option  selected> default</option>
                                   <option value="1">One</option>
                                   <option value="2">Two</option>
                                   <option value="3">Three</option>
                                </select>
                              <label for="floatingSelect"> Chose Catogiries</label>
                            </div>
                            <div class="space-y-1">
                                <label for="Phone" class="block text-sm font-medium text-neutral-600"> Image Url</label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="imgurl" name="imgurl" type="text"  required="" placeholder="Image Url" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block text-sm font-medium text-neutral-600"> OLD Price ( if there is no sale on your product so give the original price ) </label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="price" name="price" type="number"  required="" placeholder="Price" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block text-sm font-medium text-neutral-600">New  Price  </label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="deleteprice" name="deleteprice" type="number"  placeholder="Delete Price" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>
                                    <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                                </div>
                                <button className="underline" onClick={()=> navigate('/Productmanage')}>Back to Dashboard </button>
                            </div>
                            <div>
                                <button type="submit" class="flex items-center justify-center w-full px-10 py-4 text-base font-medium text-center text-white transition duration-500 ease-in-out transform bg-blue-600 rounded-xl hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">Register</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
                   </div>
                   </div>
        </section>
    </div>
  )
}
