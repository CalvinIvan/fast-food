"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { AiOutlineShoppingCart } from "react-icons/ai";
interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  return (
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn-ghost btn-circle btn">
        <div className="indicator">
          <span className="text-3xl text-slate-50/75">
            <AiOutlineShoppingCart />{" "}
          </span>
        </div>
      </label>
    </div>
  );
}
