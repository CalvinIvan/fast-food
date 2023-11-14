"use client";

import { ShoppingCart } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

interface ShoppingCartButtonProps {
  cart: ShoppingCart | null;
}

export default function ShoppingCartButton({ cart }: ShoppingCartButtonProps) {
  function closeDropdown() {
    const dropdown = document.activeElement as HTMLElement;
    if (dropdown) dropdown.blur();
  }
  return (
    <div className="dropdown dropdown-end mr-5 mt-2">
      <label
        tabIndex={0}
        className="btn-ghost btn-circle btn flex flex-row items-center justify-center"
      >
        <div className="relative">
          <span className="text-3xl text-slate-50/75">
            <AiOutlineShoppingCart />
          </span>
          <div className="indicator absolute right-[-0.5rem] top-0">
            <span className="badge indicator-item badge-md border border-none bg-transparent text-xl font-semibold text-white/75">
              {cart?.size || 0}
            </span>
          </div>
        </div>
      </label>
      <div
        tabIndex={0}
        className="card dropdown-content card-compact bg-base-100 z-30 mt-3 w-52 shadow-lg"
      >
        <div className="card-body">
          <span className="text-md text-center font-medium transition hover:scale-[1.02]">
            {cart?.size || 0} Item(s) - {formatPrice(cart?.subtotal || 0)}
          </span>
          <div className="card-actions">
            <Link
              href="/cart"
              className="btn btn-block bg-gradient-to-r from-[#ff7b00]/75 to-[#ff9e00]"
              onClick={closeDropdown}
            >
              <span className="text-white">View Cart</span>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
