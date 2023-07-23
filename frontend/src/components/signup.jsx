import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Signup({ openSignup, handleSignupForm, setOpenSignup }) {
  return (
    <div>
      <div className={openSignup ? "confirm show" : "confirm"}>
        <div className="confirm-content">
          <h4>Signup</h4>
          <CloseRoundedIcon
            style={{
              position: "absolute",
              right: "20px",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={() => setOpenSignup(false)}
          />
          <form action="" onSubmit={handleSignupForm}>
            <label htmlFor="">Name</label>
            <br />
            <input type="text" id="name" />
            <br />
            <label htmlFor="">Email</label>
            <br />
            <input type="text" id="email" />
            <br />
            <label htmlFor="">DOB</label>
            <br />
            <input type="date" id="DOB" />
            <br />
            <label htmlFor="">BIO</label>
            <br />
            <input type="textarea" id="bio" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" id="password" />
            <br />
            <input type="submit" value="Signup" name="" id="" />
          </form>
        </div>
      </div>
      <div className="overlay" onClick={() => setOpenSignup(false)} />
    </div>
  );
}

export default Signup;
