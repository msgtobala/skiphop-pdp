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
    primaryImage: "https://s3-alpha-sig.figma.com/img/2a20/fade/570126e6483c63038eb64423f4740f7e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SABulB5gv4Bvsgi7fFN5FtcPBZB4oy8Nx8POy7I8k15m-pyiBDyqX34KQDFKOEDto84DHYoUiCw~Ixwd32DD7jE~2-mqOzRboLOjfyiQZy7SwLfcMnWVSS-xYaXBxzIKnbU4bEKYT4yMHFdss-ce3FRbCvySggI-jgO4MRIb3iYEqvQQUTE5lYmvrM3~tv-DUVRGcfnbOQQzFrCiVQCJBuPaIT9aLIuEbw-0JnF6wIGYU8MOeZIuBssBayTsMywBGVHx8AHPq3o6RVlW-j7ml9ixPqaRc4UL3EfI5sIHkENFC9IvWvV3m2qpf6OF8Eu4lke3y-0t0u3HZs3X8m8xxA__",
    thumbnails: [
      "https://s3-alpha-sig.figma.com/img/2a20/fade/570126e6483c63038eb64423f4740f7e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SABulB5gv4Bvsgi7fFN5FtcPBZB4oy8Nx8POy7I8k15m-pyiBDyqX34KQDFKOEDto84DHYoUiCw~Ixwd32DD7jE~2-mqOzRboLOjfyiQZy7SwLfcMnWVSS-xYaXBxzIKnbU4bEKYT4yMHFdss-ce3FRbCvySggI-jgO4MRIb3iYEqvQQUTE5lYmvrM3~tv-DUVRGcfnbOQQzFrCiVQCJBuPaIT9aLIuEbw-0JnF6wIGYU8MOeZIuBssBayTsMywBGVHx8AHPq3o6RVlW-j7ml9ixPqaRc4UL3EfI5sIHkENFC9IvWvV3m2qpf6OF8Eu4lke3y-0t0u3HZs3X8m8xxA__",
      "https://s3-alpha-sig.figma.com/img/67f3/5f37/5ec3d7a1301e6e5e242e512ad22161d8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cEfHBSx3ChGwNgVajVJpSlCene~0-M2YTew0gpdZhGMmJ7PmWz0qykSyY~H~2i7WgpjPWDYsV6~AC41V2NRDu2gX1yW6HpjfUAIj~g4Maigi278ILaI2djswIdN~FFmFxxhkVXNQPji~RktutLdTViYkiwcY6zUD-9Sm5V3VYFx-d0B8E2HwZDvJ4b1AdqJVHie1EUBYeZaoDywH9I-akrXLO9gNomKeDBAG3~yARvxmN-YR9EqitFY-3yzZ1W-j7gPyP4Fas0WFHE2Af-Yp3jmBUxLHuKUqgOyywkm~lfN7ntyq7SrH~-h-ysazS47TLkSbDzWG3ia6mQxd~Rqd9Q__",
      "https://s3-alpha-sig.figma.com/img/d72d/8841/cd185ee93efd8ed376af7f1eb44708e4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fc6gs5eWTRMyEzg~DCJLVLtlipy0We4L5hUKSCDuLXOc-59u6IBM2hl62BV4MicU7~vf5v3zK4I2RaWK5iih8FVdSjIqZZRN7zZpuUxalQ8a6dPhllzOOfpQfey3X5TbiWUXASmb-TktjTQ55TYOzd4AqjqP5GcKPRxqOE4zLRosniW88sWU8Eiechz8Ics~fBZqtn3OCadAS40IjEw6HnR0p1eibvBkYbxj39b9VO0E6UQFDaT2pKvvkH1rmC6oEd387zShdQacgALMzcwJnfBrRqLP5o9C2w2miULbxuRPe9R1Wqzh51XGQCoTm2aB68Oz2nNn2VU42HbHDzRjFg__",
      "https://s3-alpha-sig.figma.com/img/d74f/9a06/a4a55f297e9a88cfde45e38556f71f66?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lZ09k2g73KDFl4nurZtjj9MPzegsPE0xHLTnqlCxroYJoZjGvTW8TVlKVaAwX0yYujUBzpmUzKFYX6ut~i3jpt3hT-NXYNmLhsabuZMjTBTKzktQh1dX8xZeShfH-2PiW9ajGFFLe4uxhaVCeMwqV8qGhEqDY0zh00TNs3NFe87cGd3RbaOWNVy-3Rm~7j1-2DUt3SOaCaa7tm64YLko5IeCqcy5r6ZNdW4WK~lNzCvVXM3Dd2XBDJydaHndvKJmyns4Xny2YCrf9EJL2KTytS0RIOqY5SKul5MXEb2sYPBpjW4Yn3Yl0mpAUTILUyq7YnXtGxbFJ8Hdfu-efynMog__"
    ]
  },
  {
    id: "grey",
    name: "Grey",
    color: "#d1d1d1",
    primaryImage: "https://s3-alpha-sig.figma.com/img/67f3/5f37/5ec3d7a1301e6e5e242e512ad22161d8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cEfHBSx3ChGwNgVajVJpSlCene~0-M2YTew0gpdZhGMmJ7PmWz0qykSyY~H~2i7WgpjPWDYsV6~AC41V2NRDu2gX1yW6HpjfUAIj~g4Maigi278ILaI2djswIdN~FFmFxxhkVXNQPji~RktutLdTViYkiwcY6zUD-9Sm5V3VYFx-d0B8E2HwZDvJ4b1AdqJVHie1EUBYeZaoDywH9I-akrXLO9gNomKeDBAG3~yARvxmN-YR9EqitFY-3yzZ1W-j7gPyP4Fas0WFHE2Af-Yp3jmBUxLHuKUqgOyywkm~lfN7ntyq7SrH~-h-ysazS47TLkSbDzWG3ia6mQxd~Rqd9Q__",
    thumbnails: [
      "https://s3-alpha-sig.figma.com/img/67f3/5f37/5ec3d7a1301e6e5e242e512ad22161d8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cEfHBSx3ChGwNgVajVJpSlCene~0-M2YTew0gpdZhGMmJ7PmWz0qykSyY~H~2i7WgpjPWDYsV6~AC41V2NRDu2gX1yW6HpjfUAIj~g4Maigi278ILaI2djswIdN~FFmFxxhkVXNQPji~RktutLdTViYkiwcY6zUD-9Sm5V3VYFx-d0B8E2HwZDvJ4b1AdqJVHie1EUBYeZaoDywH9I-akrXLO9gNomKeDBAG3~yARvxmN-YR9EqitFY-3yzZ1W-j7gPyP4Fas0WFHE2Af-Yp3jmBUxLHuKUqgOyywkm~lfN7ntyq7SrH~-h-ysazS47TLkSbDzWG3ia6mQxd~Rqd9Q__",
      "https://s3-alpha-sig.figma.com/img/d72d/8841/cd185ee93efd8ed376af7f1eb44708e4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fc6gs5eWTRMyEzg~DCJLVLtlipy0We4L5hUKSCDuLXOc-59u6IBM2hl62BV4MicU7~vf5v3zK4I2RaWK5iih8FVdSjIqZZRN7zZpuUxalQ8a6dPhllzOOfpQfey3X5TbiWUXASmb-TktjTQ55TYOzd4AqjqP5GcKPRxqOE4zLRosniW88sWU8Eiechz8Ics~fBZqtn3OCadAS40IjEw6HnR0p1eibvBkYbxj39b9VO0E6UQFDaT2pKvvkH1rmC6oEd387zShdQacgALMzcwJnfBrRqLP5o9C2w2miULbxuRPe9R1Wqzh51XGQCoTm2aB68Oz2nNn2VU42HbHDzRjFg__",
      "https://s3-alpha-sig.figma.com/img/2a20/fade/570126e6483c63038eb64423f4740f7e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SABulB5gv4Bvsgi7fFN5FtcPBZB4oy8Nx8POy7I8k15m-pyiBDyqX34KQDFKOEDto84DHYoUiCw~Ixwd32DD7jE~2-mqOzRboLOjfyiQZy7SwLfcMnWVSS-xYaXBxzIKnbU4bEKYT4yMHFdss-ce3FRbCvySggI-jgO4MRIb3iYEqvQQUTE5lYmvrM3~tv-DUVRGcfnbOQQzFrCiVQCJBuPaIT9aLIuEbw-0JnF6wIGYU8MOeZIuBssBayTsMywBGVHx8AHPq3o6RVlW-j7ml9ixPqaRc4UL3EfI5sIHkENFC9IvWvV3m2qpf6OF8Eu4lke3y-0t0u3HZs3X8m8xxA__",
      "https://s3-alpha-sig.figma.com/img/d74f/9a06/a4a55f297e9a88cfde45e38556f71f66?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lZ09k2g73KDFl4nurZtjj9MPzegsPE0xHLTnqlCxroYJoZjGvTW8TVlKVaAwX0yYujUBzpmUzKFYX6ut~i3jpt3hT-NXYNmLhsabuZMjTBTKzktQh1dX8xZeShfH-2PiW9ajGFFLe4uxhaVCeMwqV8qGhEqDY0zh00TNs3NFe87cGd3RbaOWNVy-3Rm~7j1-2DUt3SOaCaa7tm64YLko5IeCqcy5r6ZNdW4WK~lNzCvVXM3Dd2XBDJydaHndvKJmyns4Xny2YCrf9EJL2KTytS0RIOqY5SKul5MXEb2sYPBpjW4Yn3Yl0mpAUTILUyq7YnXtGxbFJ8Hdfu-efynMog__"
    ]
  },
  {
    id: "charcoal",
    name: "Charcoal",
    color: "#637380",
    primaryImage: "https://s3-alpha-sig.figma.com/img/d72d/8841/cd185ee93efd8ed376af7f1eb44708e4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fc6gs5eWTRMyEzg~DCJLVLtlipy0We4L5hUKSCDuLXOc-59u6IBM2hl62BV4MicU7~vf5v3zK4I2RaWK5iih8FVdSjIqZZRN7zZpuUxalQ8a6dPhllzOOfpQfey3X5TbiWUXASmb-TktjTQ55TYOzd4AqjqP5GcKPRxqOE4zLRosniW88sWU8Eiechz8Ics~fBZqtn3OCadAS40IjEw6HnR0p1eibvBkYbxj39b9VO0E6UQFDaT2pKvvkH1rmC6oEd387zShdQacgALMzcwJnfBrRqLP5o9C2w2miULbxuRPe9R1Wqzh51XGQCoTm2aB68Oz2nNn2VU42HbHDzRjFg__",
    thumbnails: [
      "https://s3-alpha-sig.figma.com/img/d72d/8841/cd185ee93efd8ed376af7f1eb44708e4?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=Fc6gs5eWTRMyEzg~DCJLVLtlipy0We4L5hUKSCDuLXOc-59u6IBM2hl62BV4MicU7~vf5v3zK4I2RaWK5iih8FVdSjIqZZRN7zZpuUxalQ8a6dPhllzOOfpQfey3X5TbiWUXASmb-TktjTQ55TYOzd4AqjqP5GcKPRxqOE4zLRosniW88sWU8Eiechz8Ics~fBZqtn3OCadAS40IjEw6HnR0p1eibvBkYbxj39b9VO0E6UQFDaT2pKvvkH1rmC6oEd387zShdQacgALMzcwJnfBrRqLP5o9C2w2miULbxuRPe9R1Wqzh51XGQCoTm2aB68Oz2nNn2VU42HbHDzRjFg__",
      "https://s3-alpha-sig.figma.com/img/2a20/fade/570126e6483c63038eb64423f4740f7e?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=SABulB5gv4Bvsgi7fFN5FtcPBZB4oy8Nx8POy7I8k15m-pyiBDyqX34KQDFKOEDto84DHYoUiCw~Ixwd32DD7jE~2-mqOzRboLOjfyiQZy7SwLfcMnWVSS-xYaXBxzIKnbU4bEKYT4yMHFdss-ce3FRbCvySggI-jgO4MRIb3iYEqvQQUTE5lYmvrM3~tv-DUVRGcfnbOQQzFrCiVQCJBuPaIT9aLIuEbw-0JnF6wIGYU8MOeZIuBssBayTsMywBGVHx8AHPq3o6RVlW-j7ml9ixPqaRc4UL3EfI5sIHkENFC9IvWvV3m2qpf6OF8Eu4lke3y-0t0u3HZs3X8m8xxA__",
      "https://s3-alpha-sig.figma.com/img/67f3/5f37/5ec3d7a1301e6e5e242e512ad22161d8?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=cEfHBSx3ChGwNgVajVJpSlCene~0-M2YTew0gpdZhGMmJ7PmWz0qykSyY~H~2i7WgpjPWDYsV6~AC41V2NRDu2gX1yW6HpjfUAIj~g4Maigi278ILaI2djswIdN~FFmFxxhkVXNQPji~RktutLdTViYkiwcY6zUD-9Sm5V3VYFx-d0B8E2HwZDvJ4b1AdqJVHie1EUBYeZaoDywH9I-akrXLO9gNomKeDBAG3~yARvxmN-YR9EqitFY-3yzZ1W-j7gPyP4Fas0WFHE2Af-Yp3jmBUxLHuKUqgOyywkm~lfN7ntyq7SrH~-h-ysazS47TLkSbDzWG3ia6mQxd~Rqd9Q__",
      "https://s3-alpha-sig.figma.com/img/d74f/9a06/a4a55f297e9a88cfde45e38556f71f66?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=lZ09k2g73KDFl4nurZtjj9MPzegsPE0xHLTnqlCxroYJoZjGvTW8TVlKVaAwX0yYujUBzpmUzKFYX6ut~i3jpt3hT-NXYNmLhsabuZMjTBTKzktQh1dX8xZeShfH-2PiW9ajGFFLe4uxhaVCeMwqV8qGhEqDY0zh00TNs3NFe87cGd3RbaOWNVy-3Rm~7j1-2DUt3SOaCaa7tm64YLko5IeCqcy5r6ZNdW4WK~lNzCvVXM3Dd2XBDJydaHndvKJmyns4Xny2YCrf9EJL2KTytS0RIOqY5SKul5MXEb2sYPBpjW4Yn3Yl0mpAUTILUyq7YnXtGxbFJ8Hdfu-efynMog__"
    ]
  }
];