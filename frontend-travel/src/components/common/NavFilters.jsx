import React, { useState, useMemo } from "react";
import { NavLink, Link } from "react-router-dom";
import { BiBed } from "react-icons/bi";
import { FaPlaneArrival, FaUmbrellaBeach } from "react-icons/fa";

import { MdDownhillSkiing } from "react-icons/md";
const NavFilters = ({ type, url }) => {
  const navItems = [
    { to: "/", icon: <FaUmbrellaBeach />, text: "Holidays", end: true },
    { to: "/activities", icon: <MdDownhillSkiing />, text: "Activities" },
    { to: "/flights", icon: <FaPlaneArrival />, text: "Flights" },
    { to: "/h", icon: <BiBed />, text: "Hotels", end: true },
  ];

  const today = useMemo(() => new Date(), []);
  const tomorrow = useMemo(() => {
    const date = new Date(today);
    date.setDate(today.getDate() + 1);
    return date;
  }, [today]);
  const nextWeek = useMemo(() => {
    const date = new Date(today);
    date.setDate(today.getDate() + 7);
    return date;
  }, [today]);

  const [checkInDate, setCheckInDate] = useState(
    today.toISOString().split("T")[0]
  );
  const [checkOutDate, setCheckOutDate] = useState(
    tomorrow.toISOString().split("T")[0]
  );

  const getOptions = useMemo(() => {
    const typeOptions = {
      hotel: {
        1: {
          heading: "City, Property name or Location",
          placeholder: "Manali",
        },
        2: null,
        3: {
          checkInLabel: "Check in",
          checkOutLabel: "Check out",
          checkInPlaceholder: today.toLocaleDateString(),
          checkOutPlaceholder: tomorrow.toLocaleDateString(),
        },
        4: { roundtrip: false },
        5: { passenger: "guests" },
      },
      flight: {
        1: { heading: "From", placeholder: "Delhi" },
        2: { heading: "To", placeholder: "Mumbai" },
        3: {
          checkInLabel: "Departure",
          checkOutLabel: "Return",
          checkInPlaceholder: today.toLocaleDateString(),
          checkOutPlaceholder: "Select return date",
        },
        4: { roundtrip: true },
        5: { passenger: "passengers" },
      },
      activities: {
        1: { heading: "From City", placeholder: "Delhi" },
        2: { heading: "To City/Country", placeholder: "Manali" },
        3: {
          checkInLabel: "Departure",
          checkOutLabel: "Return",
          checkInPlaceholder: today.toLocaleDateString(),
          checkOutPlaceholder: nextWeek.toLocaleDateString(),
        },
        4: { roundtrip: false },
        5: { passenger: "people" },
      },
    };

    return typeOptions[type] || {};
  }, [type, today, tomorrow, nextWeek]);

  const handleCheckInChange = (e) => {
    const newCheckInDate = e.target.value;
    setCheckInDate(newCheckInDate);
    if (newCheckInDate > checkOutDate) {
      setCheckOutDate(newCheckInDate);
    }
  };

  const generatePassengerOptions = (maxPassengers, label) => {
    return Array.from({ length: maxPassengers }, (_, i) => (
      <option key={i + 1} value={i + 1}>
        {i + 1} {label}
      </option>
    )).concat(
      <option key="over-5" value="over-5">
        Over {maxPassengers} {label}
      </option>
    );
  };

  return (
    <div className="w-full p-4 bg-white dark:bg-card-dark dark:shadow-none max-w-[90%] mx-auto rounded-xl -mt-10 card-shadow">
      <div className="flex-col py-3 border-0 gap-y-8 md:gap-y-0 flex-center-center md:flex-center-between md:flex-row md:border-b dark:border-dark">
        <div className=" w-full md:overflow-auto overflow-y-scroll md:scrollbar-default scrollbar-hide bg-white">
          <div className="flex-align-center md:gap-x-5 gap-x-4">
            {navItems.map((item, index) => (
              <NavLink
                key={index}
                to={item.to}
                end={item.end}
                className={({ isActive }) =>
                  `flex-align-center gap-x-2 relative pb-2 ${
                    isActive ? "text-primary" : ""
                  } before:content-[''] before:absolute before:bottom-0 before:left-0 before:w-full before:h-0.5 before:bg-primary before:transform before:scale-x-0 before:transition-transform before:duration-300 ${
                    isActive ? "before:scale-x-100" : ""
                  }`
                }
              >
                {item.icon}
                <p>{item.text}</p>
              </NavLink>
            ))}
          </div>
        </div>
        <div className="flex-align-center gap-x-2">
          {getOptions[4]?.roundtrip && (
            <select className="bg-transparent border-0 outline-none text-slate-500 dark:text-slate-300 dark:bg-card-dark">
              <option value="round-trip">Round Trip</option>
              <option value="holiday-trip">Holiday Trip</option>
              <option value="vacation">Vacation</option>
              <option value="tour-trip">Tour Trip</option>
            </select>
          )}
          <select className="bg-transparent border-0 outline-none text-slate-500 dark:text-slate-300 dark:bg-card-dark">
            {generatePassengerOptions(5, getOptions[5]?.passenger)}
          </select>
        </div>
      </div>
      <div className="flex-col mt-4 gap-x-4 flex-center-between gap-y-4 md:gap-y-0 md:flex-row">
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">{getOptions[1]?.heading}</h1>
            <input
              type="text"
              className="w-full bg-transparent border-0 outline-none"
              placeholder={getOptions[1]?.placeholder}
            />
          </div>
          {getOptions[2] && (
            <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
              <h1 className="font-bold">{getOptions[2]?.heading}</h1>
              <input
                type="text"
                className="w-full bg-transparent border-0 outline-none"
                placeholder={getOptions[2]?.placeholder}
              />
            </div>
          )}
        </div>
        <div className="flex-col flex-1 w-full flex-align-center gap-x-4 md:w-fit sm:flex-row gap-y-4 sm:gap-y-0">
          <div className="flex-1 w-full p-2 rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark card-bordered">
            <h1 className="font-bold">{getOptions[3]?.checkInLabel}</h1>
            <input
              type="date"
              placeholder={getOptions[3]?.checkInPlaceholder}
              className="w-full bg-transparent border-0 outline-none"
              value={checkInDate}
              onChange={handleCheckInChange}
              min={today.toISOString().split("T")[0]}
            />
          </div>
          <div className="flex-1 w-full p-2 border rounded-lg md:w-fit bg-slate-100 dark:bg-hover-color-dark dark:border-dark-light">
            <h1 className="font-bold">{getOptions[3]?.checkOutLabel}</h1>
            <input
              type="date"
              placeholder={getOptions[3]?.checkOutPlaceholder}
              className="w-full bg-transparent border-0 outline-none"
              value={checkOutDate}
              onChange={(e) => setCheckOutDate(e.target.value)}
              min={checkInDate}
            />
          </div>
        </div>

        <Link
          to={url}
          className="w-full text-center !opacity-100 btn btn-primary md:w-fit"
        >
          Search
        </Link>
      </div>
    </div>
  );
};

export default NavFilters;
