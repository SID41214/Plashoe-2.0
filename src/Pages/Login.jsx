// import "./Login.css";
import { Link, useNavigate } from "react-router-dom";
import { useState, useContext } from "react";
import dataHandling from "../UserContext/UserContext";
import { Button } from "react-bootstrap";

function Login() {
  const Navigate = useNavigate();
  const { userData, username, setUsername } = useContext(dataHandling);
  const { setLog } = useContext(dataHandling);
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!username || !password) {
      alert("Please fill in both username and password fields.");
      return;
    }

    const user = userData.find(
      (user) => user.username === username && user.password === password
    );

    if (user) {
      alert("Login successful");
      setLog(user.username);

      Navigate("/");
    } else {
      alert("Login failed");
    }
  };

  return (
    <>
      {/* Section: Design Block */}
      <section
        className="background-radial-gradient overflow-hidden"
        style={{
          backgroundImage: `url(https://img.freepik.com/premium-photo/close-up-shot-rack-shoes-high-end-shoe-store-generative-ai_697880-6291.jpg?size=626&ext=jpg&ga=GA1.1.1413502914.1696982400&semt=ais)`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "100%",
          height:'100%'
        }}
      >
        <style
          dangerouslySetInnerHTML={{
            __html:
              "\n    .background-radial-gradient {\n      background-color: hsl(218, 41%, 15%);\n      background-image: radial-gradient(650px circle at 0% 0%,\n          hsl(218, 41%, 35%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%),\n        radial-gradient(1250px circle at 100% 100%,\n          hsl(218, 41%, 45%) 15%,\n          hsl(218, 41%, 30%) 35%,\n          hsl(218, 41%, 20%) 75%,\n          hsl(218, 41%, 19%) 80%,\n          transparent 100%);\n    }\n\n    #radius-shape-1 {\n      height: 220px;\n      width: 220px;\n      top: -60px;\n      left: -130px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    #radius-shape-2 {\n      border-radius: 38% 62% 63% 37% / 70% 33% 67% 30%;\n      bottom: -60px;\n      right: -110px;\n      width: 300px;\n      height: 300px;\n      background: radial-gradient(#44006b, #ad1fff);\n      overflow: hidden;\n    }\n\n    .bg-glass {\n      background-color: hsla(0, 0%, 100%, 0.9) !important;\n      backdrop-filter: saturate(200%) blur(25px);\n    }\n  ",
          }}
        />
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0" style={{ zIndex: 10 }}>
              <h1
                className="my-5 display-5 fw-bold ls-tight"
                style={{ color: "hsl(218, 81%, 95%)" }}
              >
                The best offer <br />
                <span style={{ color: "hsl(218, 81%, 75%)" }}>
                  for your shopping
                </span>
              </h1>
              <p
                className="mb-4 opacity-70"
                style={{ color: "hsl(218, 81%, 85%)" }}
              >
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Temporibus, expedita iusto veniam atque, magni tempora mollitia
                dolorum consequatur nulla, neque debitis eos reprehenderit quasi
                ab ipsum nisi dolorem modi. Quos?
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div
                id="radius-shape-1"
                className="position-absolute rounded-circle shadow-5-strong"
              />
              <div
                id="radius-shape-2"
                className="position-absolute shadow-5-strong"
              />
              <div
                className="card bg-glass"
                style={{
                  borderRadius: "30px",
                  boxShadow: "5px 5px 50px black",
                }}
              >
                <div className="card-body px-4 py-5 px-md-5">
                  <form onSubmit={handleSubmit}>
                    {/* 2 column grid layout with text inputs for the first and last names */}
                    <div className="row">
                      <Link to={"/"} style={{ textDecoration: "none" }}>
                        <h1
                          style={{
                            textAlign: "center",
                            color: "rgb(124,17,186)",
                          }}
                        >
                          LOGIN
                        </h1>
                      </Link>
                    </div>
                    {/* Email input */}
                    <div className="form-outline mb-4">
                      <input
                        placeholder="User Name"
                        type="text"
                        id="form3Example3"
                        className="form-control"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example3"
                      ></label>
                    </div>
                    {/* Password input */}
                    <div className="form-outline mb-4">
                      <input
                        placeholder="Password"
                        type="password"
                        id="form3Example4"
                        className="form-control"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <label
                        className="form-label"
                        htmlFor="form3Example4"
                      ></label>
                    </div>
                    {/* Checkbox */}

                    {/* Submit button */}
                    <button
                      style={{ width: "100%" }}
                      type="submit"
                      className="btn btn-primary btn-block mb-4"
                    >
                      Login
                    </button>
                    {/* Register buttons */}
                    <div className="text-center">
                      <p>
                        Create a New Account?
                        <Link to={"/registration"}>Register</Link>
                      </p>
                      <div className="adminpage">
                        <Button onClick={() => Navigate("/adminlogin")}>
                          Admin
                        </Button>
                      </div>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-google" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-twitter" />
                      </button>
                      <button
                        type="button"
                        className="btn btn-link btn-floating mx-1"
                      >
                        <i className="fab fa-github" />
                      </button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>
  );
}

export default Login;
