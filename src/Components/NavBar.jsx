import React from "react";
import "./NavBar.css";
import { Link, Outlet, useNavigate } from "react-router-dom";
import LocalMallIcon from '@mui/icons-material/LocalMall';
import PersonIcon from '@mui/icons-material/Person';
import SearchIcon from '@mui/icons-material/Search';
import dataHandling from "../UserContext/UserContext";
import { useContext } from "react";
import Footer from "./Footer";
import LogoutIcon from '@mui/icons-material/Logout';


function NavBar() {
  const navigate = useNavigate()
  const { setSearch, cart, username, setLog, setUsername} = useContext(dataHandling)

 console.log(cart.length);
 const handleLogout = () => {
  setLog("");
  setUsername("");

  navigate("/"); 
};
    
  
  return (
    <>
      <div className="free-top-bar">
          <p>Free Express Shipping on all orders with all duties included</p>
      </div>
      <div className="navbar-container">
          <div className="navbar-left-logo" >
            <Link to={'/'}>
              <img
                className="logo-img"
                src="https://websitedemos.net/recycled-shoe-store-04/wp-content/uploads/sites/983/2021/11/site-logo.svg"
                alt="logo" 
              />
            </Link>
          </div>
          <div className="navbar-features float-start" >
                <ul>
                  <Link to={'/men'}><li>MEN</li></Link>
                  <Link to={'/women'}><li>WOMEN</li></Link>
                  <Link to={'/collection'}><li>COLLECTION</li></Link>
                  <Link to={'/lookbook'}><li>LOOKBOOK</li></Link>
                  <Link to={'/sale'}><li>SALE</li></Link>            
                  <input onClick={()=> navigate('/collection')} onChange={(e)=>setSearch(e.target.value)} className="search-box bg-light" type="text" placeholder="Search items" />
                  <span><SearchIcon /></span>
                </ul>
          </div>
          
          <div className="navbar-right">
              <ul>
                <Link to={'/ourstory'}><li>OUR STORY</li></Link>
                <Link to={'/contact'}><li>CONTACT</li></Link>
                <Link to={'/cart'}><li className="cart-icon"><LocalMallIcon/><sup >{cart.length}</sup></li></Link>
                <Link to={'/login'}><li className="login-icon"><PersonIcon/></li></Link>
                <button className="logout-icon" onClick={handleLogout}><li><LogoutIcon />{username}</li></button>
                
              </ul>
          </div>      
      </div>
      <Outlet/>

      <div>
        <Footer/>
      </div>
    </>
  );
}

export default NavBar;
