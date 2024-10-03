import axios from "axios";
import { useState } from "react";
import { FaFacebook } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";

const Register = () => {
  const [data, setData] = useState({
    fullName: "",
    email: "",
    password: "",
  });
  const navigation = useNavigate();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setData({
      ...data,
      [name]: value,
    });
  };

  const registerUser = () => {
    const { fullName, email, password } = data;
    console.log(data);
    if (!email && !fullName && !password) alert("Please fill all fields");
    axios
      .post(
        `https://travel-backend-nwtf.onrender.com/api/v1/tourist/register`,
        data
      )
      .then((res) => {
        if (res.data.message === "Tourist registered Successfully") {
          alert("Tourist registered Successfully");
          navigation("/login");
        } else {
          alert(res.data.message);
        }
      });
  };
  return (
    <div className="min-h-screen flex-center-center pt-20">
      <div className="max-w-[450px] w-[95%] mx-auto">
        <h1 className="heading">let's get started</h1>
        <div className="mt-3">
          Already have an account?
          <Link
            to="/login"
            className="text-primary hover:underline !opacity-100"
          >
            {" "}
            Sign in
          </Link>
        </div>
        <div className="mt-4 flex-align-center flex-col sm:flex-row gap-6">
          <a
            href="www.google.com"
            className="btn w-full sm:w-fit border dark:border-dark flex-align-center rounded-md gap-x-2 !opacity-100"
          >
            <img src="/images/google.png" alt="" width={15} />
            <p>Sign up with Google</p>
          </a>
          <a
            href="www.facebook.com"
            className="btn w-full sm:w-fit bg-[#4370d1] flex-align-center gap-x-2 rounded-md text-white !opacity-100"
          >
            <FaFacebook />
            <p>Sign up with Facebook</p>
          </a>
        </div>
        <div className="mt-4">
          <p className="divider text-center">Or</p>
          <form className="mt-4 bg-white border rounded-lg p-4 dark:bg-card-dark dark:border-dark">
            <label htmlFor="fname" className="text-muted">
              Full Name
            </label>
            <div className="my-3">
              <input
                name="fullName"
                type="text"
                className="px-4 py-2 w-full rounded-md outline-none bg-transparent border dark:border-dark"
                placeholder="Enter Your Name"
                onChange={handleChange}
              />
            </div>

            <label htmlFor="email" className="text-muted">
              Email
            </label>
            <div className="my-3">
              <input
                type="text"
                name="email"
                className="px-4 py-2 w-full rounded-md outline-none bg-transparent border dark:border-dark"
                placeholder="Enter Your Email"
                onChange={handleChange}
              />
            </div>
            <label htmlFor="password" className="text-muted">
              Password
            </label>
            <div className="mt-2">
              <input
                type="password"
                name="password"
                className="px-4 py-2 w-full rounded-md outline-none bg-transparent border dark:border-dark"
                placeholder="Enter Your Password"
                onChange={handleChange}
              />
            </div>
          </form>
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
            <button className="btn btn-primary w-full" onClick={registerUser}>
              sign up
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Register;
