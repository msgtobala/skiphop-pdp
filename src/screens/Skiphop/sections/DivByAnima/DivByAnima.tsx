import React, { useState } from "react";
import { Card, CardContent } from "../../../../components/ui/card";
import { stages } from "./stages";

export const DivByAnima = (): JSX.Element => {
  const [hoveredStage, setHoveredStage] = useState<number | null>(null);

  return (
    <section className="flex flex-col items-start gap-20 px-4 lg:px-8 2xl:px-[121px] py-20 w-full bg-[#ed2d23]">
      <h2 className="self-stretch mt-[-1.00px] [font-family:'Switzer-Medium',Helvetica] font-medium text-[#f4f4f4] text-3xl lg:text-5xl tracking-[-2.00px] leading-[1.2]">
        4-in-1 High Chair
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-[75px] w-full">
        {stages.map((stage, index) => (
          <div key={index} className="flex flex-col gap-6">
            <div className="inline-flex items-center gap-[13px]">
              <img
                className="w-[28.99px] h-[28.99px]"
                alt="Union"
                src="/union-2.svg"
              />
              <span className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#f4f4f4] text-lg tracking-[-0.64px] leading-6 whitespace-nowrap">
                Stage {stage.number}
              </span>
            </div>

            <Card className="w-full aspect-[1/1.25] rounded-[20px] overflow-hidden bg-white">
              <CardContent 
                className="p-0 h-full relative"
                onMouseEnter={() => setHoveredStage(index)}
                onMouseLeave={() => setHoveredStage(null)}
              >
                <img
                  className={`w-full h-full object-cover transition-opacity duration-300 ${
                    hoveredStage === index ? 'opacity-0' : 'opacity-100'
                  }`}
                  alt={stage.imageAlt}
                  src={stage.imageSrc}
                />
                {hoveredStage === index && (
                  <video
                    className="absolute top-0 left-0 w-full h-full object-cover"
                    autoPlay
                    loop
                    muted
                    playsInline
                  >
                    <source src={stage.videoSrc} type="video/mp4" />
                  </video>
                )}
              </CardContent>
            </Card>

            <h3 className="self-stretch [font-family:'Switzer-Medium',Helvetica] font-medium text-[#f4f4f4] text-2xl lg:text-[34px] tracking-[-1.10px] leading-[1.2]">
              {stage.title}
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
};