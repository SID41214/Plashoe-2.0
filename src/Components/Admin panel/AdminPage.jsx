import React from "react";
import "./AdminPage.css";
import { Link, Outlet } from "react-router-dom";
import PeopleIcon from "@mui/icons-material/People";
import { ProductionQuantityLimits } from "@mui/icons-material";
import HouseRoundedIcon from "@mui/icons-material/HouseRounded";
import AdminData from "./AdminData";
import image from "./Images/1121308.jpg";
import Avatar from "@mui/material/Avatar";

function AdminPage() {
  const admin = AdminData;

  return (
    <div className="container-div">
      <div className="left-container">
      <Link to={''}>
        <Avatar alt="Remy Sharp" src={image} sx={{ width: 56, height: 56 }} />
        </Link>
        <h3>{admin.name}</h3>
        
        <p style={{color:'rgb(15,90,120)'}}>_____________</p>
        {/* <hr /> */}
        <div>
          <Link to={"users"}>
            <li>
              <PeopleIcon fontSize="medium" /> USERS
            </li>
          </Link>
          <Link to={"product"}>
            <li>
              <ProductionQuantityLimits fontSize="medium" /> PRODUCTS
            </li>
          </Link>
          
          <Link to={"/"}>
            <li>
              <HouseRoundedIcon fontSize="medium" /> HOME
            </li>
          </Link>
        </div>
      </div>
      <div className="side-bar">
        <div className="headding text-light">
          <h1>HELLO Admin.......</h1>
        </div>
        <div >
        <Outlet />
        </div>
      </div>
    </div>
  );
}

export default AdminPage;
