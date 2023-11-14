"use client";

import { CartItemWithProducts } from "@/lib/db/cart";
import { formatPrice } from "@/lib/format";
import Image from "next/image";
import Link from "next/link";
import { useTransition } from "react";
import { IoIosCloseCircleOutline } from "react-icons/io";

interface CartEntryProps {
  cartItem: CartItemWithProducts;
  setProductQuantity: (productId: string, quantity: number) => Promise<void>;
}

export default function CartEntry({
  cartItem: { product, quantity },
  setProductQuantity,
}: CartEntryProps) {
  const [isPending, startTransition] = useTransition();
  const quantityOptions: JSX.Element[] = [];
  for (let i = 1; i <= 10; i++) {
    quantityOptions.push(
      <option value={i} key={i}>
        {i}
      </option>,
    );
  }
  return (
    <div className="card relative left-1/2 mt-2 w-[50vw] -translate-x-1/2 bg-white/[0.1] shadow-md transition hover:shadow-2xl">
      <div className="card-body flex flex-col  items-center md:flex-row">
        <Link href={"/products/" + product.id}>
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={150}
            height={150}
            className="mr-10 rounded-xl"
          />
        </Link>

        <div className="flex flex-col">
          <Link href={"/products/" + product.id}>
            <span className="text-xl font-bold text-white transition hover:underline">
              {product.name}
            </span>
          </Link>

          <span>
            <span className="text-lg font-bold text-white">Quantity: </span>
            <select
              className="select max-w-[80px] scale-[0.85] rounded-full text-lg"
              defaultValue={quantity}
              onChange={(e) => {
                const newQuantity = parseInt(e.currentTarget.value);
                startTransition(async () => {
                  await setProductQuantity(product.id, newQuantity);
                });
              }}
            >
              {quantityOptions}
            </select>
          </span>
          <span className="text-xl font-bold text-white">
            {formatPrice(product.price * quantity)}
            {isPending && (
              <span className="loading loading-spinner loading-md ml-3 mt-2" />
            )}
          </span>
          <span
            className="mt-2 text-2xl transition duration-300 hover:cursor-pointer hover:text-slate-50/100"
            onClick={(e) => {
              const newQuantity = 0;
              startTransition(async () => {
                await setProductQuantity(product.id, newQuantity);
              });
            }}
          >
            <span className="absolute left-[-0.5rem] top-[-0.5rem] text-white/75 opacity-100 transition hover:scale-105 hover:text-white">
              <IoIosCloseCircleOutline />
            </span>
          </span>
        </div>
        <div className="w-[60vw] p-10 text-center text-white lg:w-2/3">
          {product.description}
        </div>
      </div>
    </div>
  );
}
