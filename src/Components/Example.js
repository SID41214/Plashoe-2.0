import { Outlet, Route, Routes } from "react-router-dom";
import NavBar from "./NavBar";
import Men from "../Pages/Men";
import Women from "../Pages/Women";
// your components here 

const Example = () => {
  
  return (
    <>
      <Routes>
        {/* Routes that needs a navbar will need to go as children of this Route component */}
        <Route path="/" element={<NavBar />}>
          <Route path="/" element={<div>Home screen</div>} />
          <Route path="/men" element={<Men />} />
          <Route path="/women" element={<Women />} />
          {/* <Route path="/collection" element={<YourCustomProtectedRoute component={Someone}/>} /> */}
          {/* <Route path="/something/:id" element={<ProtectedRoute id component={SomethingById}/>} /> */}
        </Route>

        {/* Routes without a navbar you can add them here as normal routes */}
        {/* <Route
          path="/idontneednavbar"
          element={<ProtectedRoute component={ProviderRegistrationInfo} />}
        /> */}
      </Routes>
    </>
  );

  function LayoutsWithNavbar() {
    return (
      <>
        {/* Your navbar component */}
        {/* <NavBar /> */}
  
        {/* This Outlet is the place in which react-router will render your components that you need with the navbar */}
        <Outlet /> 
        
        {/* You can add a footer to get fancy in here :) */}
      </>
    );
  }



}
export default Example