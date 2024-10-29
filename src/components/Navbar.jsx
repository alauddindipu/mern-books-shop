import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../Provider/AuthProvider";
import { MdDashboard, MdSpaceDashboard } from "react-icons/md";
import { RxDashboard } from "react-icons/rx";
import { IoMdLogIn } from "react-icons/io";
import logoBook from "../assets/logo-book.jpg";

const Navbar = () => {
  const { user } = useContext(AuthContext);
  // console.log(user);

  return (

    <div className="">

      <div className="navbar  border-b">
        <div className="navbar-start">
          <Link to="/" className="">
            <div className="avatar">
              <div className="bg-accecnt mask mask-hexagon w-24">
                <img src={logoBook} alt="BooKTech" />
              </div>
            </div>
          </Link>
        </div>
        {/* <div className="navbar-center flex gap-x-5	"> */}
        <div className="navbar-center	">
          <ul className="menu menu-horizontal bg-base-200 rounded-box w-70">
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
                <Link to="/">Home</Link >
              </a>
            </li>
            <li>
              <a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                </svg>
                <Link to="/totalProducts">Products</Link >
              </a>
            </li>

          </ul>
          {/* <div className="">
            <Link to="/"> <button className="btn btn-outline btn-accent">Home</button></Link >
          </div>
          <div className="">
           
          </div> */}
        </div>
        <div className="navbar-end">
          {user ? (
            <Link to="/dashboard" title="Dashboard">
              <MdDashboard className="w-6 h-6" />
            </Link>
          ) : (
            <Link
              to="/login"
              className="font-semibold flex items-center justify-end gap-2"
            >
              Login <IoMdLogIn />

            </Link>
          )}
        </div>
      </div>
    </div>
  );
};
export default Navbar;
