import React, { useState, useEffect, useCallback } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Row } from "react-bootstrap";
import dataHandling from "../UserContext/UserContext";
import { useContext } from "react";
import { useNavigate } from "react-router-dom";

function Collection() {
  const navigate = useNavigate();
  const { search, data, cart, setCart } = useContext(dataHandling);
  const [proData, setProdata] = useState(data);

  const searchFilter = useCallback((itemname) => {
    const result = itemname.filter((val) => {
      return search === "" ? val : val.name.toLowerCase().includes(search.toLowerCase());
    });
    setProdata(result);
  }, [search]);

  useEffect(() => {
    searchFilter(data);
  }, [search, data, searchFilter]);

  const AddtoCart = (val) => {
    const itemIndex = cart.findIndex((item) => item.id === val.id);

    if (itemIndex !== -1) {
      const updatedCart = [...cart];
      updatedCart[itemIndex].quantity = (updatedCart[itemIndex].quantity || 1) + 1;
      setCart(updatedCart);
    } else {
      setCart([...cart, { ...val, quantity: 1 }]);
    }
  };

  return (
    <div className="container bg-light bg-gradient">
      <div>
        <div>
          <h1 style={{ textAlign: 'center', color: 'rgb(110,112,81)' }}>Collections</h1>
        </div>
        <div>
          <Row className="m-5 ">
            {proData.map((value) => {
              const { name, image, price, id } = value;

              return (
                <Card key={id} style={{ width: "22rem", margin: '20px' }}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item style={{ fontSize: "25px", fontWeight: 'bolder', color: '#6E7051' }}>
                      ${price}
                    </ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Button onClick={() => navigate('/payment')} className="float-start">
                      Buy Now
                    </Button>
                    <Button onClick={() => AddtoCart(value)} className="float-end">
                      Add to Cart
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
          </Row>
        </div>
      </div>
    </div>
  );
}

export default Collection;
