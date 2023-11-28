import React from "react";
import dataHandling from "../UserContext/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

function Cart() {
  const navigate = useNavigate();
  const { cart, setCart,log } = useContext(dataHandling);

  const updateQuantity = (itemId, amount) => {
    const updatedCart = cart.map((item) => {
      if (item.id === itemId) {
        const updatedItem = {
          ...item,
          quantity: (item.quantity || 1) + amount,
        };
        return updatedItem;
      }
      return item;
    });

    setCart(updatedCart);
  };

  const deleteItem = (itemId) => {
    const updatedCart = cart.filter((item) => item.id !== itemId);
    setCart(updatedCart);
  };

  const total = cart
    .reduce((acc, item) => acc + item.price * (item.quantity || 1), 0)
    .toFixed(2);

  return (
    <div style={{ backgroundColor: "#F1F1EF", height: "100%" }}>
      <div className="container h-100">
        <div className="row d-flex justify-content-center align-items-center h-100">
          <div className="col">
            <p>
              <span className="h2">Shopping Cart </span>
              <span className="h4">
                ({cart.length} item{cart.length !== 1 ? "s" : ""} in your cart)
              </span>
            </p>

            {cart.map((value) => {
              const { name, image, price, id, quantity } = value;

              return (
                <div key={id} className="card mb-4">
                  <div className="card-body p-4">
                    <div className="row align-items-center">
                      <div className="col-md-2">
                        <img src={image} className="img-fluid" alt="Product" />
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">
                            Product Name
                          </p>
                          <p className="lead fw-normal mb-0">{name}</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center"></div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Quantity</p>
                          <div className="d-flex">
                            <Button
                              onClick={() => updateQuantity(id, -1)}
                              className="m-2"
                            >
                              -
                            </Button>
                            <p className="lead d-flex fw-normal mb-0">
                              {" "}
                              {quantity || 1}{" "}
                            </p>{" "}
                            <Button
                              onClick={() => updateQuantity(id, 1)}
                              className="m-2"
                            >
                              +
                            </Button>
                          </div>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Price</p>
                          <p className="lead fw-normal mb-0">${price}</p>
                        </div>
                      </div>
                      <div className="col-md-2 d-flex justify-content-center">
                        <div>
                          <p className="small text-muted mb-4 pb-2">Total</p>
                          <p className="lead fw-normal mb-0">
                            ${(price * (quantity || 1)).toFixed(2)}
                          </p>
                        </div>
                      </div>
                    </div>
                    <Button
                      onClick={() => deleteItem(id)}
                      className="float-end btn btn-danger mt-3"
                    >
                      Delete
                    </Button>
                  </div>
                </div>
              );
            })}

            <div className="card mb-5">
              <div className="card-body p-4">
                <div className="float-end">
                  <p className="mb-0 me-5 d-flex align-items-center">
                    <span className="small text-muted me-2">Order total:</span>{" "}
                    <span className="lead fw-normal">${total}</span>
                  </p>
                </div>
              </div>
            </div>
            <div className="d-flex justify-content-end">
              <button
                onClick={() => navigate("/collection")}
                type="button"
                className="btn btn-light btn-lg me-2"
              >
                Continue shopping
              </button>
              <button
                type="button"
                onClick={() => {
                  if(cart.length === 0){
                    alert('Cart is empty, add items to cart')
                  }else{
                    if(!log ){
                      alert('login to continue');
                      navigate("/login")
                    }
                    else{
                      navigate("/payment");
                    }
                }
                 
                }}
                className="btn btn-primary btn-lg"
              >
                Proceed to Buy
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
