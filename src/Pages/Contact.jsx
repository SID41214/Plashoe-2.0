import { Button } from "react-bootstrap";
import React from "react";
import { useNavigate } from "react-router-dom";

function Contact() {
  const navigate = useNavigate();
  return (
    <div style={{display:'flex',justifyContent:'center',backgroundColor:'rgb(48,72,114)'}}>
    <section className="mb-4" style={{width:'50%',height:'100%',color:'white'}}>
      <h2 className="h1-responsive font-weight-bold text-center my-4">Contact us</h2>
      <p className="text-center w-responsive mx-auto mb-5">
        Do you have any questions? Please do not hesitate to contact us directly. Our team will come back to you within
        a matter of hours to help you.
      </p>
      <div className="row">
        <div className="col-md-9 mb-md-0 mb-5">
          <form id="contact-form" name="contact-form" action="mail.php" method="POST">
            <div className="row">
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="name" name="name" className="form-control" />
                  <label htmlFor="name">Your name</label>
                </div>
              </div>
              <div className="col-md-6">
                <div className="md-form mb-0">
                  <input type="text" id="email" name="email" className="form-control" />
                  <label htmlFor="email">Your email</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form mb-0">
                  <input type="text" id="subject" name="subject" className="form-control" />
                  <label htmlFor="subject">Subject</label>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-12">
                <div className="md-form">
                  <textarea
                    type="text"
                    id="message"
                    name="message"
                    rows="2"
                    className="form-control md-textarea"
                  ></textarea>
                  <label htmlFor="message">Your message</label>
                </div>
              </div>
            </div>
          </form>
          <div className="text-center text-md-left">
            <Button className=" btn-primary" onClick={() => navigate('/')}>Send</Button>
          </div>
          <div className="status"></div>
        </div>
        <div className="col-md-3 text-center">
          <ul className="list-unstyled mb-0">
            <li>
              <i className="fas fa-map-marker-alt fa-2x"></i>
              <p>Malappuram, Kerala, India</p>
            </li>
            <li>
              <i className="fas fa-phone mt-4 fa-2x"></i>
              <p>+91 8156804323</p>
            </li>
            <li>
              <i className="fas fa-envelope mt-4 fa-2x"></i>
              <p>mkkpkdm@gmail.com</p>
            </li>
          </ul>
        </div>
      </div>
    </section>
    </div>
  );
}

export default Contact;
