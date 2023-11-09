import Link from "next/link";

export default function NotFound() {
  return (
    <div className="mt-32 flex flex-col items-center text-center">
      <h1 className="font-sans text-5xl text-white">Page not found! :(</h1>
      <Link href="/" className="w-[8rem]">
        <div className="mt-10 w-[8rem] rounded-xl bg-white/50 p-2 text-center font-semibold text-white transition hover:scale-105">
          Back to home
        </div>
      </Link>
    </div>
  );
}
