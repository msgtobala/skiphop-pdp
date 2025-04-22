import { StarIcon } from "lucide-react";
import React from "react";
import { Avatar } from "../../../../components/ui/avatar";
import { Button } from "../../../../components/ui/button";
import { Card, CardContent } from "../../../../components/ui/card";

export const Testimonials = (): JSX.Element => {
  // Review data for mapping
  const reviews = [
    {
      id: 1,
      name: "Ava M., Brooklyn, NY",
      rating: 4,
      text: "It's the only chair we've needed from first foods to finger painting. Easy to clean, and it looks so good in our kitchen.",
      avatar: "https://s3-alpha-sig.figma.com/img/bd67/e46e/cd598f4b6bb485afa99509b91d7ef317?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FZ4BzG349zusPYDEhXKRewoZihl3vXSNd4k3TlqAf67-gIyC2jdKS4bMBKKlbM9~k6JDU6eXNEdsVwWd-sc3ZXy3igOhHyNXIs6LTnm8N5H0t0ciaIlDmzeSmAOmpRyqHHTdm2Yw94KnMPqbT4~-kqXJOyRLfi5OCVWLpLcTm6I~7AD-N6SDJBLZpYeTzPVs1-opsNwt7OROIqjPHHm5QF6QO3UnauOZAcohGFVCd9LQopqffWeafEvBx36LOe9~XtSbMWCElXYHGiGWCjBFJYrHzwDl1Yf3rFTM6k3QiyRiERU544-rFnSjYndw2Nkzmd-iw0DGFu-b6Dkg24ZVjw__",
    },
    {
      id: 2,
      name: "Jason T., San Diego, CA",
      rating: 5,
      text: "I love how it grows with my little one — and the design actually matches our dining room. Functional and beautiful.",
      avatar: "https://s3-alpha-sig.figma.com/img/be8a/5c10/8fe2c9755ee4f57d2b6e988fbc499ec3?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=CSxNoezGd1IOl1VQMUTs2WCLET-0d0JMsvKpGS-zpzAvQn4~~FLeiwoQXL1Lm~PyZePExjcDIUrrqBciMkusl6n8lu-uB5pwZ~CDvOC~btCVwq~4aW8SdBP1bX7P1TUy1Gyk-QW2puG-tbqtzD5Eehwh8z2JXyTLdFEjktdDP6HH~GcQP2DQvopNI2rdtfFMYi15uZNrwUPOrZbO3d-AbY7J3-5L1KSYpI1U0vKUHeo4bGkTtG0up4rfYQo~tqo1mpLi9~6M8y1rkZoAdI~x-CqRFLgI1X9E8bHm1OcNh1uzJ~vWf91TGnW90MYv3sO0DqVEw1hYBdj58YywH671kQ__",
    },
    {
      id: 3,
      name: "Maya K., Chicago, IL",
      rating: 4,
      text: "Setup was a breeze, and my daughter feels like a big kid sitting with us at the table. Total game-changer.",
      avatar: "https://s3-alpha-sig.figma.com/img/c350/8da7/b8650eae2ab44005bee577c3fd5b6ae6?Expires=1745798400&Key-Pair-Id=APKAQ4GOSFWCW27IBOMQ&Signature=FkEb9p-A0~lj0QkX3ZnAk~E-9d0QsqijPupFVrCUM3vS8A56jqAdXVnL~tpc57sAjHclw3-PNKqysgZ9T46iP-V5o3ssxIQxihN8a08CDWEdx9AOJcD3k9ZmddSuyrWZX6OXRNvTjASzoTUfw6YZ-ugPASmmK-68F8K1Jeza64lOWAwFGs1uRnlTuVk4vSRJB3aL0SqU4csL0LtkcTvMyA-MfKFc8MnVCz5GrDgaSHV6zwROlUh~kNSIGGJTo5L-LuOMF4xGRmVUgVRiofB~TJQ1bZL3lZsq-rfANo6a2glakP1GibysKSY~qTOS8nyIiAPcFxAuv8o0VlHT4GfQDA__",
    },
  ];

  return (
    <section className="w-full bg-[#f2f2f2]">
      <div className="w-full px-4 lg:px-8 2xl:px-[243px] py-12 lg:py-20">
        <h2 className="font-medium text-[#2e2e2e] text-3xl lg:text-5xl text-center tracking-[-2.00px] leading-[1.2] mb-12 lg:mb-20 font-['Switzer-Medium',Helvetica]">
          Our customers review
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {reviews.map((review) => (
            <Card key={review.id} className="rounded-[40px] bg-white">
              <CardContent className="flex flex-col min-h-[315px] justify-between p-5 lg:p-8">
                <Avatar className="w-[68px] h-[68px] rounded-[123px]">
                  <img
                    className="w-full h-full object-cover"
                    alt={review.name.split(",")[0]}
                    src={review.avatar}
                  />
                </Avatar>

                <div className="flex flex-col items-start gap-5">
                  <div className="flex items-center gap-2.5">
                    {[...Array(5)].map((_, i) => (
                      <StarIcon
                        key={i}
                        className={`w-[18px] lg:w-[23px] h-[18px] lg:h-[23px] ${
                          i < review.rating
                            ? "fill-current text-yellow-400"
                            : "text-gray-300"
                        }`}
                      />
                    ))}
                  </div>

                  <div className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-semibold text-[#131313] text-lg lg:text-xl tracking-[-0.40px] leading-[1.2]">
                    {review.name}
                  </div>
                </div>

                <p className="[font-family:'Plus_Jakarta_Sans',Helvetica] font-normal text-[#131313] text-base lg:text-xl tracking-[-0.40px] leading-[1.4] lg:leading-[1.6]">
                  {review.text}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="flex flex-col sm:flex-row justify-center items-center w-full max-w-[459px] gap-3 py-8 lg:py-12 mx-auto">
          <Button className="flex-1 w-full sm:w-auto bg-[#ed2d23] hover:bg-[#d42920] text-white rounded-[100px] h-[64px] [font-family:'Switzer-Medium',Helvetica] font-medium text-base tracking-[-0.64px]">
            Write a review
          </Button>

          <Button
            variant="outline"
            className="flex-1 w-full sm:w-auto bg-[#2e2e2e14] hover:bg-[#2e2e2e20] text-[#2e2e2e] border-none rounded-[100px] h-[64px] [font-family:'Switzer-Medium',Helvetica] font-medium text-base tracking-[-0.64px]"
          >
            Ask a question
          </Button>
        </div>
      </div>
    </section>
  );
};