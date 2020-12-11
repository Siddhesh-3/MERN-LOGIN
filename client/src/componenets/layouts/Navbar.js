import React, { useContext, Fragment } from "react";
import AuthContext from "../../context/authContext/authContext";
import { Link } from "react-router-dom";

const Navbar = () => {
  const { logout, clearError, userAuth, user } = useContext(AuthContext);
  const onLogout = () => {
    logout();
    clearError();
  };

  const userLinks = (
    <Fragment>
    
      <li style={{textAlign:"center"}}>Welcome,{user && user.name}</li>
      <span className="sm-hide"></span>
      <li>
        <a href="#!" onClick={onLogout}>
          <span className="sm-hide">Logout</span>
        </a>
      </li>
    </Fragment>
  );

  const authLinks = (
    <Fragment>
      <li>
        <Link to="/login">
        
        </Link>
      </li>
    </Fragment>
  );

  return (
    <div className="navbar">
      <div >
     <img src="d.jpg"  style={{height:"10%",width:"10%"}}/>
      </div>
      <ul>{userAuth ? userLinks : authLinks}</ul>
    </div>
  );
};

export default Navbar;
