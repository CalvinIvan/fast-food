import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return (
    <span
      className={`badge flex w-16 items-center justify-center rounded-full bg-white/60 px-2 font-semibold text-gray-700 ${className}`}
    >
      {formatPrice(price)}
    </span>
  );
}
