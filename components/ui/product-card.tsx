"use client";

import { Product } from "@/types";
import Image from "next/image";
import IconButton from "@/components/ui/icon-button";
import { Expand, ShoppingBag } from "lucide-react";
import Currency from "./currency";

interface ProductCardProps {
  data: Product;
}
const ProductCard: React.FC<ProductCardProps> = ({ data }) => {
  return (
    <div className="bg-white group cursor-pointer rounded-xl border p-3 space-y-4">
      {/* image */}
      <div className="aspect-square rounded-xl bg-gray-100 relative">
        <Image
          alt="Image"
          src={data?.images?.[0].url}
          fill
          className="aspect-square object-cover round-md"
        />
        <div className="opacity-0 group-hover:opacity-100 transistion absolute w-full px-6 bottom-5">
          <div className="flex gap-x-6 justify-center">
            <IconButton
              onClick={() => {}}
              icon={<Expand size={20} className="text-grey-600" />}
            />
            <IconButton
              onClick={() => {}}
              icon={<ShoppingBag size={20} className="text-grey-600" />}
            />
          </div>
        </div>
      </div>
       {/* desc */}
       <div>
        <p className="font-semibold text-lg">
            {data.name}
        </p>
        <p className="tedt- sm text-grey-500">
            {data.category?.name}
        </p>
       </div>
       {/* price */}
       <div className="flex items-center justify-between">
            <Currency value = {data?.price} />
       </div>
    </div>
  );
};

export default ProductCard;
