"use client";
import { useState, useTransition } from "react";
import { AiOutlineShoppingCart } from "react-icons/ai";
import { incrementProductQuantity } from "./actions";

interface AddToCartButtonProps {
  productId: string;
  incrementProductQuantity: (productId: string) => Promise<void>;
}

export default function AddToCartButton({ productId }: AddToCartButtonProps) {
  const [isPending, startTransition] = useTransition();
  const [success, setSuccess] = useState(false);
  return (
    <div className="flex items-center gap-2">
      <button
        className="mt-2 flex flex-row items-center gap-2 rounded-xl bg-red-500 p-2 text-center font-semibold text-white transition hover:scale-105"
        onClick={() => {
          setSuccess(false);
          startTransition(async () => {
            incrementProductQuantity(productId);
            setSuccess(true);
          });
        }}
      >
        Add To Cart
        <AiOutlineShoppingCart />
      </button>
      {isPending && <span className="loading loading-spinner loading-lg" />}
      {!isPending && success && (
        <span className="text-white">Added to cart!</span>
      )}
    </div>
  );
}
