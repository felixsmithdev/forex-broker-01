"use client"

import { Card } from "@/components/ui/card"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

export function ReviewsSection() {
  const reviews = [
    {
      name: "Weldy",
      location: "Hong Kong",
      rating: 5,
      text: "I consider the trading fee the platform seems to have some room for improvement. It was able to help guide you with the new Vanuatu.",
    },
    {
      name: "Shawna",
      location: "Philippines",
      rating: 5,
      text: "I like that they have a great customer service team who are always available to answer any questions you may have.",
    },
    {
      name: "Invest728",
      location: "United States",
      rating: 4,
      text: "I've been announced such a helpful company before. I find myself recommending them to friends all the time.",
    },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-8">Reviews</h2>
      <div className="relative">
        <div className="grid md:grid-cols-3 gap-6">
          {reviews.map((review, index) => (
            <Card key={index} className="p-6 hover:shadow-xl transition-shadow duration-300">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <Avatar className="h-12 w-12 border-2 border-primary/20">
                    <AvatarFallback className="bg-primary/10 text-primary font-semibold">
                      {review.name.slice(0, 2).toUpperCase()}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <div className="font-semibold">{review.name}</div>
                    <div className="text-sm text-muted-foreground">{review.location}</div>
                  </div>
                </div>
                <div className="flex gap-1">
                  {[...Array(5)].map((_, i) => (
                    <svg
                      key={i}
                      className={`w-4 h-4 ${i < review.rating ? "text-accent fill-accent" : "text-muted fill-muted"}`}
                      viewBox="0 0 20 20"
                    >
                      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                    </svg>
                  ))}
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{review.text}</p>
              </div>
            </Card>
          ))}
        </div>
        <div className="flex justify-center gap-2 mt-6">
          <Button variant="outline" size="icon" className="rounded-full bg-transparent">
            <ChevronLeft className="h-4 w-4" />
          </Button>
          <div className="flex gap-2 items-center">
            <div className="w-2 h-2 rounded-full bg-primary" />
            <div className="w-2 h-2 rounded-full bg-muted" />
            <div className="w-2 h-2 rounded-full bg-muted" />
          </div>
          <Button variant="outline" size="icon" className="rounded-full bg-transparent">
            <ChevronRight className="h-4 w-4" />
          </Button>
        </div>
      </div>
    </section>
  )
}
