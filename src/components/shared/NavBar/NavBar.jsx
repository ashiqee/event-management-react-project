import { Link, NavLink } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthProvider/AuthProvider";
import logo from "../../../assets/video/logo.gif";
import Loading from "../../Loading/Loading";

const NavBar = () => {
  const { logOut, user, loading } = useContext(AuthContext);
  if (loading) {
    return <> <Loading /> </>
  }
  const handleLogOut = () => {
    logOut()
      .then()
      .catch((error) => console.error(error));
  };

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
      <div className=" bg-opacity-10 bg-slate-200 relative  z-20 font-semibold  text-rose-500 ">
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
                className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow  bg-gradient-to-br from-pink-50 to-orange-100
                 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 rounded-box w-56"
              >
                {navLinks}
              </ul>
            </div>
            <Link className="flex items-center" to="/">
              <a className="normal-case text-rose-400 text-5xl py-4">TecH.e</a>
              <img className="w-12 h-12 rounded-full" src={logo} alt="" />
            </Link>
          </div>
          <div className="navbar-center  hidden lg:flex gap-5">
            <ul className="menu menu-horizontal text-xl  px-1">{navLinks}</ul>
          </div>
          <div className="navbar-end">
            {user ? (
              <>
                <div className="dropdown dropdown-end">
                  <label
                    tabIndex={-1}
                    className="btn btn-ghost btn-circle avatar"
                  >
                    <div className="w-10 rounded-full">
                      <img src={user.photoURL} />
                    </div>
                  </label>
                  <ul
                    tabIndex={0}
                    className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-pink-100 rounded-box w-60"
                  >
                    <li>
                      <a className="justify-between mb-5 items-center">
                        <p className="text-2xl font-bold text-rose-600">
                          {user.displayName}
                        </p>
                        <span className="badge">New</span>
                      </a>
                    </li>
                    <li>
                      <a className="justify-between mb-5 items-center">
                        <Link to={`/paymentsReport`}><button className="btn btn-xs mb-2">Payment Reports</button></Link>

                      </a>
                    </li>

                    <Link
                      onClick={handleLogOut}
                      className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                    >
                      Log Out
                    </Link>
                  </ul>
                </div>
              </>
            ) : (
              <>
                <Link
                  to="/login"
                  className="text-white bg-gradient-to-br from-pink-500 to-orange-400 hover:bg-gradient-to-bl focus:ring-4 focus:outline-none focus:ring-pink-200 dark:focus:ring-pink-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center mr-2 mb-2"
                >
                  Login
                </Link>
              </>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default NavBar;
