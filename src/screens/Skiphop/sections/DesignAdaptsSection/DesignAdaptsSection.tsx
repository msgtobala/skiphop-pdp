import React from "react";
import { Card, CardContent } from "../../../../components/ui/card";

export const DesignAdaptsSection = (): JSX.Element => {
  return (
    <div className="flex flex-col lg:flex-row w-full">
      {/* Left side - video container */}
      <div className="relative w-full lg:w-[45%] xl:w-1/2 h-[400px] lg:h-[800px] 3xl:h-[1000px] z-10">
        <video
          className="w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source
            src="https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/a0a3c7fa04752aba2cabdcb7d0a35788190757af?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eUW3YB1Y48sK0BopwMwKighHdHQfvDYEDbx~gQzW3TlhZ9xM0Ib1-eTzElJ16bnsc7NBHY9o7r1QRFdkgPrKBtj9NwSWU3gdRacgbNKChieEG-JOXtjrnQC0B6qEuzWc7kp3hiNP12ve~555MwN2JtGk9d-t4g7SPJpmMDoiXWLshkvKCxqhLY4W3Z3lclN5IorbfcdorkUWlLlvDzNizHK5Y9yJOMkMb0YkFGi3UghYJSZzOEGLJ2Wh3Ihb0TbyQTjkGppJfV6V1qGZ7Ayt1loxp6B7Spa1H0AOzXkwTLUh-K3issQ6RYx1v3WMDcJBPd4Np~iiUKM9krdujG0upA__"
            type="video/mp4"
          />
        </video>
      </div>

      {/* Right side - content panel */}
      <Card className="flex flex-col w-full lg:w-[55%] xl:w-1/2 h-[400px] lg:h-[800px] 3xl:h-[1000px] items-start justify-center gap-[80px] lg:gap-[162px] px-8 lg:px-[80px] xl:px-[120px] 2xl:px-[180px] py-[80px] lg:py-[170px] relative bg-[#ebebe3] rounded-none border-none">
        <CardContent className="p-0 flex flex-col w-full h-full justify-between relative z-20">
          {/* Cloud registry icon */}
          <img
            className="w-[40px] lg:w-[60px] h-[40px] lg:h-[60px]"
            alt="Cloud registry"
            src="/cloud-registry--1--1.svg"
          />

          {/* Main content section */}
          <div className="flex flex-col items-start gap-6 lg:gap-8 self-stretch w-full">
            <div className="flex flex-col items-start gap-4 lg:gap-6 self-stretch w-full">
              <h2 className="w-fit mt-[-1.00px] font-['Switzer-Medium',Helvetica] font-medium text-[#2e2e2e] text-3xl lg:text-5xl tracking-[-1.5px] lg:tracking-[-2.00px] leading-[1.2] lg:leading-[57.6px]">
                Design that adapts
              </h2>
            </div>

            <p className="w-full lg:w-[90%] xl:w-[465px] font-['Plus_Jakarta_Sans',Helvetica] font-normal text-[#727578] text-lg lg:text-2xl tracking-[-0.30px] lg:tracking-[-0.40px] leading-[1.5] lg:leading-[38.6px]">
              From high chair to big kid seat — this chair adapts through every
              stage, from baby's first bites to independent dining.
            </p>
          </div>

          {/* Progress indicator */}
          <div className="flex w-[200px] lg:w-[272px] items-start gap-2.5">
            <div className="relative flex-1 grow h-[7px] bg-[#ed2d23] overflow-hidden" />
            <div className="relative flex-1 grow h-[7px] bg-[#dadacc] overflow-hidden" />
            <div className="relative flex-1 grow h-[7px] bg-[#dadacc] overflow-hidden" />
          </div>
        </CardContent>

        {/* Decorative elements */}
        <div className="absolute w-[150px] lg:w-[200px] xl:w-[251px] h-[240px] lg:h-[400px] top-10 lg:top-20 right-4 lg:right-6 xl:right-8 2xl:right-16 z-10">
          <div className="relative w-full h-full">
            <div className="absolute w-full h-full top-0 left-0">
              <img
                className="absolute w-[60px] lg:w-[80px] xl:w-[102px] h-[80px] lg:h-[133px] top-0 right-0"
                alt="Union"
                src="/union.svg"
              />
              <img
                className="absolute w-[115px] lg:w-[150px] xl:w-[193px] h-[80px] lg:h-[133px] top-[80px] lg:top-[133px] left-0"
                alt="Union"
                src="/union.svg"
              />
              <img
                className="absolute w-[60px] lg:w-[80px] xl:w-[102px] h-[80px] lg:h-[133px] top-[160px] lg:top-[266px] right-0"
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