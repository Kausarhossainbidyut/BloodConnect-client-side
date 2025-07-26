import React, { useEffect, useState, useContext } from 'react';
import { IoIosLogOut } from "react-icons/io";
import { Link, NavLink } from 'react-router-dom';
import Swal from 'sweetalert2';
import { AuthContext } from '../providers/AuthProvider';
import { FaTint } from 'react-icons/fa';

const Header = () => {
  const { user, logOut } = useContext(AuthContext);
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollTop, setLastScrollTop] = useState(0);
  const [scrollTimeout, setScrollTimeout] = useState(null);

  const handleLogOut = () => {
    logOut()
      .then(() => {
        Swal.fire({
          title: "Congratulation!",
          text: "LogOut Successful!",
          icon: "success"
        });
        console.log('logOUt successful');
      })
      .catch(error => {
        console.log(error);
      });
  };

  const navLinks = (
    <>
      <li><NavLink to="/" className={({ isActive }) => isActive ? "text-green-600 underline" : ""}>Home</NavLink></li>

      <li><NavLink to="/blog" className={({ isActive }) => isActive ? "text-green-600 underline" : ""}>Blogs</NavLink></li>
      <li><NavLink to="/donor_Search" className={({ isActive }) => isActive ? "text-green-600 underline" : ""}>Donor Search</NavLink></li>
      <li><NavLink to="/dashboard" className={({ isActive }) => isActive ? "text-green-600 underline" : ""}>Dashboard</NavLink></li>
      <li><NavLink to="/add_blog" className={({ isActive }) => isActive ? "text-green-600 underline" : ""}>Add Bloge</NavLink></li>



    </>
  );

  useEffect(() => {
    const handleScroll = () => {
      const st = window.pageYOffset || document.documentElement.scrollTop;
      if (st > lastScrollTop) {
        setShowNavbar(false); // scroll down
      } else {
        setShowNavbar(true); // scroll up
      }
      setLastScrollTop(st <= 0 ? 0 : st);

      if (scrollTimeout) clearTimeout(scrollTimeout);
      const timeout = setTimeout(() => setShowNavbar(true), 1000);
      setScrollTimeout(timeout);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (scrollTimeout) clearTimeout(scrollTimeout);
    };
  }, [lastScrollTop, scrollTimeout]);

  return (
    <div className={`navbar bg-white shadow-md fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${showNavbar ? 'translate-y-0' : '-translate-y-full'}`}>
      <div className="navbar-start">
        <div className="dropdown">
          <button tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg className="w-6 h-6" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          </button>
          <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52">
            {navLinks}
          </ul>
        </div>
        <Link to="/" className="flex items-center gap-2 ml-3">
          <div className="flex items-center pt-2 gap-2 mb-4 text-red-600 font-bold text-2xl">
            <FaTint className="text-3xl" />
            <span className=" font-bold text-[#E53935]">Blood<span className="text-[#39ab56]">Connect</span></span>
          </div>
          
        </Link>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1 gap-4 text-[#1E88E5] font-medium">
          {navLinks}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="dropdown dropdown-end">
            <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
              <div className="w-10 rounded-full">
                <img title={user?.displayName} alt="user" src={user?.photoURL || "https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.webp"} />
              </div>
            </div>
            <ul tabIndex={0} className="menu dropdown-content bg-green-900 rounded-box font-bold text-white text-[18px]">
              <li><a onClick={handleLogOut}><IoIosLogOut size={20} />Logout</a></li>
            </ul>
          </div>
        ) : (
          <Link to={'/registration'} className="btn md:text-[16px] font-bold p-[20px] md:h-[40px] h-[40px] text-[22px] rounded-2xl bg-[#16a249] hover:bg-[#158f42] text-white">SignUp</Link>
        )}
      </div>
    </div>
  );
};

export default Header;
