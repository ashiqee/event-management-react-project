import { NavLink } from "react-router-dom";

import Bookmark from "react-bookmark";

const NavBar = () => {
  const navLinks = (
    <>
      <li>
        <NavLink to="/">Home</NavLink>
      </li>
      <li>
        <NavLink to="/events">Events</NavLink>
      </li>

      <li>
        <NavLink to="/speakers">Speaker</NavLink>
      </li>
      <li>
        <NavLink to="/about-us">About Us</NavLink>
      </li>
    </>
  );

  return (
    <div>
      <div className=" hero-overlay relative  z-20  text-white ">
        <div className="navbar max-w-screen-xl mx-auto">
          <div className="navbar-start">
            <div className="dropdown">
              <label tabIndex={0} className="btn btn-ghost lg:hidden">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M4 6h16M4 12h8m-8 6h16"
                  />
                </svg>
              </label>
              <ul
                tabIndex={0}
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-400 rounded-box w-52"
              >
                {navLinks}
              </ul>
            </div>
            <a className="normal-case text-rose-400 text-5xl py-4">TecH.e</a>
          </div>
          <div className="navbar-center hidden lg:flex gap-5">
            <ul className="menu menu-horizontal px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            <a className="btn bg-rose-400 border-none text-white">Login</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
