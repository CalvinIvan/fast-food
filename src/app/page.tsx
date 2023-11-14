import Image from "next/image";
import hero from "@/assets/hero3.png";
import { prisma } from "@/lib/prisma";
import ProductCard from "./components/ProductCard";
import Link from "next/link";

export default async function Home() {
  const products = await prisma.product.findMany({
    orderBy: { id: "desc" },
  });
  return (
    <>
      <section className="mt-[-10rem] md:mt-0">
        <div className="flex min-h-screen w-full flex-row text-white">
          <div className="relative flex w-full flex-col items-center justify-center p-5">
            <Image
              src={hero}
              alt="Hero"
              width={500}
              height={700}
              className="h-[20rem] w-[20rem] rounded-full opacity-90 md:h-[50rem] md:w-[50rem]"
            />
            <div className="absolute rounded-2xl bg-gray-700/75">
              <h1 className="flex w-[95vw] flex-col text-center text-2xl font-bold uppercase md:w-[30vw] md:text-5xl">
                Speedy Bites, <br />
                <span className="text-xl md:text-3xl">
                  {" "}
                  Speedy Service, Gourmet Taste!
                </span>
              </h1>
              <p className="mt-5 text-center text-2xl font-medium text-white">
                Delivery within 45 mins, or its{" "}
                <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-2xl font-bold uppercase text-transparent">
                  Free!
                </span>
              </p>
            </div>
          </div>
        </div>
      </section>
      <h1
        id="featured"
        className="scroll-mt-[1.5rem] text-5xl font-bold text-white sm:mb-5"
      >
        Featured Eats
      </h1>
      <section className="flex flex-col items-center">
        <div className="hero hover:bg-base-100/[0.35] rounded-xl bg-gradient-to-bl from-[#ff7b00] to-[#ffea00]/75 shadow-lg shadow-black/20 transition hover:scale-[1.02] hover:cursor-pointer">
          <div className="hero-content flex flex-col p-4 md:flex-col md:items-start md:justify-center lg:flex-row">
            <Link href={"/products/" + products[0].id}>
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
              <Link href={"/products/" + products[0].id}>
                <h1 className="text-5xl font-bold text-white transition hover:scale-[1.01]">
                  {products[0].name}
                </h1>
              </Link>
              <p className="py-6 font-medium text-slate-50">
                {products[0].description}
              </p>
              <Link
                href={"/products/" + products[0].id}
                className="btn mt-2 w-[10rem] rounded-xl border-none bg-[#FDC514]/50 p-2 text-center font-semibold text-white transition hover:text-white/75"
              >
                View Item!
              </Link>
            </div>
          </div>
        </div>
        <section className="flex w-[95%] flex-col lg:flex-row">
          <div className="my-4 grid w-[95%] grid-cols-1  gap-2 md:ml-0 lg:mx-16 lg:grid-cols-2 xl:mx-2 xl:grid-cols-3 ">
            {products.slice(1, 4).map((product) => (
              <ProductCard product={product} key={product.id} />
            ))}
          </div>
        </section>
        <h1 className="flex flex-row font-sans text-5xl font-bold text-white sm:mb-5">
          Check out our full{" "}
          <div className="ml-2 transition duration-300 hover:scale-105 hover:underline">
            <Link href="/menu">
              <span className="bg-gradient-to-r from-orange-300 to-orange-200 bg-clip-text text-transparent">
                menu!
              </span>
            </Link>
          </div>
        </h1>

        <h1
          id="about"
          className=" mt-24 scroll-mt-[1.5rem] text-5xl font-bold text-white sm:mb-5"
        >
          About Us
        </h1>
        <section className="w-[95%]">
          <p className="m-5 text-white">
            <span className="font-sans text-xl font-bold">
              Welcome to Speedy Bites: Where Speedy Service Meets Gourmet Taste!{" "}
            </span>
            <br />
            At Speedy Bites, we believe that fast food doesn&apos;t have to mean
            compromising on quality. Our passion for delicious, gourmet flavors
            combined with lightning-fast service sets us apart in the world of
            quick dining. Established with the vision to redefine fast food
            experiences, Speedy Bites combines the convenience of quick bites
            with the indulgence of gourmet cuisine.
            <br />
            <br />
            <span className="font-sans text-xl font-bold">Our Story </span>
            <br />
            Founded on the principle of providing mouthwatering meals without
            the wait, Speedy Bites opened its doors with a mission: to serve up
            delectable dishes prepared with the finest ingredients, all within
            moments of your order. Every item on our menu reflects our
            commitment to culinary excellence and unparalleled efficiency.
            <br />
            <br />
            <span className="font-sans text-xl font-bold">
              Speedy Service, Gourmet Taste!{" "}
            </span>
            <br />
            Our slogan, &quot;Speedy Service, Gourmet Taste!&quot; encapsulates
            our dedication to delivering a dining experience that is both quick
            and exquisite. Whether you&apos;re on a lunch break, a family
            outing, or catching up with friends, Speedy Bites offers a menu
            crafted to tantalize your taste buds and satisfy your cravings in
            record time.
            <br />
            <br />
            <span className="font-sans text-xl font-bold">
              The Speedy Bites Difference{" "}
            </span>
            <br />
            What sets Speedy Bites apart is our unwavering dedication to
            quality. Our chefs meticulously curate each dish, ensuring that
            every bite bursts with flavor. From our crispy, golden fries to our
            succulent burgers and fresh salads, every item is made to order
            using the freshest ingredients sourced locally. We take pride in
            serving food that not only tastes exceptional but also nourishes the
            body and soul.
            <br />
            <br />
            <span className="font-sans text-xl font-bold">
              Community Commitment{" "}
            </span>
            <br />
            Speedy Bites is not just a fast food restaurant; we are a part of
            the community. We believe in giving back and supporting local
            initiatives. Through various community outreach programs and
            partnerships, we aim to make a positive impact beyond our restaurant
            walls.
            <br />
            <br />
            <span className="font-sans text-xl font-bold">
              Join Us for a Speedy Gourmet Experience{" "}
            </span>
            <br />
            We invite you to embark on a culinary journey where fast and gourmet
            seamlessly coexist. Visit Speedy Bites today and experience the
            thrill of Speedy Service and Gourmet Taste! Whether you&apos;re in a
            hurry or looking to savor a leisurely meal, we guarantee
            satisfaction with every bite. Thank you for choosing Speedy Bites,
            where your cravings meet their match, and your time is always
            valued.
            <br />
            <br />
            Sincerely,
            <br />
            The Speedy Bites Team
          </p>
        </section>
      </section>
    </>
  );
}
