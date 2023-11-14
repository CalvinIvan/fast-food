import { prisma } from "@/lib/prisma";
import ProductCard from "../components/ProductCard";

export default async function Menu() {
  const pizza = await prisma.product.findMany({
    where: {
      category: {
        equals: "Pizza",
      },
    },
    orderBy: {
      price: "asc",
    },
  });
  const burger = await prisma.product.findMany({
    where: {
      category: {
        equals: "Burger",
      },
    },
    orderBy: {
      price: "asc",
    },
  });
  return (
    <section className="mt-16 flex w-[95%]  flex-col">
      <h1
        id="featured"
        className="flex scroll-mt-[5rem] flex-col text-center text-5xl font-bold text-white"
      >
        Full Menu
      </h1>
      <section className="mt-5">
        <h1
          id="featured"
          className="scroll-mt-[5rem] text-5xl font-bold text-white "
        >
          Pizzas
        </h1>
        <div className="my-4 grid w-[95%] grid-cols-1  gap-2 md:ml-0 lg:mx-16 lg:grid-cols-2 xl:mx-2 xl:grid-cols-3">
          {pizza.slice().map((pizza) => (
            <ProductCard product={pizza} key={pizza.id} />
          ))}
        </div>
      </section>

      <section className="mt-5">
        <h1
          id="featured"
          className="scroll-mt-[5rem] text-5xl font-bold text-white "
        >
          Burgers
        </h1>
        <div className="my-4 grid w-[95%] grid-cols-1  gap-2 md:ml-0 lg:mx-16 lg:grid-cols-2 xl:mx-2 xl:grid-cols-3">
          {burger.slice().map((burger) => (
            <ProductCard product={burger} key={burger.id} />
          ))}
        </div>
      </section>
    </section>
  );
}
