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
        <section className="fixed min-h-screen bg-cover">
          <Image
            src={Background}
            alt="Background"
            width={1000}
            className="h-[100rem] w-[100vw] blur-[3rem]"
            priority
          />
        </section>
        <section className="">
          <div className="absolute top-20 z-30 w-[90vw] md:left-1/2  md:-translate-x-1/2">
            <div className="w-full items-center justify-center">
              <div className="hero bg-base-100/[0.2] hover:bg-base-100/[0.35] rounded-xl transition duration-500">
                <div className="hero-content flex-col lg:flex-row ">
                  <div className=" flex flex-col items-center justify-center rounded-xl bg-white/30 p-5 lg:flex-row">
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
                    <div className="m-2 w-[85vw] p-5 sm:w-[75%] ">
                      <h1 className="text-3xl font-bold text-gray-700 sm:mb-5">
                        Special of the day!
                      </h1>
                      <Link href={"/products/" + products[0].id}>
                        <h1 className="text-5xl font-bold text-gray-700 transition hover:scale-[1.01]">
                          {products[0].name}
                        </h1>
                      </Link>
                      <p className="w-[80%] py-6 font-medium text-gray-700">
                        {products[0].description}
                      </p>
                      <Link
                        href={"/products/" + products[0].id}
                        className="btn rounded-xl border-none bg-white/50 p-3 font-semibold text-gray-700"
                      >
                        View Special
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mx-auto my-4 grid w-[75vw] justify-center md:w-[50vw] md:grid-cols-1 lg:w-[85vw] lg:grid-cols-2 xl:w-[95vw] xl:grid-cols-3 2xl:w-[85vw]">
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
