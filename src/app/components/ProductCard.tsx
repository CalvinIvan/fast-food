import { Product } from "@prisma/client";
import Image from "next/image";
import Link from "next/link";
import PriceTag from "./pricetag";

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className=" my-5 rounded-2xl bg-white/[0.35] p-5 opacity-[0.85] transition hover:opacity-100 sm:w-[25rem]">
      <Link
        href={"/products/" + product.id}
        className="card bg-base-100 w-full transition hover:scale-[1.02] hover:shadow-2xl"
      >
        <figure>
          <Image
            src={product.imageUrl}
            alt=""
            width={800}
            height={400}
            className="h-48 rounded-lg object-cover"
          />{" "}
        </figure>
        <div className="card-body text-gray-700">
          <div className="my-2 flex flex-row justify-start">
            <h2 className="card-title text-lg font-semibold">{product.name}</h2>
            <PriceTag price={product.price} />
          </div>
          <p className="">{product.description}</p>
        </div>
      </Link>
    </div>
  );
}
