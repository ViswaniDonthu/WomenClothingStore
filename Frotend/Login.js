import { useState,useEffect } from 'react';
import { useForm } from 'react-hook-form';
//import {useNavigate} from "react-router-dom";


const Login = () => {
 // const navigate = useNavigate();

  // useEffect(()=>{
    const token = localStorage.getItem("Token");

  //   if(token)
  //     {
  //       navigate("/dashboard");
  //     }
  // },[])

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();
  const [passwordVisible, setPasswordVisible] = useState(false);

  const onSubmit = async (data) => {
    alert(JSON.stringify(data))
    try {
      // Sending POST request to the backend with the login data
      const response = await fetch('http://localhost:5000/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data), // Sending the form data as JSON in the request body
      });
  
      // Checking if the response is successful
      if (response.ok) {
        const responseData = await response.json(); // Parse the response as JSON
        console.log('Backend Response:', responseData);
        localStorage.setItem("Token",responseData.token);
        reset();

        // if(responseData.user.role == "admin")
        // {
        //   navigate("/accept-reject")
        // }
        // else if(responseData.user.role == "organizer")
        // {
        //   navigate("/book-event");
        // }
        // else{
        //   navigate("/organization");
        // }
      

        
        // Handle the response (e.g., store the token, redirect user, etc.)
      } else {
        const errorData = await response.json(); // Parse error response
        console.log('Error:', errorData);
        // Handle the error (e.g., display error message to the user)
      }
    } catch (error) {
      console.error('Error in sending login request:', error);
    }
  };
  

  return (
    <>
      <style>
      
  {`
    @import url('https://fonts.googleapis.com/css?family=Exo:400,700');
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    body {
      font-family: 'Exo', sans-serif;
      margin: 0;
      padding: 0;
      background-image: url('LoginPageImage.jpeg'); /* Update this path */
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      
      height: 100vh; /* Ensures full screen coverage */
    }
    .login-container {
      position: relative;
      z-index: 10;
      display: flex;
      justify-content: center;
      align-items: center;
      height: 100vh;
    }
    .password-wrapper {
      position: relative;
      width: 100%;
    }
    .toggle-visibility {
      position: absolute;
      top: 50%;
      right: 1rem;
      transform: translateY(-50%);
      cursor: pointer;
    }
    .login-form {
      background-color: white;
      padding: 2rem;
      border-radius: 8px;
      box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
      display: flex;
      flex-direction: column;
      justify-content: center;
      align-items: center;
      width: 100%;
      max-width: 500px;
      z-index: 50;
    }
  `}
</style>

     
      <div className="login-container">
        <div className="bg-white p-8  bg-opacity-20 rounded-lg shadow-lg w-full max-w-4xl flex flex-col md:flex-row relative z-10 bounce-in-top">
          {/* <div className="md:w-1/2 flex items-center justify-center p-4">
          
          </div> */}
          <div className="md:w-1/2 p-4 flex flex-col justify-center">
            <form onSubmit={handleSubmit(onSubmit)}>
              <fieldset className="h-full flex flex-col justify-center">
                <legend className="text-3xl font-bold mb-6 text-center text-white">
                  Welcome Back!
                </legend>
                <div className="mb-4">
                  <label className="block text-white font-semibold mb-2" htmlFor="email">
                    Email
                  </label>
                  <input
                    className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                    id="email"
                    name="email"
                    placeholder="Enter your email"
                    required
                    type="email"
                    {...register('email', {
                      required: 'Email is required',
                      pattern: {
                        value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                        message: 'Invalid email address',
                      },
                    })}
                  />
                  {errors.email && (
                    <p className="text-red-500 text-sm">
                      {errors.email.message}
                    </p>
                  )}
                </div>
                <div className="mb-6 password-wrapper">
                  <label className="block text-white font-semibold mb-2" htmlFor="password">
                    Password
                  </label>
                  <div className="relative">
                    <input
                      className="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
                      id="password"
                      name="password"
                      placeholder="Enter your password"
                      required
                      type={passwordVisible ? 'text' : 'password'}
                      {...register('password', {
                        required: 'Password is required',
                        minLength: {
                          value: 6,
                          message: 'Password must be at least 6 characters',
                        },
                      })}
                    />
                    <span
                      className="toggle-visibility text-white absolute right-5 text-xl"
                      onClick={() => setPasswordVisible(!passwordVisible)}
                    >
                      {passwordVisible ? '🐵' : '🙈'}
                    </span>
                  </div>
                  {errors.password && (
                    <p className="text-red-500 text-sm">
                      {errors.password.message}
                    </p>
                  )}
                </div>
                <button
                  className="w-full bg-gradient-to-r from-blue-400 to-blue-500 text-white p-3 rounded-lg font-semibold hover:from-blue-500 hover:to-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-md transition-all duration-300"
                  type="submit"
                >
                  Login
                </button>
              </fieldset>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;