export interface Product {
  id: number;
  title: string;
  category: string;
  price: string;
  imageSrc: string;
}

export const products: Product[] = [
  {
    id: 1,
    title:
      "Baby Discoverosity Montessori-Inspired 3-Stage Activity Center & Play Table",
    category: "Baby gear",
    price: "$179",
    imageSrc: "baby-discoverosity.png"
  },
  {
    id: 2,
    title: "Explore & More 4-in-1 Grow Along Activity Walker Baby Toy",
    category: "Baby gear",
    price: "$120",
    imageSrc: "explore-and-more.png"
  },
  {
    id: 3,
    title: "Baby Discoverosity Montessori-Inspired Play Gym",
    category: "Baby gear",
    price: "$99.99",
    imageSrc: "play-gym.png"
  },
];