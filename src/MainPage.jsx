import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./Components/NavBar";
import Men from "./Pages/Men";
import Women from "./Pages/Women";
import Collection from "./Pages/Collection";
import LookBook from "./Pages/LookBook";
import Sale from "./Pages/Sale";
import Home from "./Pages/Home";
import OurStory from "./Pages/OurStory";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Login from "./Pages/Login";
import Registration from "./Pages/Registration";
import ProductData from "./Components/ProductData";
import dataHandling from "./UserContext/UserContext";
import UsersData from "./Components/UserData";
import PaymentPage from "./Pages/Payment2";
import AdminPage from "./Components/Admin panel/AdminPage";
import Users from "./Components/Admin panel/Users";
import Product from "./Components/Admin panel/Product";
import AdminLogin from "./Components/Admin panel/AdminLogin";
import AdminLayout from "./Components/Admin panel/layout/AdminLayout";
import AdminHome from "./Components/Admin panel/AdminHome";

function MainPage() {
  const [search, setSearch] = useState("");

  const [cart, setCart] = useState([]);
  const [data, setData] = useState(ProductData);
  const [log, setLog] = useState("");
  const [userData, setUserData] = useState(UsersData);
  const [Price, totalPrice] = useState(null);
  const [username, setUsername] = useState("");
 

  const details = {
    data,
    setData,
    search,
    setSearch,
    cart,
    setCart,
    log,
    setLog,
    userData,
    setUserData,
    Price,
    totalPrice,
    username,
    setUsername,
  };

  return (
    <div>
      <dataHandling.Provider value={details}>
        <Routes>
          <Route path="/" element={<NavBar />}>
            <Route path="/" element={<Home />} />
            <Route path="/men" element={<Men />} />
            <Route path="/women" element={<Women />} />
            <Route path="/collection" element={<Collection />} />
            <Route path="/sale" element={<Sale />} />
            <Route path="/lookbook" element={<LookBook />} />
            <Route path="/ourstory" element={<OurStory />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/cart" element={<Cart />} />
            <Route path="/payment" element={<PaymentPage />} />
          </Route>
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/adminlogin" element={<AdminLayout />}>
            <Route index element={<AdminLogin />} />
            <Route path="adminPage" element={<AdminPage />}>
              <Route index element={<AdminHome />} />
              <Route path="users" element={<Users />} />
              <Route path="product" element={<Product />} />
            </Route>
          </Route>
        </Routes>
      </dataHandling.Provider>
    </div>
  );
}

export default MainPage;
