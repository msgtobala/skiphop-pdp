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
      avatar: "ava.png",
    },
    {
      id: 2,
      name: "Jason T., San Diego, CA",
      rating: 5,
      text: "I love how it grows with my little one — and the design actually matches our dining room. Functional and beautiful.",
      avatar: "jason.png",
    },
    {
      id: 3,
      name: "Maya K., Chicago, IL",
      rating: 4,
      text: "Setup was a breeze, and my daughter feels like a big kid sitting with us at the table. Total game-changer.",
      avatar: "maya.png",
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