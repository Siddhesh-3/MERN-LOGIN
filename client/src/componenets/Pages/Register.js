import React, { useState, useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";
import { Button, Grid } from "@material-ui/core";
import TextField from "@material-ui/core/TextField";

export const Register = (props) => {
  const { registerUser, userAuth, errors, setError, clearError } = useContext(
    AuthContext
  );
  useEffect(() => {
    if (userAuth) {
      props.history.push("/");
    }
  }, [userAuth, props.history]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    password2: "",
  });
  const { name, email, password, password2 } = user;

  const handleChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
    clearError();
  };
  const submit = (e) => {
    e.preventDefault();
    if (password !== password2) {
      setError({ msg: "passwords dont match" });
    } else {
      registerUser({ name, email, password });
      clearError();
    }
  };
  return (
    <div style={{ height: 1800 }}>
      <Grid lg={12} md={12} xs={12} sm={12} container direction="row">
  
        <Grid lg={4} md={12} xs={12} sm={12}>
          <div className="register">
            <h1 style={{ margin: 50 }}>Sign Up</h1>
            <form onSubmit={submit}>
              <TextField
                size="small"
                id="outlined-basic"
                label="Name"
                variant="outlined"
                type="text"
                name="name"
                placeholder="name"
                value={name}
                onChange={handleChange}
                style={{ width: "80%", margin: "auto" }}
              />
              <br />
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
                style={{ width: "80%", margin: "auto" }}
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
                style={{ width: "80%", margin: "auto" }}
              />
              <br />
              <TextField
                size="small"
                id="outlined-basic"
                label="Confirm Password"
                variant="outlined"
                type="password"
                name="password2"
                placeholder="Confirm password"
                value={password2}
                onChange={handleChange}
                style={{ width: "80%", margin: "auto" }}
              />
              <br />
              <Button
                variant="outlined"
                color="secondary"
                type="submit"
                value="Sign Up"
                style={{ width: 150, margin: " auto " }}
              >
                Sign Up
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
                {" "}
                Already have an account? {""} <Link to="/login">Login</Link>
              </p>
            </div>
          </div>
        </Grid>
       
      </Grid>
    </div>
  );
};

export default Register;
