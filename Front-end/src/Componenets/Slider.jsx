import { useEffect, useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
const responsive = {
  superLargeDesktop: {
    // the naming can be any, depends on you.
    breakpoint: { max: 4000, min: 1040 },
    items: 4
  },
  desktop: {
    breakpoint: { max: 1040, min: 768 },
    items: 3
  },
  tablet: {
    breakpoint: { max: 768, min: 540 },
    items: 2
  },
  mobile: {
    breakpoint: { max: 540, min: 0 },
    items: 1
  }
};

export default function Slider() {
  const[data,setData]=useState([]);
  async function fetchData() {
    const response = await fetch("http://localhost:3000");
    const result = await response.json();
    if (response.ok) {
      setData(result);
    } else {
      console.log("Fetch failed");
    }
  }
  useEffect(() => {
    fetchData(); // Fetch data when the component mounts
  }, []);
  return (
    <div>
      <div class="max-w-screen-xl px-5 py-4 mx-auto sm:px-6 sm:py-12 lg:px-8">
      <Carousel responsive={responsive}>
  { data.map((e)=>(
    <div className="px-5 py-3 ">
    <div class="  w-full bg-white rounded">
        <a class="block relative h-48 rounded overflow-hidden ">
          <img alt="ecommerce" class="object-cover object-center w-full h-full block" src={e.imgurl}/>
        </a>
        <div class="mt-4  px-1 ">
          <h3 class="text-gray-500 text-xs tracking-widest title-font mb-1">{e.cat}</h3>
          <h2 class="text-gray-900 title-font text-lg font-medium">{e.title.slice(0, 30)}...</h2>
          <p class="mt-1">{e.price}</p>
        </div>
      </div>
       </div>
  ))}
</Carousel>
    </div>
    </div>
  )
}
