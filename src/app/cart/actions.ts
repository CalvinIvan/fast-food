"use server";

import { getCart, createCart } from "@/lib/db/cart";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function setProductQuantity(productId: string, quantity: number) {
  const cart = (await getCart()) ?? (await createCart());

  const inCart = cart.items.find((item) => item.productId === productId);

  if (quantity === 0) {
    if (inCart) {
      await prisma.cartItem.delete({
        where: { id: inCart.id },
      });
    }
  } else {
    if (inCart) {
      await prisma.cartItem.update({
        where: { id: inCart.id },
        data: { quantity },
      });
    } else {
      await prisma.cartItem.create({
        data: {
          cartId: cart.id,
          productId,
          quantity,
        },
      });
    }
  }
  revalidatePath("/cart");
}
