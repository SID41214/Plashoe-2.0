import React from "react";
import "./Home.css";
import Collections from "./Collection";

function Home() {
  return (
    <div  style={{ backgroundColor: "rgb(241,241,239)" }}>
      <div className="home">
        
      </div>
      <div className="container">
      <hr />
        <Collections />
      </div>
    </div>
  );
}

export default Home;
