import React, { useState } from "react";
import logo from "../../assets/logo.png";
import { Container, LogoutBtn } from "../index";
import { useNavigate, Link } from "react-router-dom";
import { useSelector } from "react-redux";

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();

  const navItem = [
    {
      name: "Home",
      slug: "/",
      active: true,
    },
    {
      name: "Login",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "Signin",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "All Posts",
      slug: "/all-Posts",
      active: !authStatus,
    },
    {
      name: "Add Posts",
      slug: "/add-Posts",
      active: !authStatus,
    },
  ];
  return (
     <header className="bg-gray-900 text-gray-50 shadow-md sticky top-0 z-50">
      <Container>
        <nav className="flex items-center justify-between py-4">
           <Link to="/" className="flex items-center space-x-2">
            <img src={logo} alt="Logo" className="w-10 h-10 rounded-full" />
            <span className="text-xl font-bold hover:text-indigo-400 transition">
              Logo
            </span>
          </Link>

          <ul className="hidden md:flex items-center space-x-4">
            {navItem.map((items) =>
              items.active ? (
                <li key={items.name}>
                  <button
                    onClick={() => navigate(items.slug)}
                    className="px-4 py-2 rounded-full bg-indigo-600 hover:bg-indigo-700 transition duration-300"
                  >
                    {items.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
