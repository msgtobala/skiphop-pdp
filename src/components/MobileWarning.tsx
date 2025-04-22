import React, { useEffect, useState } from "react";
import { Card } from "./ui/card";

export const MobileWarning = (): JSX.Element | null => {
  const [showWarning, setShowWarning] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setShowWarning(window.innerWidth < 1024);
    };

    // Check on mount
    checkScreenSize();

    // Add resize listener
    window.addEventListener('resize', checkScreenSize);

    // Cleanup
    return () => window.removeEventListener('resize', checkScreenSize);
  }, []);

  if (!showWarning) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <Card className="w-[90%] max-w-[400px] p-8 bg-white rounded-[40px] text-center">
        <div className="mb-6">
          <img
            src="/frame-23.svg"
            alt="Warning"
            className="w-16 h-16 mx-auto mb-4"
          />
        </div>
        <h2 className="text-2xl font-medium text-[#2e2e2e] mb-4 font-['Switzer-Medium',Helvetica]">
          Desktop View Required
        </h2>
        <p className="text-[#727578] text-lg leading-relaxed font-['Plus_Jakarta_Sans',Helvetica]">
          This website is optimized for desktop viewing. Please access it from a device with a screen width of at least 1024 pixels for the best experience.
        </p>
      </Card>
    </div>
  );
};