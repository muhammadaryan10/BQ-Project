import React, { useEffect } from 'react'
import { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router';


export default function Productmanage() {
  const navigate = useNavigate();
  const [data, setData] = useState([]);
  async function fetchData() {
    const response = await fetch("http://localhost:3000/Productmanage");
    const result = await response.json();
    if (response.ok) {
      setData(result);
    } else {
      console.log("Fetch failed");
    }
  }
 
  const deleteData = async (id) => {
    console.log(id , "====  deleteData ====");
    const response = await fetch(`http://localhost:3000/Products/${id}`,{
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
  }, [deleteData]);
  return (
    <div className='container py-2'>
      <div className='head' style={{display: "flex", justifyContent: "space-between",  alignItems: "center"}}>
      <button className="btn btn-lg btn-danger" onClick={()=>navigate('/Dashboard')}>Back to Dashboard</button>
        <h1 className='title'>Inventory</h1>
        <button onClick={()=> navigate ("/AddProduct")} className='btn btn-lg btn-danger'><AddIcon/> Add New Product</button>
      </div>
    <div className="row py-2">
    <div className="col-md-12">
    <table className="table table-bordered">
      <thead>
        <tr>
          <th scope="col" style={{ alignSelf: "center" }}>IMG</th>
          <th scope="col" style={{ alignSelf: "center" }}>Name</th>
          <th scope="col" style={{ alignSelf: "center" }}>Catogory</th>
          <th scope="col" style={{ alignSelf: "center" }}>PRICE</th>
          <th scope="col" style={{ alignSelf: "center" }}></th>
        </tr>
      </thead>
      <tbody >
    {data.map((element) => (
    <tr key="0">
    <td>
      <img
        src={element.imgurl}
        style={{ maxHeight: "120px"}}
        alt="Product"
      />
    </td>
    <td >
      {element.title.slice(0, 40)}
    </td>
    <td >
      {element.cat}
    </td>
    <td className='p-2'>
      <div >
        <span  style={{ verticalAlign: "middle", textAlign: "center" }}>{element.price}</span>
      </div>
    </td>
    <td style={{ verticalAlign: "middle", textAlign: "center" }}>
      <button onClick={() => deleteData(element._id)}>Remove</button>
    </td>
  </tr>
  
    ))}
    </tbody>
    </table>
    </div>
    </div>
  </div>
  )
}