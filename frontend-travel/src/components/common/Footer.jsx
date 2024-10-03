/* eslint-disable jsx-a11y/anchor-is-valid */

import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";
import { FiFacebook, FiMap, FiMapPin } from "react-icons/fi";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { uiStore } from "../../features/uiSlice";

const Footer = () => {
  const { mode } = useSelector(uiStore);
  return (
    <div className="px-[2%] md:px-[6%] mt-20 z-0">
      <footer>
        <div className="flex flex-wrap gap-2 ">
          <div className="flex-1 basis-[10rem] ">
            <Link to="/" className="flex-shrink-0 !opacity-100 hidden md:block">
              <img
                src={mode === "dark" ? "/logo-dark.png" : "/logo-light.png"}
                alt="logo"
                className=" w-40 "
              />
            </Link>

            <div className="mt-3">
              <p className="text-sm">
                Connect Trip stands out with hyper-personalized recommendations,
                seamless itinerary integration, and exclusive local insights. It
                emphasizes sustainability, offers dynamic pricing transparency,
                and provides enhanced 24/7 customer support.
              </p>
            </div>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Services</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#">Holidays Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/activities">Activities Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/">Hotel Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="/flights"> Flight Booking</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Traveling</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Support</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Account</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Legal</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Contact</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Terms & Conditions</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Privacy Policy</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem]">
            <h2 className="text-xl font-semibold">Business</h2>
            <ul>
              <li className="my-3 text-muted">
                <a href="#"> Success</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">About Connect Trip</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Blog</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Information</a>
              </li>
              <li className="my-3 text-muted">
                <a href="#">Travel Guide</a>
              </li>
            </ul>
          </div>

          <div className="flex-1 basis-[10rem] text-center md:text-left">
            <div className=" flex items-center gap-x-1">
              <FiMapPin />
              <h2 className="text-xl font-semibold">Our Office Address</h2>
            </div>

            <p className="text-muted text-sm ">
              Incubation seat No-30A; Satna Incubation Center, Behind Dhawari
              collector's office, Satna, Madhya Pradesh-485001
            </p>

            {/* <div className="flex-align-center justify-center my-3">
              <input
                type="text"
                className="px-4 py-[0.35rem] card-bordered dark:shadow-none outline-none rounded-lg dark:bg-card-dark"
                placeholder="Email Address.."
              />
              <button className="btn btn-primary -ml-2">subscribe</button>
            </div> */}
            <div className="flex-center-center gap-5 my-6">
              <a href="#">
                <FiFacebook />
              </a>
              <a href="#">
                <FaTwitter />
              </a>
              <a href="#">
                <FaInstagram />
              </a>
              <a href="#">
                <FaLinkedin />
              </a>
            </div>
          </div>
        </div>
      </footer>
      <div className="text-center  text-muted mt-3 py-2 border-t dark:border-dark">
        <p>
          Created By{" "}
          <span className="text-primary">Connect Trip Tech Team</span> | All
          Rights Reserved. &copy;{new Date().getFullYear()}
        </p>
      </div>
    </div>
  );
};

export default Footer;
