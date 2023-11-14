"use client";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface AddToCartButtonProps {
  productId: string;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  return (
    <div className="flex items-center gap-2">
      <button className="mt-2 flex flex-row items-center gap-2 rounded-xl bg-red-500 p-2 text-center font-semibold text-white transition hover:scale-105">
        Add To Cart
        <AiOutlineShoppingCart />
      </button>
    </div>
  );
}
