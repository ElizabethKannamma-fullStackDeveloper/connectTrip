import { useState } from "react";
import { BiEnvelope, BiStreetView, BiUser } from "react-icons/bi";
import { FiCalendar, FiHome } from "react-icons/fi";
import { useEffect } from "react";
import axios from "axios";
const ProfileEdit = () => {
  const [user, setUser] = useState({
    location: "MP, India",
    address: "Bhopal MP",
    email: "vikram@gmail.com",
    dob: new Date("1990-01-01").toISOString().split("T")[0],
    gender: "Male",
  });

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: [e.target.value] });
  };

  useEffect(() => {
    const fetchUserInfo = async () => {
      try {
        const response = await axios.get(
          "https://travel-backend9sep-1.onrender.com/api/v1/tourist/current-tourist",
          {
            withCredentials: true,
          }
        );
        console.log(response.data);
      } catch (error) {
        console.log(error);
      }
    };
  }, []);

  return (
    <div className="mt-8">
      <div className="flex-center-between">
        <h1 className="heading">Hi, I'm Traveler</h1>
        <div className="px-3 rounded-full bg-slate-200 dark:bg-dark-light py-1 cursor-pointer">
          <button> Edit your profile</button>
        </div>
      </div>
      <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
        <div className="flex-1 w-full sm:w-fit">
          <p>Live in</p>
          <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md">
            <FiHome />
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full focus:border-primary"
              value={user.location}
              name="location"
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="flex-1 w-full sm:w-fit">
          <p>Street Address</p>
          <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md">
            <BiStreetView />
            <input
              type="text"
              className="border-none outline-none bg-transparent w-full"
              value={user.address}
              name="address"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
      <div className="mt-4">
        <p>Email Address</p>
        <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md">
          <BiEnvelope />
          <input
            type="text"
            className="border-none outline-none bg-transparent w-full"
            value={user.email}
            name="email"
            onChange={handleChange}
          />
        </div>

        <div className="flex-align-center flex-col sm:flex-row gap-4 mt-4">
          <div className="flex-1 w-full sm:w-fit">
            <p>D.O.B</p>
            <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md">
              <FiCalendar />
              <input
                type="date"
                className="border-none outline-none bg-transparent w-full"
                value={user.dob}
                name="dob"
                onChange={handleChange}
                placeholder={user.dob}
              />
            </div>
          </div>

          <div className="flex-1 w-full sm:w-fit">
            <p>Street Address</p>
            <div className="mt-2 flex-align-center px-3 py-2 gap-2 border dark:border-dark rounded-md ">
              <BiUser />
              <select
                name="gender"
                value={user.gender}
                onChange={handleChange}
                className="border-none outline-none w-full bg-inherit dark:bg-main-dark"
              >
                <option value="Male">Male</option>
                <option value="Female">Female</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileEdit;
