import { getCart } from "@/lib/db/cart";
import CartEntry from "./CartEntry";
import { setProductQuantity } from "./actions";
import Link from "next/link";

export const metadata = {
  title: "Your Cart",
};
export default async function CartPage() {
  const cart = await getCart();

  return (
    <div className="flex flex-col items-center">
      <h1 className="mb-3 text-3xl font-semibold text-white/80">
        Items in Cart:
      </h1>
      <ul>
        {cart?.items.map((item) => (
          <CartEntry
            key={item.id}
            cartItem={item}
            setProductQuantity={setProductQuantity}
          />
        ))}
      </ul>
      {!cart?.items.length && (
        <>
          <p className="text-4xl font-bold text-white/75">Cart is empty!</p>
          <Link href="/">
            <div className="btn mt-2 w-[10rem] border-none  bg-red-500 text-white transition hover:scale-105 hover:bg-white/10">
              Back to home
            </div>
          </Link>
        </>
      )}
      <div className="flex w-4/5 justify-center p-5">
        <Link href="/">
          <div className="btn mt-2 w-[10rem] border-none bg-red-500 text-lg text-white transition hover:scale-105 hover:bg-white/10">
            Checkout
          </div>
        </Link>
      </div>
    </div>
  );
}
