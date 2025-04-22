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
      video: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/8c26e4bb15708c3ca46e6bab314f7695883eb992?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=APbMC-2SXCeUeM-0qfO17P8Kw9I-PsAdsCLpBgwp4Q0qZv9pOTYuj6SBhtewyRqdi04e1QNFug8Bd4vfTKhGX2i2~18f8u0I9-B4OSt5DhXVnkvj-dKHx-Fjjq1YxVu9nfXdvS0Z5P414m728-MBiBc-hNRizq9vewQn0U~DPI~hi4AKXl2IPPdcO3DkHY1t2IuIJD89Tg2hX-XjFOxfZBMA5~WQIq9ps-1wHTlHZ84k0zYLzW79jafogfkOwtIA8YAjzLNewblyulkVF6e27C-Lv6d~As4LsUxAV-uvHekBTEnVHvGsvp3pniaeuKMnivtXH8y8DZ6kFFQi1TnDWA__",
    },
    {
      id: 2,
      title: "Zoo Big Kid Backpack - Narwhal",
      price: "$24.00",
      bgColor:"#e5d3e3",
      video: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/1b2d1db5453cf95edd126a5cf77ac0c1b8bbf326?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=qKCkUpVj2DX-6YEwofL7SCFEFiyP98RytDLFY-PXe7p1e762RFo8Cs6-9mQE2JN0eizdl7Scm19FhU9X9zm8~d5TPlDZSufhhYHjoo8LHEPZcQg4F1Q7fzPvYHMSIxhIH8rnQoH3eZe0FUMSljmR8ptBnMjuTDlQ8Y~wwymoJU3ZTfspG0QbF1Kv4xiNnLhYyNG3jtPVublsHuMJlSus26puAjP4MaMGlgDJ3Yg8qVLjsS17jTEAQMKATXu2nSqSdwYyNE79xtd0NGS5KOB8TpMyTJMXfUQJkZbpR2iL3BNKCQDeO31guyEs09YJcQLQR3F~39O5ng1zA7pbsPfRPg__",       
    },
    {
      id: 3,
      title: "Garden Oasis Teethe & Play Baby Toy",
      price: "$10.00",
      bgColor: "#c9dace",
      video: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/021a73751085bd1db2572b8a5d5d23a50be7270f?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=n3wLqKm9uYWdpH36CxxFV2-a0t7IAzUgZsNOg5FRKadpfdBahOdUPanQVgFB8KnM4iOw~iBVkM6jVOcBcu3RmVXCejyDDXXTqEy-UY1IbZaW6zGqzDjhHsPlTMdeKQjHVMmnXd48TElDY6sSZkaVX2Vi7BFs22d3oRRhodAnyD6UIn8nqcOZWdbHR3Q760W2uQrNkw8~ZuE5EtQqcVPOe3lGnxvS6Nw9RdQkB10X6q9s4VVzNDoakXHhNje~W~lBD16O873IAneT8PQlQEz-3w6edSsMqzzkQUzddk75NrT20xw8lAWiYyVbMJqUJIhTt9ATZPubShLdtLSquESn~g__",
    },
    {
      id: 4,
      title: "EON 4-in-1 High Chair - Oat",
      price: "$165.00",
      bgColor: "#e4e0c8",
      video: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/308b966b737cc504a318c4ee94232d3dbe6b69e2?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SUDy--Gu5VujvquaxWswcLZ87xHSaTb1WkXxrFngr~P~0~VviWwjmlUP9OgLPpkRYZGhLWLI84BDpALaN9SkGxem~kuz2KXBP5rnU8lfGqQkuBCJMuHhDSX1ceXSSs2YvcHsCaf9Xf~HZgobtX~jNcmTOOpLxkYaRPjdX9zEZecUHXV767S38dfAJfgoJc03i1VaExOeTF6xFzEkwAwEjt-6VoGsPqlVySXcFdXy5VYtPSbXMBOJi43zqybWi1pDT0VH4bw9nhPC61F3VpUypiHXzemlNyihHpvWbVruhefxDuYS2AT9ki3h1Z91pfsfFnea4eK2dCgVvN4QF5AMvQ__",
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