import { ArrowRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { products } from "./products";

export const Section2ByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-12 lg:gap-20 px-4 lg:px-8 2xl:px-[121px] pt-0 pb-12 lg:pb-20 w-full">
      <div className="flex items-center justify-between w-full">
        <div className="flex-col items-start gap-[4.5px]">
          <h2 className="[font-family:'Switzer-Medium',Helvetica] font-medium text-[#2e2e2e] text-3xl lg:text-5xl tracking-[-2.00px] leading-[1.2]">
            Recommended for you
          </h2>
        </div>

        <Button
          variant="ghost"
          className="hidden lg:flex items-center gap-3 px-6 py-[22px] rounded-[100px]"
        >
          <span className="[font-family:'Switzer-Medium',Helvetica] font-medium text-[#2e2e2e] text-base tracking-[-0.64px] leading-6">
            View all
          </span>
          <ArrowRightIcon className="w-5 h-5" />
        </Button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-14 w-full">
        {products.map((product) => (
          <Card key={product.id} className="flex flex-col w-full border-none shadow-none">
            <div className="relative aspect-square bg-white rounded-2xl overflow-hidden">
              <img
                className="absolute inset-0 w-full h-full object-contain p-8"
                alt={`${product.title} image`}
                src={product.imageSrc}
              />
            </div>

            <CardContent className="flex flex-col items-start gap-0.5 pt-5 px-0">
              <h3 className="[font-family:'Switzer-Medium',Helvetica] font-medium text-[#2e2e2e] text-lg lg:text-[22px] tracking-[-1.10px] leading-[1.2] line-clamp-2">
                {product.title}
              </h3>
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#727679] text-sm tracking-[-0.72px] leading-[27px]">
                {product.category}
              </p>
              <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#2e2e2e] text-lg tracking-[-0.56px] leading-[21px]">
                {product.price}
              </p>
            </CardContent>
          </Card>
        ))}
      </div>

      <Button
        variant="ghost"
        className="flex lg:hidden items-center gap-3 px-6 py-[22px] rounded-[100px] mx-auto"
      >
        <span className="[font-family:'Switzer-Medium',Helvetica] font-medium text-[#2e2e2e] text-base tracking-[-0.64px] leading-6">
          View all
        </span>
        <ArrowRightIcon className="w-5 h-5" />
      </Button>
    </section>
  );
};