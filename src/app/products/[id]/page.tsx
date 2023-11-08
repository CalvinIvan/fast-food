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
    <>
      <section className="relative mx-auto flex items-center justify-center">
        <Image
          src={Background}
          alt="Background"
          width={50}
          className="w-[100%] blur-[3rem] sm:h-[55rem]"
          priority
        />
      </section>
      <section className="absolute top-16 mx-auto w-[95vw]">
        <div className="flex flex-col border border-black p-4 md:flex-row md:items-center md:justify-center">
          <Image
            src={product.imageUrl}
            alt={product.name}
            width={400}
            height={50}
            priority
            className="w-[95vw] rounded-lg shadow-xl md:w-[50vw] lg:w-[25vw]"
          />
          <div className="mt-2 flex w-auto flex-col rounded-xl border border-black bg-white/20 p-4 md:mx-2 md:w-[50%] lg:w-[25vw]">
            <h1 className="my-5 text-4xl font-bold text-white/90 sm:text-5xl">
              {" "}
              {product.name}
            </h1>

            <PriceTag
              price={product.price}
              className="badge my-2 border-none bg-white/50 text-gray-700"
            />
            <p className="font-medium text-white/90 md:w-auto lg:w-[25vw]">
              {product.description}
            </p>

            <Link href="/">
              <div className="btn mt-2 w-[10rem] rounded-xl border-none bg-white/50 text-center font-semibold text-gray-700 transition hover:scale-105">
                Back to home
              </div>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
