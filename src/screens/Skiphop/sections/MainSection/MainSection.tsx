import React, { useState } from "react";
import { CheckIcon, ChevronDownIcon, InfoIcon } from "lucide-react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";
import { ColorOption, colorOptions } from "./colorOptions";

export const MainSection = (): JSX.Element => {
  const [selectedColor, setSelectedColor] = useState<ColorOption>(colorOptions[0]);
  const [selectedImage, setSelectedImage] = useState<string>(colorOptions[0].primaryImage);

  const features = [
    "Converts to a toddler kitchen helper as baby grows",
    "Easily folds for storage",
    "Seat reclines for infant feeding",
  ];

  return (
    <section className="w-full bg-[#f2f2f2]">
      <div className="w-full px-4 lg:px-8 2xl:px-[121px]">
        <div className="flex flex-col lg:flex-row items-start gap-8 py-8 lg:py-12">
          {/* Left column - Image gallery */}
          <div className="flex gap-4 lg:gap-6 items-start w-full lg:w-[65%] xl:w-[70%]">
            {/* Thumbnails */}
            <div className="hidden lg:flex flex-col gap-4">
              {selectedColor.thumbnails.map((thumb, index) => (
                <Card
                  key={index}
                  className={`w-[60px] xl:w-[88px] h-[60px] xl:h-[88px] rounded-[20px] cursor-pointer transition-all overflow-hidden flex-shrink-0 ${
                    selectedImage === thumb
                      ? "border-2 border-[#2f2f2f]"
                      : "border border-[#d6d6d633] hover:border-[#d6d6d6]"
                  }`}
                  onClick={() => setSelectedImage(thumb)}
                >
                  <img
                    src={thumb}
                    alt={`Product view ${index + 1}`}
                    className="w-full h-full object-cover"
                  />
                </Card>
              ))}
            </div>

            {/* Main image */}
            <div className="relative w-full h-[400px] lg:h-[600px] xl:h-[800px] bg-[#f2f2f2] rounded-[20px] overflow-hidden">
              <img
                src={selectedImage}
                alt="Product main view"
                className="w-full h-full object-contain"
              />
              <button className="absolute top-4 right-4 p-2 bg-white rounded-full shadow-lg">
                <img className="w-4 lg:w-6 h-4 lg:h-6" alt="Zoom" src="/frame-7.svg" />
              </button>
            </div>
          </div>

          {/* Right column - Product details */}
          <div className="flex flex-col gap-6 lg:gap-8 w-full lg:w-[35%] xl:w-[30%]">
            {/* Breadcrumb */}
            <div className="flex items-center gap-2 text-[#2e2e2e7a] text-sm lg:text-base">
              <span>Baby Gear</span>
              <span>•</span>
              <span>Chair</span>
            </div>

            {/* Product title and price */}
            <div>
              <h1 className="text-3xl lg:text-4xl font-medium mb-4 lg:mb-6 font-['Switzer-Medium',Helvetica]">
                EON 4-in-1 High Chair
              </h1>
              <div className="flex items-center gap-4">
                <span className="text-3xl lg:text-4xl font-bold">$165</span>
                <span className="text-xl lg:text-2xl text-gray-500 line-through">$210</span>
              </div>
            </div>

            {/* Features */}
            <div className="flex flex-col gap-3">
              {features.map((feature, index) => (
                <div key={index} className="flex items-center gap-2">
                  <CheckIcon className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  <span className="text-gray-600 font-['Plus_Jakarta_Sans',Helvetica] text-base lg:text-lg">
                    {feature}
                  </span>
                </div>
              ))}
            </div>

            {/* Color selection */}
            <div className="py-4">
              <h3 className="text-base lg:text-lg font-medium mb-4 font-['Plus_Jakarta_Sans',Helvetica]">
                Color
              </h3>
              <div className="flex gap-3">
                {colorOptions.map((option) => (
                  <button
                    key={option.id}
                    className={`w-8 h-8 rounded-full p-0.5 ${
                      selectedColor.id === option.id
                        ? "border-2 border-[#d0d0d0]"
                        : "border border-gray-200"
                    }`}
                    onClick={() => {
                      setSelectedColor(option);
                      setSelectedImage(option.primaryImage);
                    }}
                  >
                    <span
                      className="block w-full h-full rounded-full"
                      style={{ backgroundColor: option.color }}
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Shipping info */}
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="shipping" className="border-t border-b">
                <AccordionTrigger className="py-4">
                  <span className="font-['Plus_Jakarta_Sans',Helvetica] text-left">
                    Free Shipping & 1 Hour Pickup
                  </span>
                </AccordionTrigger>
                <AccordionContent>
                  <div className="py-4 text-gray-600 font-['Plus_Jakarta_Sans',Helvetica]">
                    <p>Free shipping on orders over $35</p>
                    <p>Available for pickup at your nearest store</p>
                  </div>
                </AccordionContent>
              </AccordionItem>
            </Accordion>

            {/* Add to cart and buy now buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="flex-1 h-12 lg:h-14 bg-[#ed2d23] hover:bg-[#d42820] font-['Switzer-Medium',Helvetica]">
                Add to Cart
              </Button>
              <Button
                variant="outline"
                className="flex-1 h-12 lg:h-14 font-['Switzer-Medium',Helvetica]"
              >
                Buy Now
              </Button>
            </div>

            {/* Payment info */}
            <div className="flex items-center gap-2 text-sm text-gray-600 font-['Plus_Jakarta_Sans',Helvetica] flex-wrap">
              <span>Or 4 payments of $42.00 with</span>
              <img 
                src="after-pay.svg" 
                alt="Afterpay" 
                className="h-4" 
              />
              <InfoIcon className="w-4 h-4" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};