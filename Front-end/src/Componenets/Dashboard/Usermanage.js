import React, { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from 'react-router';

export default function Usermanage() {
  const navigate=useNavigate();

  const [showPopup, setShowPopup] = useState(false);
  const [userData,setuserData]=useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    Phone: "",
    password: "",
  });


  let value, name;
  const getUserdata = (e) => {
    name = e.target.name;
    value = e.target.value;
    setUser({ ...user, [name]: value });
    console.log(user);
  };

  const sendData = async (e) => {
    e.preventDefault();
    const { name, email, Phone, password } = user;
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        Phone: Phone,
        password: password,
      }),
    };
    if (name && email && password) {
      console.log("Options:", options);
      const response = await fetch(
        "http://localhost:3000/Signup",
        options
      );
      console.log("Response:", response);
      if (response) {
        setUser({
          name: "",
          email: "",
          Phone: "",
          password: "",
        });
        alert("your response has been recorded");
        setShowPopup(false);
      }
    } else {
      alert("Response not recorded");
    }
  };

  async function fetchData() {
    const response = await fetch("http://localhost:3000/Usermanage");
    const result = await response.json();
    if (response.ok) {
      setuserData(result);
    } else {
      console.log("Fetch failed");
    }
  }

  const deleteData = async (id) => {
    console.log(id , "====  deleteData ====");
    const response = await fetch(`http://localhost:3000/${id}`,{
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
  }, [sendData,deleteData
  ]);


  const handleOpenPopup = () => {
    setShowPopup(true);
  };

  const handleClosePopup = () => {
    setShowPopup(false);
  };

return (
  <>
  {showPopup && (
    <div className="overlay">
      <div className="popup">
        <h2>Adding New User </h2>
        <form onSubmit={sendData}>
          {/* Your form elements go here */}
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required onChange={getUserdata} />
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required onChange={getUserdata}/>
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" required onChange={getUserdata}/>
          <label htmlFor="Phone">Phone</label>
          <input type="number" id="Phone" name="Phone" pattern="[0-9]*" required onChange={getUserdata}/>
          <button type="submit">Submit</button>
        </form>
        <button onClick={handleClosePopup}>Close</button>
      </div>
    </div>
  )}

  <div className='container py-2'>
    <div className='head' style={{display: "flex", justifyContent: "space-between",  alignItems: "center"}}>
      <button className="btn btn-lg btn-danger" onClick={()=>navigate('/Dashboard')}>Back to Dashboard</button>
      <h1 className='title'>Users</h1>
      <button className='btn btn-lg btn-danger' onClick={handleOpenPopup}>Add New User</button>
    </div>
  <div className="row py-2">
  <div className="col-md-12">
  <table className="table table-bordered">
    <thead>
      <tr>
        <th scope="col" style={{ alignSelf: "center" }}>Name</th>
        <th scope="col" style={{ alignSelf: "center" }}>E-Mail</th>
        <th scope="col" style={{ alignSelf: "center" }}>Phone</th>
        <th scope="col" style={{ alignSelf: "center" }}>Actions</th>
      </tr>
    </thead>
    <tbody >
  {userData.map((element) => (
  <tr key={element.id}>
  <td>
  {element.name}
  </td>
  <td >
    {element.email}
  </td>
  <td >
    {element.Phone}
  </td>
  <td >
    <button className="d-block btn" onClick={() => deleteData(element._id)}>Remove</button>
    <button className="d-block btn">edit</button>
  </td>
</tr>

  ))}
  </tbody>
  </table>
  </div>
  </div>
</div>
</>
)
}