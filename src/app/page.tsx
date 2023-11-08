import Image from "next/image";
import Background from "@/assets/bg1.png";
import { prisma } from "@/lib/prisma";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <>
      <section className="md:mt-6">asdf</section>
      <section className="lg:mt-12">
        <div className="hero hover:bg-base-100/[0.35] rounded-xl  bg-gradient-to-r from-red-500/75 to-orange-500/75 transition duration-500">
          <div className="hero-content flex flex-col p-4 md:flex-col md:items-center md:justify-center lg:flex-row">
            <Link
              href={"/products/" + products[0].id}
              className="transition hover:scale-[1.02]"
            >
              <Image
                src={products[0].imageUrl}
                alt={products[0].name}
                width={800}
                height={800}
                className="rounded-lg shadow-xl"
                priority
              />
            </Link>
            <div className="mx-2 w-[95%] lg:mx-2">
              <h1 className="text-3xl font-bold text-white sm:mb-5">
                Featured Item!
              </h1>
              <Link href={"/products/" + products[0].id}>
                <h1 className="text-5xl font-bold text-white transition hover:scale-[1.01]">
                  {products[0].name}
                </h1>
              </Link>
              <p className="py-6 font-semibold text-slate-50">
                {products[0].description}
              </p>
              <Link
                href={"/products/" + products[0].id}
                className="btn mt-2 w-[10rem] rounded-xl border-none bg-gradient-to-r from-red-500/90 to-orange-500/90 p-2 text-center font-semibold text-white transition hover:text-white/75"
              >
                View Item!
              </Link>
            </div>
          </div>
        </div>
        <div className="my-4 grid grid-cols-1 gap-2 md:ml-0 lg:mx-16 lg:grid-cols-2 xl:mx-2 xl:grid-cols-3">
          {products.slice(1).map((product) => (
            <ProductCard product={product} key={product.id} />
          ))}
        </div>
      </section>
    </>
  );
}
