import { Cart, Prisma } from "@prisma/client";
import { cookies } from "next/dist/client/components/headers";
import { prisma } from "../prisma";

export type CartWithProducts = Prisma.CartGetPayload<{
  include: { items: { include: { product: true } } };
}>;

export type CartItemWithProducts = Prisma.CartItemGetPayload<{
  include: { product: true };
}>;

export type ShoppingCart = CartWithProducts & {
  size: number;
  subtotal: number;
};

export async function createCart(): Promise<ShoppingCart> {
  const newCart = await prisma.cart.create({
    data: {},
  });

  cookies().set("userCartId", newCart.id);
  return {
    items: [],
    ...newCart,
    size: 0,
    subtotal: 0,
  };
}

export async function getCart(): Promise<ShoppingCart | null> {
  const userCartId = cookies().get("userCartId")?.value;
  const cart = userCartId
    ? await prisma.cart.findUnique({
        where: { id: userCartId },
        include: { items: { include: { product: true } } },
      })
    : null;

  if (!cart) {
    return null;
  }

  return {
    ...cart,
    size: cart.items.reduce((total, item) => total + item.quantity, 0),
    subtotal: cart.items.reduce(
      (total, item) => total + item.quantity * item.product.price,
      0,
    ),
  };
}
