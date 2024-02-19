import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { LoginUser, reset } from "../features/authSlice";
import loginBg from "../loginBg.png";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isError, isSuccess, isLoading, message } = useSelector(
    (state) => state.auth
  );

  useEffect(() => {
    if (user || isSuccess) {
      navigate("/dashboard");
    }
    dispatch(reset());
  }, [user, isSuccess, dispatch, navigate]);

  const Auth = (e) => {
    e.preventDefault();
    dispatch(LoginUser({ email, password }));
  };

  return (
    <section className="hero is-fullheight is-fullwidth">
      <div
        className="hero-body"
        style={{
          backgroundImage: `url(${loginBg})`,
          height: "100%",
          backgroundPosition: "center",
          backgroundRepeat: "norepeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container">
          <div className="columns is-centered">
            <div className="column is-5">
              <form
                onSubmit={Auth}
                className="box"
                style={{ borderRadius: "15px" }}
              >
                {isError && <p className="has-text-centered">{message}</p>}
                <h2
                  className="title is-2"
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bolder",
                    fontSize:"30px"
                  }}
                >
                  WELCOME TO
                </h2>
                <h2
                  className="title is-2"
                  style={{
                    textAlign: "center",
                    color: "black",
                    fontWeight: "bolder",
                  }}
                >
                  WEBSITE KARTU TANI
                </h2>
                <br />
                {/* <h1 className="title is-2" style={{ textAlign: "center" }}>
                  Login
                </h1> */}
                <div className="field">
                  <label className="label">Email</label>
                  <div className="control">
                    <input
                      type="text"
                      className="input"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="Email"
                    />
                  </div>
                </div>
                <div className="field">
                  <label className="label">Password</label>
                  <div className="control">
                    <input
                      type="password"
                      className="input"
                      value={password}
                      autocomplete="current-password"
                      onChange={(e) => setPassword(e.target.value)}
                      placeholder="******"
                    />
                  </div>
                </div>
                <div className="field mt-5">
                  <button
                    type="submit"
                    className="button is-success is-fullwidth has-background-black-ter"
                    style={{ borderRadius: "15px" }}
                  >
                    {isLoading ? "Loading..." : "Login"}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
