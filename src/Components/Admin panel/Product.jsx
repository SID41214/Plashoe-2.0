import React, { useState } from "react";
import dataHandling from "../../UserContext/UserContext";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { Button, Row, Form as BootstrapForm, Col } from "react-bootstrap";
import { useContext } from "react";
import { Modal } from "react-bootstrap";

function Product() {
  const { data, setData } = useContext(dataHandling);
  const [showEditModal, setShowEditModal] = useState(false);
  const [editedProduct, setEditedProduct] = useState({ name: "", price: "", image: "", id: "" });
  const [showAddProductModal, setShowAddProductModal] = useState(false);
  const [newProduct, setNewProduct] = useState({ name: "", price: "", image: "", type: "men" });
  const [filterType, setFilterType] = useState("All");

  const openEditModal = (product) => {
    setEditedProduct(product);
    setShowEditModal(true);
  };

  const handleEditSubmit = () => {
    const updatedData = data.map((item) =>
      item.id === editedProduct.id
        ? { ...item, name: editedProduct.name, price: editedProduct.price, image: editedProduct.image }
        : item
    );
    setData(updatedData);
    setShowEditModal(false);
  };

  const deleteProduct = (itemId) => {
    const updatedProduct = data.filter((item) => item.id !== itemId);
    setData(updatedProduct);
  };

  const filteredData = filterType === "All" ? data : data.filter(item => item.type === filterType);

  const openAddProductModal = () => {
    setShowAddProductModal(true);
  };

  const handleAddProductSubmit = () => {
    const newId = data.length + 1; // Generate a new ID for the product
    setNewProduct({ ...newProduct, id: newId });
    setData((prevData) => [...prevData, newProduct]);
    setNewProduct({ name: "", price: "", image: "", type: "men" });
    setShowAddProductModal(false);
  };

  return (
    <div>
      <div>
        <div style={{ backgroundColor: "ButtonHighlight", position: 'sticky', top: '0', zIndex: '1', opacity: '10' }}>
          <h1 style={{ textAlign: "center", color: "rgb(110,112,81)" }}>
            Products
          </h1>
          <hr />
          <div style={{ marginLeft: '50px' }}>
            <Button className="float-end m-1" variant="success" onClick={openAddProductModal}>
              ADD Product
            </Button>
            <Button className="m-1" variant="secondary" onClick={() => setFilterType("men")}>
              Men
            </Button>
            <Button className="m-1" variant="secondary" onClick={() => setFilterType("women")}>
              Women
            </Button>
            <Button className="m-1" variant="secondary" onClick={() => setFilterType("All")}>
              All
            </Button>
          </div>
        </div>

        <div>
          <Row className="m-5">
            {filteredData.map((value) => {
              const { name, image, price, id } = value;

              return (
                <Card style={{ width: "18rem", margin: "5px" }} key={id}>
                  <Card.Img variant="top" src={image} />
                  <Card.Body>
                    <Card.Title>{name}</Card.Title>
                  </Card.Body>
                  <ListGroup className="list-group-flush">
                    <ListGroup.Item>${price}</ListGroup.Item>
                  </ListGroup>
                  <Card.Body>
                    <Button
                      className="float-start m-1"
                      onClick={() => openEditModal(value)}
                    >
                      Edit
                    </Button>
                    <Button
                      onClick={() => deleteProduct(id)}
                      className="float-end"
                      variant="danger"
                    >
                      Delete
                    </Button>
                  </Card.Body>
                </Card>
              );
            })}
            <Modal show={showEditModal} onHide={() => setShowEditModal(false)}>
              <Modal.Header closeButton>
                <Modal.Title>Edit Product</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                <BootstrapForm>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Image</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type="text"
                      value={editedProduct.image}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          image: e.target.value,
                        })
                      }
                    />
                  </BootstrapForm.Group>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Name</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type="text"
                      value={editedProduct.name}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          name: e.target.value,
                        })
                      }
                    />
                  </BootstrapForm.Group>
                  <BootstrapForm.Group>
                    <BootstrapForm.Label>Price</BootstrapForm.Label>
                    <BootstrapForm.Control
                      type="number"
                      value={editedProduct.price}
                      onChange={(e) =>
                        setEditedProduct({
                          ...editedProduct,
                          price: e.target.value,
                        })
                      }
                    />
                  </BootstrapForm.Group>
                </BootstrapForm>
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => setShowEditModal(false)}
                >
                  Close
                </Button>
                <Button variant="primary" onClick={handleEditSubmit}>
                  Save Changes
                </Button>
              </Modal.Footer>
            </Modal>
          </Row>
        </div>
      </div>
      <Modal show={showAddProductModal} onHide={() => setShowAddProductModal(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Add Product</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <BootstrapForm>
            <BootstrapForm.Group>
              <BootstrapForm.Label>Image</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                value={newProduct.image}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    image: e.target.value,
                  })
                }
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group>
              <BootstrapForm.Label>Name</BootstrapForm.Label>
              <BootstrapForm.Control
                type="text"
                value={newProduct.name}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    name: e.target.value,
                  })
                }
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group>
              <BootstrapForm.Label>Price</BootstrapForm.Label>
              <BootstrapForm.Control
                type="number"
                value={newProduct.price}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    price: e.target.value,
                  })
                }
              />
              <BootstrapForm.Label>ID</BootstrapForm.Label>
              <BootstrapForm.Control
                type="number"
                value={newProduct.id}
                onChange={(e) =>
                  setNewProduct({
                    ...newProduct,
                    id: e.target.value,
                  })
                }
              />
            </BootstrapForm.Group>
            <BootstrapForm.Group as={Row}>
              <BootstrapForm.Label as="legend" column sm={2}>
                Type
              </BootstrapForm.Label>
              <Col sm={10}>
                <BootstrapForm.Check
                  type="radio"
                  label="Men"
                  name="productType"
                  id="men"
                  value="men"
                  checked={newProduct.type === "men"}
                  onChange={() => setNewProduct({ ...newProduct, type: "men" })}
                />
                <BootstrapForm.Check
                  type="radio"
                  label="Women"
                  name="productType"
                  id="women"
                  value="women"
                  checked={newProduct.type === "women"}
                  onChange={() => setNewProduct({ ...newProduct, type: "women" })}
                />
              </Col>
            </BootstrapForm.Group>
          </BootstrapForm>
        </Modal.Body>
        <Modal.Footer>
          <Button
            variant="secondary"
            onClick={() => setShowAddProductModal(false)}
          >
            Close
          </Button>
          <Button variant="primary" onClick={handleAddProductSubmit}>
            Add Product
          </Button>
        </Modal.Footer>
      </Modal>
    </div>
  );
}

export default Product;
