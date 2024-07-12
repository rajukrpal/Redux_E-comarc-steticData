

import React from "react";
import { toast, ToastContainer } from 'react-toastify';

import Products from "../DemoData/data";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { useDispatch } from "react-redux";
import { addToCart } from "../app/features/cartSlice/cartSlice";

const Product = () => {
  const dispatch = useDispatch();
  const handalAddToCart =(product)=>{
    dispatch(addToCart(product));
    toast.success("Add Product !");
  }
  return (
    <div className="container py-4">
      <h2 className="text-center mb-4">Products</h2>
      <Row xs={1} md={2} lg={5} className="g-4">
        {Products.map((product) => (
          <Col key={product.id} >
            <Card className="h-100">
              <Card.Img variant="top" src={product.imgUrl} alt={product.title} />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="fw-bold">${product.price.toFixed(2)}</Card.Text>
              </Card.Body>
              <Card.Footer>
              <Button onClick={()=>handalAddToCart(product)} variant="primary">Add to Cart</Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Product;

