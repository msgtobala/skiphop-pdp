export interface ColorOption {
  id: string;
  name: string;
  color: string;
  primaryImage: string;
  thumbnails: string[];
}

export const colorOptions: ColorOption[] = [
  {
    id: "sage",
    name: "Sage",
    color: "#a3ad99",
    primaryImage: "preview.png",
    thumbnails: [
      "preview.png",
      "preview-2.png",
      "preview-3.png",
      "preview-4.png"
    ]
  },
  {
    id: "grey",
    name: "Grey",
    color: "#d1d1d1",
    primaryImage: "preview.png",
    thumbnails: [
      "preview.png",
      "preview-2.png",
      "preview-3.png",
      "preview-4.png"
    ]
  },
  {
    id: "charcoal",
    name: "Charcoal",
    color: "#637380",
    primaryImage: "preview.png",
    thumbnails: [
      "preview.png",
      "preview-2.png",
      "preview-3.png",
      "preview-4.png"
    ]
  }
];