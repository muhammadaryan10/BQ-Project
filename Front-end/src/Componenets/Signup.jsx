import React, { useState } from 'react'
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Footer from './Footer'

export default function Signup() {
  const [successAlert, setSuccessAlert] = useState(false);
  const [errorAlert, setErrorAlert] = useState(false);
  
  const hideAlerts = () => {
    setSuccessAlert(false);
    setErrorAlert(false);
  };

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
          const response = await fetch(
            "http://localhost:3000/Signup",
            options
          );
          if (response) {
            console.log(response)
            setUser({
              name: "",
              email: "",
              Phone: "",
              password: "",
            });
            setSuccessAlert(true);
            setTimeout(hideAlerts, 5000);
          }
        } else {
          setErrorAlert(true);
          setTimeout(hideAlerts, 5000);
        }
      };
  return (
    <div>
            <Navbar/>
            {successAlert && (
          <div className="alert alert-success" role="alert">
            Your are Resgistered Succesfully.
          </div>
        )}    {errorAlert && (
          <div className="alert alert-danger" role="alert">
            Error recording your response. 
          </div>
        )}
      <section>
    <div class=" overflow-hidden">
        <div class="flex flex-col justify-center flex-1 px-4 py-12 sm:px-6 lg:flex-none lg:px-20 xl:px-24">
            <div class="w-full max-w-xl mx-auto lg:w-96">
                <div>
                    <h2 class="mt-6 text-3xl font-extrabold text-neutral-600">Sign in.</h2>
                </div>
                <div class="mt-8">
                    <div class="mt-6">
                        <form onSubmit={sendData} method="POST" class="space-y-6">
                        <div>
                                <label for="email" class="block text-sm font-medium text-neutral-600"> Name </label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="name" name="name" type="text" autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <label for="email" class="block text-sm font-medium text-neutral-600"> Email address </label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="email" name="email" type="email" autocomplete="email" required="" placeholder="Your Email" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div class="space-y-1">
                                <label for="Phone" class="block text-sm font-medium text-neutral-600"> Phone </label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="Phone" name="Phone" type="number"  required="" placeholder="Your Phone" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div>
                                <label for="password" class="block text-sm font-medium text-neutral-600"> Password </label>
                                <div class="mt-1">
                                    <input onChange={getUserdata} id="password" name="password" type="password"  required="" placeholder="Password" class="block w-full px-5 py-3 text-base placeholder-gray-300 transition duration-500 ease-in-out transform border border-transparent rounded-lg text-neutral-600 bg-gray-50 focus:outline-none focus:border-transparent focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-300"/>
                                </div>
                            </div>
                            <div class="flex items-center justify-between">
                                <div class="flex items-center">
                                    <input id="remember-me" name="remember-me" type="checkbox" placeholder="Your password" class="w-4 h-4 text-blue-600 border-gray-200 rounded focus:ring-blue-500"/>
                                    <label for="remember-me" class="block ml-2 text-sm text-neutral-600"> Remember me </label>
                                </div>
                                <Link className="underline" to="/Login">Already have an Account </Link>
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
<Footer />
    </div>
  )
}
