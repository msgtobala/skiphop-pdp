import React from "react";
import { DivByAnima } from "./sections/DivByAnima";
import { DivWrapperByAnima } from "./sections/DivWrapperByAnima";
import { FooterByAnima } from "./sections/FooterByAnima";
import { HeaderByAnima } from "./sections/HeaderByAnima";
import { LeftWrapperByAnima } from "./sections/LeftWrapperByAnima";
import { MainSection } from "./sections/MainSection";
import { MomentsSection } from "./sections/MomentsSection";
import { Section1ByAnima } from "./sections/Section1ByAnima/Section1ByAnima";
import { Section2ByAnima } from "./sections/Section2ByAnima";
import { Testimonials } from "./sections/Testimonials/Testimonials";
import { ThreeDSection } from "./sections/ThreeDSection";
import { DesignAdaptsSection } from "./sections/DesignAdaptsSection";
import { MobileWarning } from "../../components/MobileWarning";

export const Skiphop = (): JSX.Element => {
  return (
    <main className="bg-[#f2f2f2] flex flex-col items-center w-full min-h-screen">
      <MobileWarning />
      <div className="bg-[#f2f2f2] w-full">
        <div className="flex flex-col w-full items-start">
          <HeaderByAnima />
          <MainSection />
          <MomentsSection />
          <ThreeDSection />
          <DesignAdaptsSection />
          <DivByAnima />
          <Testimonials />
          <Section1ByAnima />
          <LeftWrapperByAnima />
          <Section2ByAnima />
          <FooterByAnima />
        </div>
      </div>
    </main>
  );
};