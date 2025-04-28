export interface CarouselSlide {
  id: number;
  title: string;
  subtitle?: string;
  description?: string;
  video: string;
  backgroundColor: string;
}

export const slides: CarouselSlide[] = [
  {
    id: 1,
    title: "4 in 1\nHigh Chair",
    subtitle: "Grows with your child,\nfits your life",
    video: "/baby-high-chair.mp4",
    backgroundColor: "bg-[#EEEEEE]",
  },
  {
    id: 2,
    title: "Comfort &\nSupport",
    subtitle: "The chair that grows\nwith your child",
    video: "toodler-chair.mp4",
    backgroundColor: "bg-[#F1E6AC]",
  },
  {
    id: 3,
    title: "Adaptable\nDesign",
    subtitle: "Perfect support for\nevery stage",
    video: "modern-high-chair.mp4",
    backgroundColor: "bg-[#EEEEEE]",
  }
];