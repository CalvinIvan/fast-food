"use client";

import { CartItemWithProducts } from "@/lib/db/cart";

interface CartEntryProps {
  cartItem: CartItemWithProducts;
}
export default function CartEntry({ cartItem }: CartEntryProps) {
  return (
    <div>
      <div>
        <h1>{cartItem.product.name}</h1>
        <p>{cartItem.product.description}</p>
        <p>{cartItem.product.price}</p>
      </div>
    </div>
  );
}
