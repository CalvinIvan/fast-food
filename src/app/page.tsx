import Image from "next/image";
import Background from "@/assets/bg1.png";
export default function Home() {
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
          <div className="absolute top-72 z-30">dfddfdf</div>
        </section>
      </section>
    </>
  );
}
