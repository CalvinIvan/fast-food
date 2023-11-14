import PriceTag from "@/app/components/pricetag";
import { prisma } from "@/lib/prisma";
import { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { cache } from "react";
import Background from "@/assets/bg1.png";
//import AddToCartButton from "./AddToCartButton";
//import { incrementProductQuantity } from "./actions";
import Link from "next/link";
import AddToCartButton from "./AddToCartButton";

interface ProductPageProps {
  params: {
    id: string;
  };
}

const getProduct = cache(async (id: string) => {
  const product = await prisma.product.findUnique({
    where: { id },
  });
  if (!product) notFound();
  return product;
});

export async function generateMetadata({
  params: { id },
}: ProductPageProps): Promise<Metadata> {
  const product = await getProduct(id);

  return {
    title: product.name,
    description: product.description,
  };
}

export default async function ProductPage({
  params: { id },
}: ProductPageProps) {
  const product = await getProduct(id);

  return (
    <section className="flex flex-col items-center justify-center">
      <div className="mx-2 mt-5 flex flex-col rounded-xl bg-gradient-to-r from-red-500/75 to-orange-500/75 p-4 sm:mt-[10vh] sm:items-center md:w-[75vw]">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={50}
          priority
          className="rounded-lg shadow-xl sm:h-72"
        />
        <div className="mt-2 flex w-full flex-col items-center rounded-xl p-4">
          <div>
            <h1 className="mt-5 text-5xl font-bold text-white/90">
              {" "}
              {product.name} <span></span>
            </h1>

            <PriceTag
              price={product.price}
              className="badge flex w-16 rounded-full bg-white/30 font-semibold text-white"
            />
          </div>
          <p className="mb-5 w-[40vw] font-medium text-white/90 md:w-[50%]">
            {product.description}
          </p>
          <AddToCartButton productId={product.id} />
          <Link href="/menu" className="w-[5rem]">
            <div className="mt-2 w-[5rem] rounded-xl bg-red-500 p-2 text-center font-semibold text-white transition hover:scale-105">
              Back
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
