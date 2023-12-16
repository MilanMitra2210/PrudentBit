import React from "react";
import music from "../images/music.png";
import "./login.css";
import musicIcon from "../images/music-icon.png";

export default function Login({ onLogin }) {
  const handleLogin = () => {
    // Perform any necessary login actions here
    onLogin();
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-md-6">
          <div className="loginBox">
            <div className="welcomeText">
              <h3>Welcome</h3>
              <h3>
                <img
                  src={musicIcon}
                  alt="..."
                  className="img-thumbnail"
                  width="42"
                  height="42"
                />{" "}
                Music Stream
              </h3>
            </div>
            <form>
              <div className="form-outline mb-4">
                <input
                  type="text"
                  id="form2Example1"
                  className="form-control"
                  placeholder="Username"
                />
              </div>

              <div className="form-outline mb-4">
                <input
                  type="password"
                  id="form2Example2"
                  className="form-control"
                  placeholder="Password"
                />
              </div>

              <div className="row mb-4">
                <div className="col">
                  <a href="">Forgot password?</a>
                </div>
              </div>

              <button
                onClick={handleLogin}
                type="button"
                className="btn btn-primary mb-4"
              >
                Log in
              </button>
            </form>
          </div>
        </div>
        <div className="col-md-6">
          <div className="photo">
            <img
              src={music}
              alt="..."
              className="img-thumbnail"
              width="693"
              height="703"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
