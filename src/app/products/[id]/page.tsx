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
    <section className="md:h-[50rem]">
      <div className="mx-2 flex w-full flex-col rounded-xl bg-gradient-to-r from-red-500/50 to-orange-500/50 p-4 sm:mt-[10vh] sm:items-center lg:flex-row">
        <Image
          src={product.imageUrl}
          alt={product.name}
          width={400}
          height={50}
          priority
          className="mr-2 rounded-lg shadow-xl sm:h-72"
        />
        <div className="mt-2 flex w-full flex-col rounded-xl bg-gradient-to-r from-red-500/50 to-orange-500/50 p-4">
          <h1 className="my-5 text-5xl font-bold text-white/90">
            {" "}
            {product.name}
          </h1>

          <PriceTag
            price={product.price}
            className="badge flex w-16 items-center justify-center rounded-full bg-white/30 font-semibold text-white"
          />
          <p className="font-medium text-white/90 lg:w-[25vw]">
            {product.description}
          </p>

          <Link href="/" className="w-[8rem]">
            <div className="mt-2 w-[8rem] rounded-xl bg-gradient-to-r from-red-500/90 to-orange-500/90 p-2 text-center font-semibold text-white transition hover:scale-105">
              Back to home
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
