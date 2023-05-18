import React from "react";
import { Offcanvas, Stack, Button } from "react-bootstrap";
import { useShoppingCart } from "../context/ShoppingCartContext";
import CartItem from "./CartItem";
import { formatCurrency } from "../utilities/formatCurrency";
import storeItems from "../data/items.json";

type ShoppingCartProps = {
  isOpen: boolean;
};

export default function ShoppingCart({ isOpen }: ShoppingCartProps) {
  const { closeCart, cartItems, cartQuantity, placeOrder, orders } =
    useShoppingCart();
  const quantity = cartQuantity;
  const orderId = orders.length == 0 ? 1 : orders.length + 1;
  const total = formatCurrency(
    cartItems.reduce((total, cartItem) => {
      const item = storeItems.find((i) => i.id === cartItem.id);
      return total + (item?.price || 0) * cartItem.quantity;
    }, 0)
  );

  return (
    <Offcanvas
      show={isOpen}
      placement="end"
      onHide={closeCart}
      style={{ textAlign: "center" }}
      id="offcanvas"
    >
      <Offcanvas.Header closeButton>
        <Offcanvas.Title>Cart</Offcanvas.Title>
      </Offcanvas.Header>
      <Offcanvas.Body>
        <Stack
          direction="vertical"
          gap={3}
          className="d-flex align-items-center"
        >
          {cartItems.map((item) => {
            return <CartItem key={item.id} {...item} />;
          })}
          <div className="fw-bold ms-auto fs-3">Total: {total}</div>
        </Stack>
        <Button
          onClick={() => placeOrder(orderId, total)}
          style={{ marginTop: "50px" }}
          variant="dark"
        >
          Place Order
        </Button>
      </Offcanvas.Body>
    </Offcanvas>
  );
}
