import { CheckIcon, ChevronDownIcon, InfoIcon } from "lucide-react";
import React from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "../../../../components/ui/accordion";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";
import { Separator } from "../../../../components/ui/separator";

export const SectionByAnima = (): JSX.Element => {
  // Thumbnail images data
  const thumbnails = [
    { selected: true },
    { selected: false },
    { selected: false },
    { selected: false },
  ];

  // Color options data
  const colorOptions = [
    { color: "#a3ad99", selected: true },
    { color: "#d1d1d1", selected: false },
    { color: "#637380", selected: false },
    { color: "#d7d2c5", selected: false },
  ];

  // Product features data
  const features = [
    "Converts to a toddler kitchen helper as baby grows",
    "Easily folds for storage",
    "Seat reclines for infant feeding",
  ];

  return (
    <section className="flex items-center gap-6 px-6 py-0 relative w-full md:px-[121px]">
      <div className="flex items-center gap-[34px] relative">
        {/* Thumbnail column */}
        <div className="flex flex-col items-start gap-5 relative">
          {thumbnails.map((thumbnail, index) => (
            <Card
              key={index}
              className={`relative w-[88px] h-[88px] bg-white rounded-3xl overflow-hidden ${thumbnail.selected ? "border-2 border-solid border-[#2f2f2f]" : ""}`}
            >
              <img
                className="absolute w-full h-full top-0 left-0 object-cover"
                alt={`Product thumbnail ${index + 1}`}
              />
            </Card>
          ))}
        </div>

        {/* Main product image */}
        <div className="relative w-full max-w-[828px] h-[1023px] bg-[#f2f2f2]">
          <div className="relative w-[710px] h-[886px] top-[72px] left-[62px]">
            <img
              className="absolute w-[709px] h-[886px] top-0 left-0 object-cover"
              alt="Product main image"
            />
            <img
              className="absolute w-7 h-7 top-2 left-[682px]"
              alt="Zoom"
              src="/frame-7.svg"
            />
          </div>
        </div>
      </div>

      {/* Product details */}
      <div className="flex flex-col w-full max-w-[704px] items-start gap-10 relative">
        {/* Header section */}
        <div className="flex flex-col items-start gap-10 relative self-stretch w-full">
          {/* Breadcrumbs */}
          <div className="flex items-center gap-1.5 relative self-stretch w-full">
            <div className="inline-flex flex-col items-start relative">
              <div className="relative w-fit mt-[-1.00px] text-[#2e2e2e7a] text-base tracking-[-0.40px] leading-[21px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium whitespace-nowrap">
                Baby Gear
              </div>
            </div>

            <div className="relative w-fit mt-[-1.00px] [font-family:'Inter',Helvetica] font-medium text-[#2e2e2e7a] text-sm tracking-[-0.56px] leading-[21px] whitespace-nowrap">
              •
            </div>

            <div className="inline-flex flex-col items-start relative">
              <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#2e2e2e7a] text-base tracking-[-0.40px] leading-[21px] whitespace-nowrap">
                Chair
              </div>
            </div>
          </div>

          {/* Product title and price */}
          <div className="flex flex-col items-start gap-6 relative self-stretch w-full">
            <div className="flex w-full max-w-[586px] items-center gap-6 relative">
              <h1 className="relative flex-1 mt-[-1.00px] [font-family:'Switzer-Medium',Helvetica] font-medium text-[#2e2e2e] text-5xl tracking-[-2.00px] leading-[58px]">
                EON 4-in-1 High Chair
              </h1>
            </div>

            <div className="flex items-center justify-between w-full pr-5">
              <div className="flex items-center gap-5 relative">
                <div className="relative w-[94px] h-12 mt-[-1.00px] font-normal text-[42px] tracking-[0] leading-[30px] [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#2e2e2e]">
                  $165
                </div>

                <div className="relative w-fit font-light text-2xl tracking-[0] leading-[30px] line-through whitespace-nowrap [font-family:'Plus_Jakarta_Sans',Helvetica] text-[#2e2e2e]">
                  $210
                </div>
              </div>

              <div className="flex items-center gap-0.5 relative">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="#FFD700"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Features list */}
        <div className="flex flex-col w-full max-w-[451px] items-start gap-3 relative">
          {features.map((feature, index) => (
            <div
              key={index}
              className="flex items-center gap-2 relative self-stretch w-full"
            >
              <CheckIcon className="w-3 h-3 text-[#505050]" />
              <div className="relative flex-1 mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#505050] text-lg tracking-[-0.64px] leading-6">
                {feature}
              </div>
            </div>
          ))}
        </div>

        {/* Product options */}
        <div className="flex flex-col items-start gap-4 relative self-stretch w-full">
          {/* Color selection */}
          <div className="flex flex-col items-start gap-2.5 pr-5 w-full">
            <div className="flex items-center justify-between py-5 w-full relative overflow-hidden">
              <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#2e2e2e] text-lg tracking-[-0.64px] leading-6 whitespace-nowrap">
                Colour
              </div>
              <Separator className="absolute w-[684px] h-px top-[72px] left-[120px]" />
              <div className="flex items-center gap-1.5 relative">
                {colorOptions.map((option, index) => (
                  <div
                    key={index}
                    className={`relative w-8 h-8 bg-white rounded-full overflow-hidden ${option.selected ? "border-2 border-solid border-[#d0d0d0]" : ""}`}
                  >
                    <div
                      className="relative w-5 h-5 top-1.5 left-1.5 rounded-[10px]"
                      style={{ backgroundColor: option.color }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Shipping information */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="shipping" className="border-0">
              <div className="flex items-center justify-between px-0 py-5 w-full relative overflow-hidden">
                <AccordionTrigger className="hover:no-underline p-0">
                  <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#2e2e2e] text-lg tracking-[-0.64px] leading-6 whitespace-nowrap">
                    Free Shipping 1 Hour Pickup
                  </div>
                </AccordionTrigger>
                <Separator className="absolute w-[684px] h-px top-[64px] left-[120px]" />
                <div className="flex items-center gap-6 relative ml-[-99.53px]">
                  <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#888888] text-lg tracking-[-0.64px] leading-6 whitespace-nowrap">
                    Select a Store
                  </div>
                  <ChevronDownIcon className="w-5 h-5 rotate-180" />
                </div>
              </div>
              <AccordionContent>
                {/* Shipping content would go here */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>

          {/* Details section */}
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="details" className="border-0">
              <div className="flex items-center justify-between px-0 py-5 w-full relative overflow-hidden">
                <AccordionTrigger className="hover:no-underline p-0">
                  <div className="relative w-fit [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#2e2e2e] text-lg tracking-[-0.64px] leading-6 whitespace-nowrap">
                    Details
                  </div>
                </AccordionTrigger>
                <Separator className="absolute w-[684px] h-px top-[64px] left-[120px]" />
              </div>
              <AccordionContent>
                {/* Details content would go here */}
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>

        {/* Call to action */}
        <div className="flex flex-col items-start justify-center gap-6 py-2 w-full">
          <div className="flex items-center gap-3 w-full">
            <Button className="flex-1 px-[220px] py-[22px] bg-[#ed2d23] text-white rounded-[100px] hover:bg-[#d42820]">
              <span className="[font-family:'Switzer-Medium',Helvetica] font-medium text-base tracking-[-0.64px] leading-6">
                Add to Cart
              </span>
            </Button>
            <Button
              variant="outline"
              className="flex-1 px-[220px] py-[22px] bg-[#2e2e2e14] text-[#2e2e2e] rounded-[100px] hover:bg-[#2e2e2e20] border-0"
            >
              <span className="[font-family:'Switzer-Medium',Helvetica] font-medium text-base tracking-[-0.64px] leading-6">
                Buy Now
              </span>
            </Button>
          </div>

          <div className="flex items-center gap-1 relative">
            <div className="relative w-fit mt-[-1.00px] [font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#505050] text-sm tracking-[-0.40px] leading-[22.5px] whitespace-nowrap">
              Or 4 payments of $42.00 with
            </div>
            <img
              className="relative w-[83px] h-[17.83px]"
              alt="Payment method logo"
            />
            <InfoIcon className="w-[17px] h-[17px]" />
          </div>
        </div>
      </div>
    </section>
  );
};
