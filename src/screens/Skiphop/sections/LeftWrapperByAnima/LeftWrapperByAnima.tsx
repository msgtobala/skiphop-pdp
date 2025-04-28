import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const LeftWrapperByAnima = (): JSX.Element => {
  return (
    <section className="flex flex-col items-start gap-2.5 px-4 md:px-[50px] 2xl:px-[121px] py-12 lg:py-20 w-full">
      <Card className="w-full h-[400px] lg:h-[540px] bg-[#c5e1c5] rounded-[20px] overflow-hidden border-none">
        <CardContent className="relative p-0 h-full flex">
          {/* Left side content */}
          <div className="relative z-10 p-6 lg:p-[105px] flex flex-col gap-4 lg:gap-6 w-full lg:w-1/2 flex-1">
            <div className="text-[#1084b5] text-3xl lg:text-[62px] font-bold tracking-[-1.5px] lg:tracking-[-2.00px] leading-[1.2] lg:leading-[74.4px] max-w-[507px]">
              Sip, Sip, Hooray!
            </div>

            <div className="text-[#6c6c6c] text-xl lg:text-[29px] font-medium tracking-[-0.75px] lg:tracking-[-1.00px] leading-[1.2] lg:leading-[34.8px] max-w-[457px]">
              Show off your unique style at school with 30+ fun stickers
            </div>

            <Button
              variant="outline"
              className="w-fit px-4 lg:px-6 py-4 lg:py-[22px] bg-[#fff7f7] rounded-[100px] border-none hover:bg-[#ffe7e7]"
            >
              <span className="font-medium text-[#2e2e2e] text-sm lg:text-base tracking-[-0.64px] leading-6">
                Shop now
              </span>
            </Button>
          </div>

          {/* Right side video */}
          <div className="relative lg:block w-1/2 h-full flex-2">
            <video
              className="absolute w-full h-full object-cover p-[12px]"
              autoPlay
              loop
              muted
              playsInline
            >
              <source
                src="/sip-hooray.mp4"
                type="video/mp4"
              />
            </video>
          </div>
        </CardContent>
      </Card>
    </section>
  );
};