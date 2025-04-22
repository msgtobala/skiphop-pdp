import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DivWrapperByAnima = (): JSX.Element => {
  // Data for the progress indicators
  const progressSegments = [
    { active: true },
    { active: false },
    { active: false },
  ];

  return (
    <div className="flex items-center justify-between relative self-stretch w-full flex-[0_0_auto]">
      {/* Left side - image container (placeholder in the original code) */}
      <div className="relative w-full h-[993px] bg-[100%_100%]" />

      {/* Right side - content panel */}
      <Card className="flex flex-col w-full h-[993px] items-start justify-center gap-[162px] px-[180px] py-[170px] relative bg-[#ebebe3] rounded-none border-none">
        <CardContent className="p-0 flex flex-col w-full h-full justify-between">
          {/* Cloud registry icon */}
          <img
            className="w-[60px] h-[60px]"
            alt="Cloud registry"
            src="/cloud-registry--1--1.svg"
          />

          {/* Main content section */}
          <div className="flex flex-col items-start gap-8 self-stretch w-full">
            <div className="flex flex-col items-start gap-6 self-stretch w-full">
              <h2 className="w-fit mt-[-1.00px] font-['Switzer-Medium',Helvetica] font-medium text-[#2e2e2e] text-5xl tracking-[-2.00px] leading-[57.6px]">
                Design that adapts
              </h2>
            </div>

            <p className="w-[465px] font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#727578] text-2xl tracking-[-0.40px] leading-[38.6px]">
              From high chair to big kid seat — this chair adapts through every
              stage, from baby&apos;s first bites to independent dining.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex w-[272px] items-start gap-2.5">
            {progressSegments.map((segment, index) => (
              <div
                key={index}
                className="relative flex-1 grow h-[7px] bg-[#dadacc] overflow-hidden"
              >
                {segment.active && (
                  <div
                    className={`${index === 1 ? "relative w-0.5 h-[7px] -left-0.5" : "w-px h-[7px]"} bg-[#ed2d23]`}
                  />
                )}
              </div>
            ))}
          </div>
        </CardContent>

        {/* Decorative elements */}
        <div className="absolute w-[251px] h-[459px] top-20 left-[720px]">
          <div className="relative w-[491px] h-[459px]">
            <div className="absolute w-[251px] h-[459px] top-0 left-0">
              <img
                className="absolute w-[102px] h-[193px] top-0 left-[149px]"
                alt="Union"
                src="/union.svg"
              />
              <img
                className="absolute w-[193px] h-[193px] top-[133px] left-0"
                alt="Union"
                src="/union.svg"
              />
              <img
                className="absolute w-[102px] h-[193px] top-[266px] left-[149px]"
                alt="Union"
                src="/union.svg"
              />
            </div>
          </div>
        </div>
      </Card>
    </div>
  );
};
