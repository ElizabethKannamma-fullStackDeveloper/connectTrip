/* eslint-disable jsx-a11y/anchor-has-content */
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });
  const navigation = useNavigate();

  // const fetchTouristData = async () => {
  //   try {
  //     const accessToken = localStorage.getItem("token"); // Retrieve token from localStorage
  
  //     if (!accessToken) {
  //       console.log("Access token not available");
  //       return;
  //     }
  
  //     const response = await axios.get(
  //       "https://travel-backend-nwtf.onrender.com/api/v1/tourist/current-tourist",
  //       {
  //         withCredentials: true, // For cookie-based authentication
  //         headers: {
  //           Authorization: `Bearer ${accessToken}`, // Send JWT token in the Authorization header
  //         },
  //       }
  //     );
  //     // Assuming the data is returned in response.data
  //     // setLoggedInTourist(response.data);
  //     console.log("noob")
  //     console.log(response.data);
  //     console.log("noob")

  //   } catch (err) {
  //     console.log("Error fetching tourist data");
  //     console.error(err);
  //   }
  // };
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };
  const handleLogin = () => {
    const {email, password } = data;
    console.log(data);
    if (!email && !password) alert("Please fill all fields");
    axios
      .post(
        `https://travel-backend-nwtf.onrender.com/api/v1/tourist/login`,
        data
      )
      .then((res) => {
        if (res.data.message === "Logged In Successfully") {
          alert("Logged In Successfully");
          navigation("/home")

        } else {
          alert(res.data.message);
        }
      });
      // fetchTouristData();
  }
  return (
    <div className="min-h-screen flex-center-center pt-20">
      <div className="max-w-[450px] w-[95%] mx-auto">
        <h1 className="heading">let's get started</h1>
        <div className="mt-3">
          Don't have an account?
          <Link
            to="/register"
            className="text-primary hover:underline !opacity-100"
          >
            {" "}
            Sign up
          </Link>
        </div>
        <div className="mt-4 flex-align-center flex-col sm:flex-row gap-6">
          <a
            href="www.google.com"
            className="btn w-full sm:w-fit border dark:border-dark flex-align-center rounded-md gap-x-2 !opacity-100"
          >
            <img src="/images/google.png" alt="" width={15} />
            <p>Sign in with Google</p>
          </a>
          <a
            href="www.facebook.com"
            className="btn w-full sm:w-fit bg-[#4370d1] flex-align-center gap-x-2 rounded-md text-white !opacity-100"
          >
            <FaFacebook />
            <p>Sign in with Facebook</p>
          </a>
        </div>
        <div className="mt-4">
          <p className="divider text-center">Or</p>
          <div className="mt-4 bg-white border rounded-lg p-4 dark:bg-card-dark dark:border-dark">
            <label htmlFor="email" className="text-muted">
              Email
            </label>
            <div className="my-3">
              <input
                type="text"
                className="px-4 py-2 w-full rounded-md outline-none bg-transparent border dark:border-dark"
                placeholder="johndoe@gmail.com"
                name="email"
                onChange={handleChange}
              />
            </div>
            <label htmlFor="email" className="text-muted">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                className="px-4 py-2 w-full rounded-md outline-none bg-transparent border dark:border-dark"
                placeholder="Password"
                name="password"
                onChange={handleChange}
              />
            </div>
          </div>
          <div className="mt-4 flex-center-between">
            <div className="input-check">
              <input type="checkbox" id="remember" />
              <label htmlFor="remember">Remember me</label>
            </div>
            <Link className="text-primary hover:underline">
              Forgot your password?
            </Link>
          </div>
          <div className="mt-5">
            <button className="btn btn-primary w-full" onClick={handleLogin}>sign in</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
