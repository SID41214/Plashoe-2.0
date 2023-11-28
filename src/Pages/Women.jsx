import React, { useContext } from 'react'
import dataHandling from '../UserContext/UserContext'
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";



function Women() {
  const {data} = useContext(dataHandling)


  const womenItems = data.filter((ele) => ele.type === 'women')
  return (

    <div className="container bg-light bg-gradient">
      <div>
        <h1 style={{textAlign:'center', color:'#6E7051',textShadow:'5px'}}>Women Page</h1>
      </div>
      <div >
      <Row style={{height:'100%'}} className="m-5">
          {womenItems.map((value) => {
            const { name, image, price, id } = value;

            return (
              <Card style={{ width: "22rem",margin:'20PX' }} key={id}>
                <Card.Img variant="top" src={image} />
                <Card.Body>
                  <Card.Title>{name}</Card.Title>
                </Card.Body>
                <ListGroup className="list-group-flush">
                  <ListGroup.Item style={{fontSize:"25px",fontWeight:'bolder',color:'#6E7051'}}>${price}</ListGroup.Item>
                </ListGroup>
                <Card.Body>
                  <Button className="float-start ">Buy Now</Button>
                  <Button className="float-end">Add to Cart</Button>
                </Card.Body>
              </Card>
            );
          })}
        </Row>
      </div>

    </div>
  )
}

export default Women