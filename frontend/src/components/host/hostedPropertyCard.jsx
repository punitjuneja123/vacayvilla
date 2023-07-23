import React from "react";
import "./hostedProp.css";
function HostedPropertyCard({ property }) {
  // console.log(propData);
  return (
    <div className="property_Card" style={{cursor:"auto"}}>
      <div>
        <img src={JSON.parse(property.image)[0]} alt="property image" />
      </div>
      <div className="property_details">
        <p style={{ marginBottom: "8px" }}>
          <b>{property.property_name}</b>
        </p>
        <p style={{ fontWeight: "lighter" }}>
          {property.city}, {property.state}, {property.country}
        </p>
        <p style={{ fontWeight: "lighter", marginBottom: "5px" }}>
          {property.type}
        </p>
        <p style={{ fontWeight: "lighter" }}>
          <b>₹{property.price}</b> night
        </p>
      </div>
      <div className="EDButtons">
        <button className="EditBtn">Edit</button>
        <button className="DltBtn">Delete</button>
      </div>
    </div>
  );
}

export default HostedPropertyCard;
