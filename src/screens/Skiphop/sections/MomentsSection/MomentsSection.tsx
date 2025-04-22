import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from "../../../../components/ui/carousel";
import { slides } from "./slides";

export const MomentsSection = (): JSX.Element => {
  return (
    <section className="w-full bg-[#F1E6AC] bg-opacity-30">
      <div className="w-full px-4 lg:px-8 2xl:px-[121px] py-12 lg:py-20">
        <h2 className="text-[#2E2E2E] text-3xl lg:text-5xl font-medium mb-12 lg:mb-20">
          Made for moments
        </h2>

        <Carousel className="w-full">
          <CarouselContent className="-ml-4">
            {slides.map((slide) => (
              <CarouselItem 
                key={slide.id} 
                className="pl-4 basis-full lg:basis-[85%]"
              >
                <div 
                  className={`relative h-[400px] md:h-[500px] lg:h-[550px] xl:h-[645px] rounded-[20px] overflow-hidden ${slide.backgroundColor} shadow-[0_4px_20px_rgba(0,0,0,0.08)]`}
                >
                  {/* Left side with video */}
                  <div className="absolute left-4 lg:left-6 top-4 lg:top-6 w-[55%] lg:w-[60%] h-[calc(100%-32px)] lg:h-[calc(100%-48px)] rounded-xl overflow-hidden">
                    <video
                      className="w-full h-full object-cover"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={slide.video} type="video/mp4" />
                    </video>
                  </div>

                  {/* Right side with text */}
                  <div className="absolute right-4 lg:right-8 xl:right-12 top-1/2 -translate-y-1/2 max-w-[40%] lg:max-w-[35%]">
                    <div className="space-y-4">
                      {slide.title && (
                        <h3 className="text-[clamp(24px,2.5vw,50px)] font-semibold text-[#292929E0] leading-[1.1] whitespace-pre-line">
                          {slide.title}
                        </h3>
                      )}
                      {slide.subtitle && (
                        <p className="text-[clamp(16px,1.8vw,33px)] font-medium text-[#3C403C] leading-[1.2] whitespace-pre-line">
                          {slide.subtitle}
                        </p>
                      )}
                    </div>
                  </div>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
        </Carousel>
      </div>
    </section>
  );
};