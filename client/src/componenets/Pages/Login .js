import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";
import { Grid } from "@material-ui/core";
export const Login = (props) => {
  const { loginUser, userAuth, errors, clearError } = useContext(AuthContext);
  useEffect(() => {
    if (userAuth) {
      props.history.push("/");
    }
  }, [userAuth, props.history]);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const { email, password } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    clearError();
  };
  const submit = (e) => {
    e.preventDefault();
    loginUser({ email, password });
    clearError();
  };
  return (
    <div style={{ height: 1500 }}>
      <Grid lg={12} md={12} xs={12} sm={12} container direction="row">
      
        <Grid lg={4} md={12} xs={12} sm={12}>
          <div className="login">
            <h1 style={{ margin: 50 }}>Login</h1>
            <form onSubmit={submit}>
              <TextField
                size="small"
                id="outlined-basic"
                label="Email"
                variant="outlined"
                type="email"
                name="email"
                placeholder="email"
                value={email}
                onChange={handleChange}
                style={{width: "70%", margin: "auto" }}
              />
              <br />
              <TextField
                size="small"
                id="outlined-basic"
                label="Password"
                variant="outlined"
                type="password"
                name="password"
                placeholder="Password"
                value={password}
                onChange={handleChange}
                style={{ width: "70%", margin: "auto" }}
              />

              <br />

              <Button
                variant="outlined"
                color="primary"
                type="submit"
                value="Sign In"
                style={{
                  width: 150,
                  margin: " auto ",
                  marginTop: 80,
                  backgroundColor: "B06AB3",
                }}
              >
                SIGN In
              </Button>
            </form>

            <div className="question">
              {errors != null && (
                <button className="danger">
                  {errors.msg ? errors.msg : errors.error[0].msg}
                  <span onClick={() => clearError()}>X</span>
                </button>
              )}
              <p>
                Don't have an account?{" "}
                <Link to="/register" style={{ color: "red" }}>
                  Sign Up
                </Link>
              </p>
            </div>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
