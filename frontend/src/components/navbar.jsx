import React, { useState } from "react";
import SearchIcon from "@mui/icons-material/Search";
import AccountCircleSharpIcon from "@mui/icons-material/AccountCircleSharp";
import MenuRoundedIcon from "@mui/icons-material/MenuRounded";

import logo from "../logo.png";
import Login from "./login";
import Signup from "./signup";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  let baseURL = "https://vacayvilla.onrender.com";
  const navigate = useNavigate();
  const [openProfile, setOpenProfile] = useState(false);
  const dropDownHandler = () => {
    if (openProfile) {
      setOpenProfile(false);
    } else {
      setOpenProfile(true);
    }
  };
  const LYPHandle = () => {
    navigate("/host");
  };

  // checking in LS if user is login
  let token = localStorage.getItem("token") || null;
  let isLoggedIN = false;
  if (token) {
    isLoggedIN = true;
  }
  const [userLoggedIN, setUserLoggedIN] = useState(isLoggedIN);

  // *************************************************login functionality*********************************************

  const [openLogin, setOpenLogin] = React.useState(false);

  const handleLoginForm = (e) => {
    e.preventDefault();
    let email = e.target.email.value;
    let password = e.target.password.value;
    let obj = { email, password };
    console.log(obj);
    loginUser(obj);
  };

  async function loginUser(obj) {
    let userLogin = await fetch(`${baseURL}/user/login`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (userLogin.status === 200) {
      let token = await userLogin.json();
      localStorage.setItem("token", token.token);
      localStorage.setItem("user_id", token.user_id);
      setUserLoggedIN(true);
      alert("login successful");
    } else {
      alert("wrong credential");
    }
  }

  // *************************************************Logout functionality*********************************************
  const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user_id");
    setUserLoggedIN(false);
  };

  // *************************************************signup functionality**********************************************
  const [openSignup, setOpenSignup] = React.useState(false);

  const handleSignupForm = (e) => {
    e.preventDefault();
    let name = e.target.name.value;
    let DOB = e.target.DOB.value;
    let bio = e.target.bio.value;
    let email = e.target.email.value;
    let password = e.target.password.value;
    let profile_image =
      "https://www.shareicon.net/data/128x128/2016/07/26/802043_man_512x512.png";
    let obj = { name, email, DOB, bio, password, profile_image };
    signupUser(obj);
  };

  async function signupUser(obj) {
    let userLogin = await fetch(`${baseURL}/user/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (userLogin.status === 200) {
      alert("user registered");
    } else {
      alert("emailID already exists/something went wrong");
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        {/* Brand Logo */}
        <div className="brand-logo">
          <img src={logo} alt="Logo" />
        </div>

        {/* Search Input */}
        <div className="search-container">
          <input type="text" placeholder="Search..." />
          <button className="search-button">
            <SearchIcon style={{ marginTop: "5px", color: "white" }} />
          </button>
        </div>
        <div className="ListProperty_profile">
          <p className="LYPButton" onClick={LYPHandle}>
            List your property
          </p>
          <div className="profileImg" onClick={dropDownHandler}>
            <MenuRoundedIcon
              style={{
                fontSize: "25px",
                alignSelf: "center",
                fontWeight: "lighter",
              }}
            />
            <AccountCircleSharpIcon
              style={{
                fontSize: "30px",
                alignSelf: "center",
                fontWeight: "lighter",
              }}
            />
          </div>
        </div>
      </div>
      {/* profile dropdown & user login/signup & user logout*/}
      {openProfile ? (
        userLoggedIN ? (
          <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4">
              <li>Update profile</li>
              <hr />
              <li onClick={LYPHandle}>List your property</li>
              <li onClick={logout}>Logout</li>
            </ul>
          </div>
        ) : (
          <div className="flex flex-col dropDownProfile">
            <ul className="flex flex-col gap-4">
              <li onClick={() => setOpenLogin(true)}>Login</li>
              <li onClick={() => setOpenSignup(true)}>Signup</li>
              <hr />
              <li>List your property</li>
            </ul>
          </div>
        )
      ) : (
        <h1>{}</h1>
      )}
      {/* login popup */}
      <Login
        openLogin={openLogin}
        handleLoginForm={handleLoginForm}
        setOpenLogin={setOpenLogin}
      />
      <Signup
        openSignup={openSignup}
        handleSignupForm={handleSignupForm}
        setOpenSignup={setOpenSignup}
      />
    </nav>
  );
};

export default Navbar;
