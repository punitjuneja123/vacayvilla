import React from "react";
import logo from "../logo.png";
import "./ListYourProp.css";

function ListYourProp() {
  let userID = localStorage.getItem("user_id") || null;
  console.log(userID);

  const propertyDataHandler = (e) => {
    e.preventDefault();
    let property_name = e.target.property_name.value;
    let type = e.target.type.value;
    let image = e.target.image.value.split("\n");
    let city = e.target.city.value;
    let state = e.target.state.value;
    let country = e.target.country.value;
    let no_of_guests = e.target.no_of_guests.value;
    let bedrooms = e.target.bedrooms.value;
    let beds = e.target.beds.value;
    let bathrooms = e.target.bathrooms.value;
    let description = e.target.description.value;
    let price = e.target.price.value;

    let obj = {
      property_name,
      type,
      image,
      city,
      state,
      country,
      no_of_guests,
      bedrooms,
      beds,
      bathrooms,
      description,
      price,
    };
    listProperty(obj);
  };

  async function listProperty(obj) {
    let LYP = await fetch(
      `https://vacayvilla.onrender.com/property/addProperty`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: localStorage.getItem("token"),
        },
        body: JSON.stringify(obj),
      }
    );
    if (LYP.status === 200) {
      alert("Property added successful");
    } else {
      alert("Something went wrong");
    }
  }

  return (
    <div className="LYP_Form_Div" id="LYP_Form_Div">
      <h1 style={{ textAlign: "center", color: "#d78e17" }}>
        Add Your Property
      </h1>
      {userID ? (
        <form action="" className="LYP_Form" onSubmit={propertyDataHandler}>
          <label htmlFor="">Property Name</label>
          <br />
          <input type="text" name="" id="property_name" required />
          <br />
          <label htmlFor="">Property Type</label>
          <br />
          <input type="text" name="" id="type" required />
          <br />
          <label htmlFor="">
            Images(Add more then one images, Press enter and add to new line)
          </label>
          <br />
          <textarea type="text" name="" id="image" required />
          <br />
          <label htmlFor="">City</label>
          <br />
          <input type="text" name="" id="city" required />
          <br />
          <label htmlFor="">State</label>
          <br />
          <input type="text" name="" id="state" required />
          <br />
          <label htmlFor="">Country</label>
          <br />
          <input type="text" name="" id="country" required />
          <br />
          <label htmlFor="">Number of guests</label>
          <br />
          <input type="number" name="" id="no_of_guests" required />
          <br />
          <label htmlFor="">Number of Bedrooms</label>
          <br />
          <input type="number" name="" id="bedrooms" required />
          <br />
          <label htmlFor="">Number of Bathrooms</label>
          <br />
          <input type="number" name="" id="bathrooms" required />
          <br />
          <label htmlFor="">Number of Beds</label>
          <br />
          <input type="number" name="" id="beds" required />
          <br />
          <label htmlFor="">About Property</label>
          <br />
          <textarea type="textarea" name="" id="description" required />
          <br />
          <label htmlFor="">Price Per Night</label>
          <br />
          <input type="number" name="" id="price" required />
          <br />
          <input type="submit" value="Add Property" />
        </form>
      ) : (
        <h1 style={{ textAlign: "center" }}>Login First</h1>
      )}
    </div>
  );
}

export default ListYourProp;
