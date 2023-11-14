import { formatPrice } from "@/lib/format";

interface PriceTagProps {
  price: number;
  className?: string;
}

export default function PriceTag({ price, className }: PriceTagProps) {
  return (
    <span
      className={`badge mb-2 flex w-16 items-center justify-center rounded-full border-none bg-white/50 px-2 font-semibold text-gray-700/75 ${className}`}
    >
      {formatPrice(price)}
    </span>
  );
}
