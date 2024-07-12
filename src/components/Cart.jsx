import React from "react";
import { useDispatch, useSelector } from "react-redux";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import { clearCart, removeToCart } from "../app/features/cartSlice/cartSlice";
import { ToastContainer, toast } from "react-toastify";
import { Link } from "react-router-dom";

const Cart = () => {
  const dispatch = useDispatch();
  const { items, totlePrice } = useSelector((state) => state.Cart);

  const handalRemoveCart = (product) => {
    dispatch(removeToCart(product));
    toast.error("Remove Product !");
  };

  const handalRemoveAll = () => {
    dispatch(clearCart());
    toast.error("All Product Remove !");
  };

  return (
    <div className="pb-3">
      <center>
        <h2>Cart</h2>
        {items.length == 0 ? (
          <h4>
            <Link to={"/"}>Continu To Shoping</Link>
          </h4>
        ) : (
          ""
        )}
      </center>
      <Row style={{ margin: 5 }} xs={1} md={2} lg={5} className="g-4">
        {items.map((product) => (
          <Col key={product.id}>
            <Card className="h-100">
              <Card.Img
                variant="top"
                src={product.imgUrl}
                alt={product.title}
              />
              <Card.Body>
                <Card.Title>{product.title}</Card.Title>
                <Card.Text>{product.description}</Card.Text>
                <Card.Text className="fw-bold">
                  ${product.price.toFixed(2)}
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <Button
                  onClick={() => handalRemoveCart(product.id)}
                  variant="danger"
                >
                  Remove to Cart
                </Button>
              </Card.Footer>
            </Card>
          </Col>
        ))}
      </Row>
      <div className="py-2">
        <h4>
          TotlePrice: <span>{totlePrice.toFixed(2)}</span>
        </h4>
      </div>
      <div>
        {items.length == 0 ? (
          <h4 style={{pointerEvents:"none"}}  className="btn btn-warning">
            CART EMPTY
          </h4>
        ) : (
          <button onClick={() => handalRemoveAll()} className="btn btn-danger">
            Remove All
          </button>
        )}
        {/* <button onClick={() => handalRemoveAll()} className="btn btn-danger">
          Remove All
        </button> */}
      </div>
      <ToastContainer position="top-center" />
    </div>
  );
};

export default Cart;
