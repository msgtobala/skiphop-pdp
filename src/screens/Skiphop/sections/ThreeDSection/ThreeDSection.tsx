import { useState } from 'react';
import { Button } from '../../../../components/ui/button';
import { Card } from '../../../../components/ui/card';

interface Preset {
  id: number;
  image: string;
  video?: string;
  alt: string;
  type: 'product' | 'kitchen' | 'nursery';
}

interface ColorOption {
  id: number;
  image: string;
}

export const ThreeDSection = (): JSX.Element => {
  const presets: Preset[] = [
    {
      id: 1,
      image: '/preset.png',
      video:
        'https://firebasestorage.googleapis.com/v0/b/callmeeiya.appspot.com/o/360%20(3).mp4?alt=media&token=8eb6d8d0-be96-4a9a-935e-8a6854465972',
      alt: 'Product view',
      type: 'product',
    },
    {
      id: 2,
      image: '/kitchen scene.jpg',
      alt: 'Kitchen view',
      type: 'kitchen',
    },
    {
      id: 3,
      image: '/nursery scene 1.jpg',
      alt: 'Nursery view',
      type: 'nursery',
    },
  ];

  // const colorOptions = [
  //   { id: 1, image: "/preset.png" },
  //   { id: 2, image: "/preset-1.jpg" },
  //   { id: 3, image: "/preset-2.jpg" },
  //   { id: 4, image: "/preset-3.jpg" },
  // ];

  const [selectedPreset, setSelectedPreset] = useState<Preset>(presets[0]);
  // const [selectedColor, setSelectedColor] = useState<ColorOption>(
  //   colorOptions[0]
  // );

  return (
    <section className="relative w-full h-screen bg-white">
      <div className="absolute top-0 left-0 right-0 z-10 flex justify-between items-start p-8 2xl:px-[121px]">
        <div>
          <h1 className="text-5xl font-medium text-[#2e2e2e] mb-6 font-['Switzer-Medium',Helvetica]">
            EON 4-in-1 High Chair
          </h1>
          <p className="text-5xl font-bold">$165</p>
        </div>
        <div className="flex items-center gap-6">
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-[#2e2e2e] hover:bg-transparent hover:text-[#2e2e2e]/80"
          >
            <img src="/frame-23.svg" alt="Download" className="w-5 h-5" />
            <span className="font-medium">Download Instructions</span>
          </Button>
          <Button
            variant="ghost"
            className="flex items-center gap-2 text-[#2e2e2e] hover:bg-transparent hover:text-[#2e2e2e]/80"
          >
            <img src="/frame-3.svg" alt="Video" className="w-5 h-5" />
            <span className="font-medium">Video</span>
          </Button>
          <div className="flex items-center gap-4">
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-50"
            >
              <img src="/frame-7.svg" alt="Scale" className="w-6 h-6" />
            </Button>
            <Button
              variant="outline"
              className="w-12 h-12 rounded-full bg-white hover:bg-gray-50"
            >
              <img src="/frame-1.svg" alt="Camera" className="w-6 h-6" />
            </Button>
          </div>
        </div>
      </div>
      <div className="w-full h-full">
        {selectedPreset.id === 1 && selectedPreset.video ? (
          <video
            className="w-full h-full object-contain"
            autoPlay
            loop
            muted
            playsInline
          >
            <source src={selectedPreset.video} type="video/mp4" />
          </video>
        ) : (
          <img
            src={selectedPreset.image}
            alt={selectedPreset.alt}
            className="w-full h-full object-cover"
          />
        )}
      </div>
      <div className="absolute bottom-8 left-0 right-0 flex justify-between items-end px-8 2xl:px-[121px]">
        <div>
          <h3 className="text-lg font-medium mb-4 text-[#2e2e2e]">Presets</h3>
          <div className="flex gap-4">
            {presets.map((preset) => (
              <Card
                key={preset.id}
                className={`w-[88px] h-[88px] cursor-pointer overflow-hidden rounded-[20px] bg-white ${
                  selectedPreset.id === preset.id
                    ? 'border-2 border-[#2f2f2f]'
                    : 'border border-[#d6d6d633]'
                }`}
                onClick={() => setSelectedPreset(preset)}
              >
                <img
                  src={preset.image}
                  alt={preset.alt}
                  className="w-full h-full object-cover object-top"
                />
              </Card>
            ))}
          </div>
        </div>
        {/* <div>
          <h3 className="text-lg font-medium mb-4 text-[#2e2e2e]">Colors</h3>
          <div className="flex gap-4">
            {colorOptions.map((option) => (
              <Card
                key={option.id}
                className={`w-[88px] h-[88px] cursor-pointer overflow-hidden rounded-[20px] ${
                  selectedColor.id === option.id
                    ? 'border-2 border-[#2f2f2f]'
                    : 'border border-[#d6d6d633]'
                }`}
                onClick={() => setSelectedColor(option)}
              >
                <img
                  src={option.image}
                  alt={`Color option ${option.id}`}
                  className="w-full h-full"
                />
              </Card>
            ))}
          </div>
        </div> */}
      </div>
    </section>
  );
};
