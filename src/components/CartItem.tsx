import React from 'react'
import { useShoppingCart } from '../context/ShoppingCartContext'
import storeItems from '../data/items.json';
import {Stack, Button} from 'react-bootstrap';
import { formatCurrency } from '../utilities/formatCurrency';

type CartItemProps = {
    id: number,
    quantity: number
}
export default function CartItem({id, quantity}: CartItemProps) {
    const {removeFromCart} = useShoppingCart();
    const item = storeItems.find(item => item.id === id);
    if (item == null) return null;
    const price = item.price * quantity;
    
  return (
    <Stack direction="horizontal" gap={2}>
        <img src={item.imgUrl} style={{width: "125px", height: "75px", objectFit: "cover"}} />
        <div className="me-auto">
        <div>
        {item.name} {quantity > 1 && (
        <span className="text-muted">x{quantity}</span>
        )}
        </div>
        </div>

        <div>
            {formatCurrency(price)}
        </div>
        <Button variant="outline-danger" size="sm" onClick={() => removeFromCart(id)}>&times;</Button>
        
    </Stack>
  )
}
