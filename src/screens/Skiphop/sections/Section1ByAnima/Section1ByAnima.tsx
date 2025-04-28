import { ChevronLeftIcon, ChevronRightIcon } from "lucide-react";
import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";
import { ScrollArea, ScrollBar } from "../../../../components/ui/scroll-area";

export const Section1ByAnima = (): JSX.Element => {
  // Product data for mapping
  const products = [
    {
      id: 1,
      title: "Zoo Stainless Steel Little Kid Straw Bottle",
      price: "$18.00",
      bgColor: "#ffc0c0",
      video: "/zoo-stainless.mp4",
    },
    {
      id: 2,
      title: "Zoo Big Kid Backpack - Narwhal",
      price: "$24.00",
      bgColor:"#e5d3e3",
      video: "/zoo-big-kid.mp4",       
    },
    {
      id: 3,
      title: "Garden Oasis Teethe & Play Baby Toy",
      price: "$10.00",
      bgColor: "#c9dace",
      video: "garden-oasis.mp4",
    },
    {
      id: 4,
      title: "EON 4-in-1 High Chair - Oat",
      price: "$165.00",
      bgColor: "#e4e0c8",
      video: "eon.mp4",
    }
  ];

  return (
    <section className="w-full py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="font-medium text-5xl tracking-[-2.00px] leading-[57.6px] text-[#2e2e2e] font-['Switzer-Medium',Helvetica]">
            Others also viewed
          </h2>

          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              size="icon"
              className="bg-[#f0f0f0] rounded-lg hover:bg-[#e0e0e0]"
            >
              <ChevronLeftIcon className="h-5 w-5" />
              <span className="sr-only">Previous</span>
            </Button>
            <Button
              variant="outline"
              size="icon"
              className="bg-[#f0f0f0] rounded-lg hover:bg-[#e0e0e0]"
            >
              <ChevronRightIcon className="h-5 w-5" />
              <span className="sr-only">Next</span>
            </Button>
          </div>
        </div>

        <ScrollArea className="w-full">
          <div className="flex gap-14 pb-4">
            {products.map((product) => (
              <Card
                key={product.id}
                className="flex-shrink-0 w-[474px] shadow-none border-none"
              >
                <CardContent className="p-0 space-y-5">
                  <div
                    className="h-[570px] p-5 rounded-2xl overflow-hidden flex items-center"
                    style={{ backgroundColor: product.bgColor }}
                  >
                    <div className="relative flex-1 h-[529px] rounded-xl overflow-hidden">
                      {product.video ? (
                        <video
                          className="w-full h-full object-cover"
                          autoPlay
                          loop
                          muted
                          playsInline
                        >
                          <source src={product.video} type="video/mp4" />
                        </video>
                      ) : (
                        <div className="w-full h-full bg-gray-100" />
                      )}
                    </div>
                  </div>

                  <div className="relative h-[94px]">
                    <div className="flex justify-between">
                      <div className="w-[398px]">
                        <h3 className="font-medium text-[22px] tracking-[-1.10px] leading-[33px] text-[#2e2e2e] font-['Switzer-Medium',Helvetica]">
                          {product.title}
                        </h3>
                        <p className="mt-5 font-medium text-lg tracking-[-0.56px] leading-[21px] text-[#2e2e2e] font-['Plus_Jakarta_Sans',Helvetica]">
                          {product.price}
                        </p>
                      </div>
                      <div className="w-[87px] h-[94px] bg-white">
                        {/* Thumbnail image would be here */}
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
      </div>
    </section>
  );
};