import React from "react";
import CloseRoundedIcon from "@mui/icons-material/CloseRounded";

function Login({ openLogin, handleLoginForm, setOpenLogin }) {
  return (
    <div>
      <div className={openLogin ? "confirm show" : "confirm"}>
        <div className="confirm-content">
          <h4>Login</h4>
          <CloseRoundedIcon
            style={{
              position: "absolute",
              right: "20px",
              fontSize: "30px",
              cursor: "pointer",
            }}
            onClick={() => setOpenLogin(false)}
          />
          <form action="" onSubmit={handleLoginForm}>
            <label htmlFor="">Email</label>
            <br />
            <input type="text" id="email" />
            <br />
            <label htmlFor="">Password</label>
            <br />
            <input type="password" id="password" />
            <br />
            <input type="submit" value="Login" name="" id="" />
          </form>
        </div>
      </div>
      <div className="overlay" onClick={() => setOpenLogin(false)} />
    </div>
  );
}

export default Login;
