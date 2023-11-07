import Image from "next/image";
import Background from "@/assets/bg.png";
export default function Home() {
  return (
    <>
      <div className="max-h-screen overflow-hidden">
        <Image
          src={Background}
          alt="Background"
          width={2000}
          className="blur-[2.5rem]"
          priority
        />
      </div>
      <div></div>
    </>
  );
}
