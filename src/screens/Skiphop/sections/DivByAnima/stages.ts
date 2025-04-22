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
    imageSrc: "https://s3-alpha-sig.figma.com/img/d72d/8841/cd185ee93efd8ed376af7f1eb44708e4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fc6gs5eWTRMyEzg~DCJLVLtlipy0We4L5hUKSCDuLXOc-59u6IBM2hl62BV4MicU7~vf5v3zK4I2RaWK5iih8FVdSjIqZZRN7zZpuUxalQ8a6dPhllzOOfpQfey3X5TbiWUXASmb-TktjTQ55TYOzd4AqjqP5GcKPRxqOE4zLRosniW88sWU8Eiechz8Ics~fBZqtn3OCadAS40IjEw6HnR0p1eibvBkYbxj39b9VO0E6UQFDaT2pKvvkH1rmC6oEd387zShdQacgALMzcwJnfBrRqLP5o9C2w2miULbxuRPe9R1Wqzh51XGQCoTm2aB68Oz2nNn2VU42HbHDzRjFg__",
    videoSrc: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/308b966b737cc504a318c4ee94232d3dbe6b69e2?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SUDy--Gu5VujvquaxWswcLZ87xHSaTb1WkXxrFngr~P~0~VviWwjmlUP9OgLPpkRYZGhLWLI84BDpALaN9SkGxem~kuz2KXBP5rnU8lfGqQkuBCJMuHhDSX1ceXSSs2YvcHsCaf9Xf~HZgobtX~jNcmTOOpLxkYaRPjdX9zEZecUHXV767S38dfAJfgoJc03i1VaExOeTF6xFzEkwAwEjt-6VoGsPqlVySXcFdXy5VYtPSbXMBOJi43zqybWi1pDT0VH4bw9nhPC61F3VpUypiHXzemlNyihHpvWbVruhefxDuYS2AT9ki3h1Z91pfsfFnea4eK2dCgVvN4QF5AMvQ__"
  },
  {
    number: "2",
    title: "Dining Booster",
    imageAlt: "Stages",
    imageSrc: "https://s3-alpha-sig.figma.com/img/67f3/5f37/5ec3d7a1301e6e5e242e512ad22161d8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cEfHBSx3ChGwNgVajVJpSlCene~0-M2YTew0gpdZhGMmJ7PmWz0qykSyY~H~2i7WgpjPWDYsV6~AC41V2NRDu2gX1yW6HpjfUAIj~g4Maigi278ILaI2djswIdN~FFmFxxhkVXNQPji~RktutLdTViYkiwcY6zUD-9Sm5V3VYFx-d0B8E2HwZDvJ4b1AdqJVHie1EUBYeZaoDywH9I-akrXLO9gNomKeDBAG3~yARvxmN-YR9EqitFY-3yzZ1W-j7gPyP4Fas0WFHE2Af-Yp3jmBUxLHuKUqgOyywkm~lfN7ntyq7SrH~-h-ysazS47TLkSbDzWG3ia6mQxd~Rqd9Q__",
    videoSrc: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/2aa5c5860b5ac2e48522a3d8550e45bb3db4cac0?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=hEGvk39E087jclXcFUPnlcMAOSt6WN7z19Bhl8H4ZzSkiIkHc5E3EXhSOs0kVKqvEZNXap5BJCICRtf2wrlzIosoprVcWXlHws460Yn3hvDcgWjhk83JRPRWIUV51H0os3kmDxZSENbPaLATfGxuB7SvFNEi3T54AM8~EfX~6wV0ULELKu4od1CoIfHOV1rdBqHOq3A~dc4eYVQIk8Yux77KzoUCk3Wz9-VNyfRIw4ApeVShy42LDQOMybzlDYgv0k97q1egzPp7UZjELcYzmCzDj4~fvZOZbQ3615DzT70d2iwGz29E0Eqk0xxmn16GcTerLzytrw9uJV2vQJofCQ__"
  },
  {
    number: "3",
    title: "Tableside Booster",
    imageAlt: "Stages",
    imageSrc: "https://s3-alpha-sig.figma.com/img/27c5/ab6a/0518568a36a93e9a6727031813a40912?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=PlhcSCD6xZ0sKPuw~dLEm5g0aS4dv9W6tiixE6T2e13J9-~mA8k0vef7hG4qOydUmjWthbOC~aQb3T9ullguZhIAg-lE8ahyet08e-HPcWuFDHKWnVXWxdmSx9c9oZsMd3Su-xGkHt78h2hsf9jTJMlFHQxo8KNMBA1GKl1U6alI-nPola47Kh0VUfOzl38OFlyu52CRR0TOGnG2YPSj~QvAfbP3uEOVG5eEZQrhmLLhODY4ugPB7gqFy8arVnR7TElUC-Fiihknbj7jK2pxcBWLBV6engvAitTdgm1ROIUGyl5RD5HA4s6rKx~bS~q6793KMYIxcdD~VpqpHPT7BQ__",
    videoSrc: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/e7e4ddf2873557ab036436b807230048770153b7?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=mv6G7fpLd-Tr5QY6Bo05XoyDamYcDCwCIgMfTX2QJ3Vhv95CUIB3Rq60ceO0b28wXMtD7mCKGyhTa2~71wJaO58inCsf4nRLhHexUHFxS2xBxbZvNNuGFpM6YwJKbFq4nNsc1qMI~QHBXH6ZBQr4gBZh~aHFF1yX0A3BjcetE214Alx6R5teTAba4vn07BFVijR2A9OFFts0XtWsjkHjLPHx2MjzIXl58VQ39yVv6KM5Z0iy0uFSQPQ6Xod-9bvl62KYy3hunP53X6GlCAcYND3w7uSIYdkIsW8KDIg2xH7KdBDyTpWuqm113dB6WMBrPy1nh4B4GEKXQoNhKZebAQ__"
  },
  {
    number: "4",
    title: "Toddler Chair",
    imageAlt: "Stages",
    imageSrc: "https://s3-alpha-sig.figma.com/img/49a6/04cb/febc69d1dce1302b100ced03fd5e5155?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=eERb56CqRKw38xjVxJGwBSu61-lGfvyH634UwhIdkFDFIWpaePPb1dgSVw0ROyHlyBUlVVl7hyPoojYknDXWd4BhZtHbbaY4xU8W7lshE0tER6U3fVOjZoVbhSjaosBbK5qhc3qlaFBcbxF96FQ~1fJNUBEBdXpkedRg9tBVMUIZoq22iJzkDOZxsJhjbkVtoW9hUBOv1-0sBjzYKkArtx~WpgQtlLxcHO6G4eMbaxNHHZyjDRLJEMsJGBweaqTz~kfg7PesTTZ~POu2xfDNM4QFfMbUMHeXDLvV2R4MEGVNTog6XgWO5tRhWd8vLa2d6CeqMaJpGYOGscodw2WYgQ__",
    videoSrc: "https://s3-figma-videos-production-sig.figma.com/video/ORG/1252706866293636381/89ab791f87c71031e29c4a4e14d1bec486d76117?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=dtxXDD2LG-qdVC~TcoqyTGswEAam2PzZ6EueXCCEpTvIjiFsBDdC2NeRBNkXVlRbeg0Vn-uvaR7RW--C84CZYOgOikLe0bubOtuq0v8HlU-LOORYnxm3qaNDyw-R3waIP5KE4GmytZ-XBZLxe~CYU7kV8fv75o4XJeMrKcpv8UYt8vJUAvfNiJb8CxU5fqCHp5qEUcVOkZol8SGl~eO8Lpl2vuDHmTNbp-PQPGH9HTw~XA~1sZsvTAIjiGlBIduhe1LeeV4kNBTg3rhoe-~dMfpZLq-waAQirbWUM7K-lO6dm6K5nqVGpI90FQ1Okr~dZkINIlFFXv-1Y02S5QmRSw__"
  }
];