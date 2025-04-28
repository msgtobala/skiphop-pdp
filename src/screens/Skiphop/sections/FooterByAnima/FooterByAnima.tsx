import React from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";

export const FooterByAnima = (): JSX.Element => {
  // Support links data
  const supportLinks = [
    "Customer Service",
    "Accessibility Support",
    "Shipping",
    "Returns",
    "Gift Cards",
    "Size Chart",
    "My Account",
    "Carter's Credit Card",
    "Carter's Rewards",
    "Carter's Mobile App",
    "Contact Us",
  ];

  // About Us links data
  const aboutUsLinks = [
    "Carter's Inc.",
    "Life With Kids",
    "All Store Locations",
    "Affiliate Program",
    "Investor Relations",
    "Careers",
    "Raise the Future",
  ];

  return (
    <footer className="relative w-full bg-[#ee2e24] py-20 px-[121px] overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between gap-12">
        {/* Newsletter Section */}
        <div className="flex flex-col w-full md:w-[765px] gap-[50px]">
          <div className="flex flex-col">
            <h2 className="font-medium text-[#ebebeb] text-5xl tracking-[-2.00px] leading-[57.6px] [font-family:'Switzer-Medium',Helvetica]">
              Join our newsletter and get 20%
              off your first purchase with us.
            </h2>
          </div>

          <div className="relative w-full max-w-[400px]">
            <Input
              className="pl-4 pr-[116px] py-[15px] h-auto bg-white rounded-[46px] text-[#9f9f9f] text-base tracking-[-0.64px] [font-family:'Plus_Jakarta_Sans',Helvetica]"
              placeholder="Your email address"
            />
            <Button className="absolute top-1 right-1 w-[100px] h-[43px] bg-[#ed2d23] rounded-[52px] [font-family:'Switzer-Medium',Helvetica] font-medium text-white text-base tracking-[-0.64px]">
              Join
            </Button>
          </div>
        </div>

        {/* Links Columns */}
        <div className="flex w-full md:w-[358px] justify-between">
          {/* Support Column */}
          <div className="flex flex-col gap-4">
            <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#ebebeb] text-base tracking-[-0.64px] leading-6">
              Support
            </h3>
            <ul className="flex flex-col gap-4">
              {supportLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className={`[font-family:'${link === "Shipping" ? "Inter" : "Plus_Jakarta_Sans"}',Helvetica] font-medium text-[#ffd6d6] text-sm tracking-[-0.56px] leading-[21px] hover:underline`}
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* About Us Column */}
          <div className="flex flex-col gap-4">
            <h3 className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#ebebeb] text-base tracking-[-0.64px] leading-6">
              About Us
            </h3>
            <ul className="flex flex-col gap-4">
              {aboutUsLinks.map((link, index) => (
                <li key={index}>
                  <a
                    href="#"
                    className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#ffd6d6] text-sm tracking-[-0.56px] leading-[21px] hover:underline"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>

      {/* Background Image Container */}
      <div className="w-full h-[300px] bottom-0 left-0">
        <div className="relative h-[300px]">
          <div className="flex justify-center min-w-[1024px]">
            <img
              className="h-[150px] mt-[50px] object-contain [@media(width:1024px)]:relative [@media(width:1024px)]:left-[-10%]"
              alt="Footer background"
              src="/skip-hop-logo-footer.png"
            />
          </div>
          <div className="absolute w-[95px] h-[87px] bottom-0 right-0 bg-[#ee2e24]" />
           {/* Copyright Section */}
      <div className="mt-20 [font-family:'Plus_Jakarta_Sans',Helvetica] font-medium text-[#e4e4e4] text-sm tracking-[-0.56px] leading-[21px]">
        © 2025 Carter&apos;s Inc. All rights reserved.
      </div>
        </div>
      </div>
    </footer>
  );
};