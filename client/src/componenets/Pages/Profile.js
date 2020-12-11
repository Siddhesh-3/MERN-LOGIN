import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";

const Profile = () => {
    let history = useHistory();

    const {  user } = useContext(AuthContext);
    const changePage = (pageName) => {
        history.push({
          pathname: pageName,
        });
      };
    return (
        <div className="app-container" style={{ height: 1900 }}>
        <Grid lg={12} md={12} xs={12} sm={12} container direction="row">
          <Grid lg={4} md={12} xs={12} sm={12} style={{ marginLeft: "-2.6%", marginTop: "-1%" }}>
            <div style={{ border: "1px solid black", height: "400%", width: "50%" }}>
            <div style={{ padding: "10%" }}>
              <Link style={{color:"black"}} onClick={() => {
                changePage("/profile")
              }}>Profile</Link>

              <br></br>
              <Link style={{color:"black"}} onClick={() => {
                  changePage("/blank")
                }}>Change password</Link>
              <br></br>
              <Link style={{color:"black"}} onClick={() => {
                  changePage("/blank")
                }}>Make order</Link>
            </div>
  
            </div>
          </Grid>
          <div>
       <Grid lg={8} md={12} xs={12} sm={12}>
        <div style={{marginTop:"10%"}}>
        <h3>Name : </h3>
        <h3>{user && user.name}</h3>
        <h3 style={{marginTop:"5%"}}>Email : {user && user.email}</h3>
        </div>
        </Grid>
  
    
          </div>
  
        </Grid>
  
      </div>
    )
}

export default Profile
