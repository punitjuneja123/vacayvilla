import React, { useState, useEffect } from "react";
import Navbar from "../components/navbar";
import PropertyCard from "../components/property/PropertyCard";
import "./home.css";

function Home() {
  // let baseURL = "http://localhost:5000";
  const [propertyData, setPropertyData] = useState([]);
  useEffect(() => {
    fetch(`https://vacayvilla.onrender.com/property`)
      .then((res) => res.json())
      .then((data) => setPropertyData(data))
      .catch((err) => console.log(err));
  }, []);
  console.log(propertyData);
  return (
    <div>
      <Navbar />
      <div className="Filter_and_sort">
        {/* property types */}
        <div className="property_types">
          <p style={{ alignSelf: "center" }}>Property Types:</p>
          <div>
            <img
              src="https://a0.muscache.com/pictures/7630c83f-96a8-4232-9a10-0398661e2e6f.jpg"
              alt=""
            />
            <p>Rooms</p>
          </div>
          <div>
            <img
              src="https://a0.muscache.com/pictures/d7445031-62c4-46d0-91c3-4f29f9790f7a.jpg"
              alt=""
            />
            <p>Earth Homes</p>
          </div>
          <div>
            <img
              src="https://a0.muscache.com/pictures/4d4a4eba-c7e4-43eb-9ce2-95e1d200d10e.jpg"
              alt=""
            />
            <p>Tree Houses</p>
          </div>
          <div>
            <img
              src="https://a0.muscache.com/pictures/ee9e2a40-ffac-4db9-9080-b351efc3cfc4.jpg"
              alt=""
            />
            <p>Tropical</p>
          </div>
          <div>
            <img
              src="https://a0.muscache.com/pictures/c0a24c04-ce1f-490c-833f-987613930eca.jpg"
              alt=""
            />
            <p>National Park</p>
          </div>
        </div>
      </div>
      {/* property container */}
      <div className="property_container">
        {propertyData.map((property, index) => (
          <PropertyCard key={index} property={property} />
        ))}
      </div>
    </div>
  );
}

export default Home;
