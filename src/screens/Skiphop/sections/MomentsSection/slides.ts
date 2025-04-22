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
    video: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/773ce9c4e599108b44d6e3b6be8a88952f1341b9?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=C4G5RtpFVsXH8dfodL0-CfIzIKRJUuF3a0wl~TEhUt~oSz7a94qW9tDP26GKx8FafoeKVpPDMU-fRZNj453nAKerldHczAE1DIHzpmaVazzPBzGXRDiJEwcl9qtCwhRyOhUQZ-798p9IJfppt8FbUdcEu0uBLJIak~2zSGsoK88S1OxrfNyuc4nVEQ0nC3Zy4ujO5fhl28MvlGildEUsvx7E8xEQ0UdcOp4cVVANYCbTiyHqMT2hKWtq2HNdwiGCFJFLo9lheT-8NkCbpGfoKiu4v4buJK6xaePh5ZpPgp0K2uvz2mCAE4NPGpIFN6UPJBQBI7INxUQ2-rXoah7Gng__",
    backgroundColor: "bg-[#EEEEEE]",
  },
  {
    id: 2,
    title: "Comfort &\nSupport",
    subtitle: "The chair that grows\nwith your child",
    video: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/76beca0a7a45ceedf4cb5104a91ef448aa0af1cf?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eU2n1Pa-ordC045i1vA-yxAYweytFrUVGM4aalTb0GllMs139J7wEltF3wNKlV6zCf63cLNXBp28ty5cQ4UrIe8YEL7UkaGusd-cUqmMxvEB3s6EvKD-T5eQ7ccrwzndiCsBa53iDYtbCLrLjK-lhbI5dyDjO7B8SH6UKw5VvTeXkORJ1OznX2I9ythRe8nEopqgUXYX4AmjkbfsZEcG76HvvWKMOiQpKOTBZ-QlMtP4BhTccJXFIpbEr4XiN9mwSqHC-37Mw2KRfnUEC2~rZJSA3mpz4RorXKMYpJ5nbWNXOwCfl~0DDpHZb9et2sq9WQLwyiVRIwRxdCakovCOtQ__",
    backgroundColor: "bg-[#F1E6AC]",
  },
  {
    id: 3,
    title: "Adaptable\nDesign",
    subtitle: "Perfect support for\nevery stage",
    video: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/c260efab774b167e7b1608d824d3dca9bff5699c?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Ghr14PHv-vL~5IoAPo5rBCqF-Yp~lzaQiWdmiSoyjYlz1qBRyieZ8fLFkgd31z~oqAcAZ2MEiV-HfQjc3zs4w8YjKO-Z7dB7St5nDPy6IAqTOOKjSfcVi30zdrQ3354pKMD6h3YvNFg~cVzIe~6Td2vaSx8fucn~tC9G59iSrgD1ThqTF3Z6XYEYDsCDhtIUbk0Ykpg9HdFLvzcdMmdB-e2D3bTfJ~eyXkADRCT4FWIxl97bwjy-URwzwC2O0zT9nfklR32kk9P2h7h2Ybw9kxc18OSvBu5FOG71layPuKkdXEHnU~LwqJcPtZxJEs~5HWVQnEpqniRDkig2qWJTJg__",
    backgroundColor: "bg-[#EEEEEE]",
  }
];