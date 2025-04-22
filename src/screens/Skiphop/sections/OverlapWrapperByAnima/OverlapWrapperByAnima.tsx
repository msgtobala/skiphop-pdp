import React from "react";
import { Button } from "../../../../components/ui/button";
import { Card } from "../../../../components/ui/card";

export const OverlapWrapperByAnima = (): JSX.Element => {
  // Preset options data
  const presets = [
    { id: 1, alt: "Element background", isSelected: true },
    { id: 2, alt: "Kicheennn" },
    { id: 3, alt: "Nursery only scene" },
  ];

  // Color options data
  const colorOptions = [
    { id: 1, alt: "Element background" },
    { id: 2, alt: "Element background" },
    { id: 3, alt: "Element background" },
    { id: 4, alt: "Element background" },
  ];

  return (
    <section className="w-full py-10">
      <div className="container mx-auto px-4">
        {/* Product Header - Title, Price, and Actions */}
        <div className="flex flex-col md:flex-row justify-between items-start mb-16">
          {/* Product Title and Price */}
          <div className="flex flex-col gap-6 max-w-md">
            <h1 className="font-medium text-5xl tracking-[-2.00px] leading-[57.6px] text-[#2e2e2e] font-['Switzer-Medium',Helvetica]">
              EON 4-in-1 High Chair
            </h1>
            <p className="font-bold text-[50px] tracking-[-2.00px] leading-[30px] text-[#2e2e2e] font-['Plus_Jakarta_Sans',Helvetica]">
              $165
            </p>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col md:flex-row items-center gap-6 mt-4 md:mt-0">
            <div className="flex items-center gap-6">
              {/* DownloadIcon Instructions Button */}
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-2 font-medium text-lg text-[#2e2e2e] tracking-[-0.64px] font-['Plus_Jakarta_Sans',Helvetica]"
              >
                <img
                  className="w-[18px] h-[18px]"
                  alt="Frame"
                  src="/frame-23.svg"
                />
                DownloadIcon Instructions
              </Button>

              {/* VideoIcon Button */}
              <Button
                variant="ghost"
                className="flex items-center gap-2 p-2 font-medium text-lg text-[#2e2e2e] tracking-[-0.64px] font-['Plus_Jakarta_Sans',Helvetica]"
              >
                <img
                  className="w-[18px] h-[18px]"
                  alt="Frame"
                  src="/frame-3.svg"
                />
                VideoIcon
              </Button>
            </div>

            {/* Share and Save Buttons */}
            <div className="flex items-center gap-6">
              <Button
                variant="outline"
                className="w-20 h-20 p-[30px] bg-white rounded-3xl"
              >
                <img className="w-10 h-10" alt="Frame" src="/frame-1.svg" />
              </Button>
              <Button
                variant="outline"
                className="w-20 h-20 p-[30px] bg-white rounded-3xl"
              >
                <img className="w-10 h-10" alt="Frame" src="/frame-17.svg" />
              </Button>
            </div>
          </div>
        </div>

        {/* Presets Section */}
        <div className="mb-10">
          <h2 className="font-medium text-lg text-[#2e2e2e] tracking-[-0.64px] leading-6 mb-5 font-['Plus_Jakarta_Sans',Helvetica]">
            Presets
          </h2>
          <div className="flex gap-6">
            {presets.map((preset) => (
              <Card
                key={preset.id}
                className={`w-[88px] h-[88px] rounded-3xl overflow-hidden border-2 border-solid ${preset.isSelected ? "border-[#2f2f2f]" : "border-[#d6d6d633]"} bg-white`}
              >
                {preset.id === 1 ? (
                  <div className="relative w-[104px] h-[95px] top-[-3px] -left-2 [background:linear-gradient(180deg,rgba(254,254,254,1)_50%,rgba(254,254,254,1)_71%,rgba(254,254,254,1)_100%)]">
                    <img
                      className="w-[59px] h-[74px] top-[11px] left-[23px] absolute object-cover"
                      alt={preset.alt}
                    />
                  </div>
                ) : (
                  <img
                    className="w-[88px] h-[88px] object-cover"
                    alt={preset.alt}
                  />
                )}
              </Card>
            ))}
          </div>
        </div>

        {/* Colors Section */}
        <div>
          <h2 className="font-medium text-lg text-[#2e2e2e] tracking-[-0.64px] leading-6 mb-5 font-['Plus_Jakarta_Sans',Helvetica]">
            Colors
          </h2>
          <div className="flex gap-6">
            {colorOptions.map((color) => (
              <Card
                key={color.id}
                className="w-[88px] h-[88px] bg-white rounded-3xl overflow-hidden border-2 border-solid border-[#d6d6d6]"
              >
                <img
                  className="w-[53px] h-[66px] top-[11px] left-[18px] relative object-cover"
                  alt={color.alt}
                />
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
