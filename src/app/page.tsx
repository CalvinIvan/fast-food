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
      <section>
        {" "}
        <section className="relative min-h-screen bg-cover">
          <Image
            src={Background}
            alt="Background"
            width={50}
            className="h-[100%] w-[100%] blur-[3rem]"
            priority
          />
        </section>
        <section className="border border-black">
          <div className="absolute left-1/2 top-24 z-30 w-[75%] -translate-x-1/2 border border-red-500">
            <div>
              <div className="hero bg-base-100/[0.2] hover:bg-base-100/[0.35] rounded-xl transition duration-500">
                <div className="hero-content flex-col border border-black lg:flex-row">
                  <div className=" flex flex-row border border-black p-5">
                    <Link
                      href={"/products/" + products[0].id}
                      className="transition hover:scale-[1.02]"
                    >
                      <Image
                        src={products[0].imageUrl}
                        alt={products[0].name}
                        width={400}
                        height={800}
                        className="w-full max-w-lg rounded-lg shadow-xl"
                        priority
                      />
                    </Link>
                    <div className="m-2 w-[50%] border border-black p-5">
                      <h1 className="text-3xl font-bold text-white sm:mb-5">
                        Featured Item!
                      </h1>
                      <Link href={"/products/" + products[0].id}>
                        <h1 className="text-5xl font-bold text-white transition hover:scale-[1.01]">
                          {products[0].name}
                        </h1>
                      </Link>
                      <p className="w-[80%] py-6 font-semibold text-slate-50">
                        {products[0].description}
                      </p>
                      <Link
                        href={"/products/" + products[0].id}
                        className="btn border-none bg-gradient-to-r from-indigo-500 to-blue-500 text-white transition hover:scale-105"
                      >
                        View Item!
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="my-4 grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
                {products.slice(1).map((product) => (
                  <ProductCard product={product} key={product.id} />
                ))}
              </div>
            </div>
          </div>
        </section>
      </section>
    </>
  );
}
