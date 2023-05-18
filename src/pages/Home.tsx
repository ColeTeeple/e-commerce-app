import React, { useRef, useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { Button, Form } from "react-bootstrap";
import { Link, Navigate, useNavigate } from "react-router-dom";
import "../App.css";

export function Home() {
  const { createUser } = useShoppingCart();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e: any) => {
    e.preventDefault();
    try {
      await createUser(username, password);
      navigate("/store");
    } catch (error) {
      console.log((error as Error).message);
    }
  };

  return (
    <>
      <div
        className="form-container"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
        }}
      >
        <h1 style={{ marginBottom: "120px" }}>Sign Up</h1>
        <h4 style={{ marginBottom: "20px" }}>
          Already have an account? <Link to="/signin">Sign in</Link>
        </h4>
        
        <Form style={{ minWidth: "400px", textAlign: "center" }}>
          <Form.Group id="username">
            <Form.Label>Username:</Form.Label>
            <Form.Control
              id="username"
              type="text"
              onChange={(event) => setUsername(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Form.Group id="password">
            <Form.Label>Password:</Form.Label>
            <Form.Control
              id="password"
              type="password"
              onChange={(event) => setPassword(event.target.value)}
            ></Form.Control>
          </Form.Group>
          <Button
            onClick={handleSubmit}
            style={{ marginTop: "10px" }}
            variant="dark"
          >
            Submit
          </Button>
        </Form>
      </div>
    </>
  );
}
