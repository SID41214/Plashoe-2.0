import React, { useContext } from "react";
import dataHandling from "../UserContext/UserContext";
import {
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBCardTitle,
  MDBCol,
  MDBContainer,
  MDBInput,
  MDBRow,
} from "mdb-react-ui-kit";

export default function Payment() {
  const { cart } = useContext(dataHandling);

  // Calculate the total value of the cart
  const totalValue = cart.reduce((total, item) => total + item.price, 0);

  return (
    <MDBContainer fluid className="py-5" style={{ backgroundColor: "#f9c9aa" }}>
      <MDBRow className="d-flex justify-content-center">
        <h1>Payment Section</h1>
        {cart.map((value) => {
          const { name, image, price, id } = value;

          return (
            <MDBCol key={id} md="9" lg="7" xl="5">
              <MDBCard>
                <MDBCardImage src={image} position="top" alt={name} />
                <MDBCardBody>
                  <MDBCardTitle className="d-flex justify-content-between mb-0">
                    <p className="text-muted mb-0">{name}</p>
                    <p className="mb-0">${price}</p>
                  </MDBCardTitle>
                </MDBCardBody>
                <div className="rounded-bottom" style={{ backgroundColor: "#eee" }}>
                  <MDBCardBody>
                    <p className="mb-4">Your payment details</p>
                    <MDBInput
                      label="Card Number"
                      id="form1"
                      type="text"
                      placeholder="1234 5678 1234 5678"
                      wrapperClass="mb-3"
                    />
                    <MDBRow className="mb-3">
                      <MDBCol size="6">
                        <MDBInput
                          label="Expire"
                          id="form2"
                          type="password"
                          placeholder="MM/YYYY"
                          wrapperClass="mb-3"
                        />
                      </MDBCol>
                      <MDBCol size="6">
                        <MDBInput
                          label="CVV"
                          id="form4"
                          type="password"
                          placeholder="CVV"
                          wrapperClass="mb-3"
                        />
                      </MDBCol>
                    </MDBRow>
                    <MDBBtn block color="info">
                      Order now
                    </MDBBtn>
                  </MDBCardBody>
                </div>
              </MDBCard>
            </MDBCol>
          );
        })}
      </MDBRow>
      <div>Total Value of Cart: ${totalValue}</div>
    </MDBContainer>
  );
}
