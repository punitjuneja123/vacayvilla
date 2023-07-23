import React, { useState, useEffect } from "react";
import logo from "../logo.png";
import "./ListYourProp.css";
import { useNavigate } from "react-router-dom";
import HostedPropertyCard from "../components/host/hostedPropertyCard";
import "./host.css";

function Host() {
  let userID = localStorage.getItem("user_id") || null;
  const [userPropData, setUserPropData] = useState([]);
  const navigate = useNavigate();
  console.log(userID);

  const LYPPageHandler = () => {
    navigate("/host/LYP");
  };

  useState(() => {
    fetch(`http://localhost:5000/property/host/${userID}`, {
      method: "GET",
      headers: {
        Authorization: localStorage.getItem("token"),
      },
    })
      .then((res) => res.json())
      .then((data) => setUserPropData(data))
      .catch((err) => console.log(err));
  }, []);
  return (
    <div>
      <nav className="LYPNAV">
        <div className="brand-logo">
          <img src={logo} alt="Logo" />
        </div>
        <div className="LYPBtnDiv">
          <p>Ready to List?</p>
          <button onClick={LYPPageHandler}>List Property</button>
        </div>
      </nav>
      <div className="container">
        {userID ? (
          userPropData.length === 0 ? (
            <div style={{ textAlign: "center" }}>
              <h1>It's easy to get started on Airbnb</h1>
              <button className="lypBtn" onClick={LYPPageHandler}>
                List Property
              </button>
            </div>
          ) : (
            <div style={{ marginTop: "80px" }}>
              <h1 style={{ textAlign: "center" }}>Your Hosted Property</h1>
              <div className="property_container" style={{ marginTop: "30px" }}>
                {userPropData.map(
                  (item) =>
                    item && <HostedPropertyCard key={item.id} property={item} />
                )}
              </div>
            </div>
          )
        ) : (
          <h1 style={{ textAlign: "center" }}>Login First</h1>
        )}
      </div>
    </div>
  );
}

export default Host;
