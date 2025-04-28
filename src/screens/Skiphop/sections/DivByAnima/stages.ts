export interface StageData {
  number: string;
  title: string;
  imageAlt: string;
  imageSrc: string;
  videoSrc: string;
}

export const stages: StageData[] = [
  {
    number: "1",
    title: "High Chair",
    imageAlt: "Freepik smooth dolly",
    imageSrc: "/high-chair.png",
    videoSrc: "/high-chair-video.mp4"
  },
  {
    number: "2",
    title: "Dining Booster",
    imageAlt: "Stages",
    imageSrc: "/dining.png",
    videoSrc: "/dining-booster-video.mp4"
  },
  {
    number: "3",
    title: "Tableside Booster",
    imageAlt: "Stages",
    imageSrc: "/tableside-booster.png",
    videoSrc: "/tablebooster.mp4"
  },
  {
    number: "4",
    title: "Toddler Chair",
    imageAlt: "Stages",
    imageSrc: "toddler.png",
    videoSrc: "toodler-chair.mp4"
  }
];