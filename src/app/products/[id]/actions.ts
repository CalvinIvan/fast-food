"use server";

import { createCart, getCart } from "@/lib/db/cart";
import { prisma } from "@/lib/prisma";
import { revalidatePath } from "next/cache";

export async function incrementProductQuantity(productId: string) {
  const cart = (await getCart()) ?? (await createCart());

  const inCart = cart.items.find((item) => item.productId === productId);

  if (inCart) {
    await prisma.cartItem.update({
      where: { id: inCart.id },
      data: { quantity: { increment: 1 } },
    });
  } else {
    await prisma.cartItem.create({
      data: {
        cartId: cart.id,
        productId,
        quantity: 1,
      },
    });
  }
  revalidatePath("/products/[id]", "page");
}
