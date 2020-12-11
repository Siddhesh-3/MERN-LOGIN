import React, { useContext, useEffect } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Grid } from "@material-ui/core";
import { Link, useHistory } from "react-router-dom";


const Home = () => {
  let history = useHistory();
  const { getUser, user } = useContext(AuthContext);

  useEffect(() => {
    getUser();
  }, []);

  const changePage = (pageName) => {
    history.push({
      pathname: pageName,
    });
  };

  return (
    <div className="app-container" style={{ height: 1500 }}>
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
       

      </Grid>

    </div>
  );
};

export default Home;
