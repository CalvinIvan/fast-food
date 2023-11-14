import { getCart } from "@/lib/db/cart";

export default async function CartPage() {
  const cart = await getCart();
  return (
    <div>
      <h1>Cart Page</h1>
      {/* {cart?.items.map((item) => (
        <
      )} */}
    </div>
  );
}
