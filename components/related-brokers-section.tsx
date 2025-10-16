import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { Star, ArrowRight } from "lucide-react"

export function RelatedBrokersSection() {
  const brokers = [
    {
      name: "XM Group",
      rating: 4.5,
      minDeposit: "$5",
      leverage: "1:888",
      regulation: "ASIC, CySEC",
      badge: "Popular",
    },
    {
      name: "IC Markets",
      rating: 4.7,
      minDeposit: "$200",
      leverage: "1:500",
      regulation: "ASIC, CySEC",
      badge: "Best Spreads",
    },
    {
      name: "Pepperstone",
      rating: 4.6,
      minDeposit: "$200",
      leverage: "1:500",
      regulation: "ASIC, FCA",
      badge: "Trusted",
    },
    {
      name: "AvaTrade",
      rating: 4.4,
      minDeposit: "$100",
      leverage: "1:400",
      regulation: "ASIC, CBI",
      badge: "Beginner Friendly",
    },
  ]

  return (
    <section id="related-brokers" className="pb-12">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Related Forex Brokers</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {brokers.map((broker, index) => (
          <Card key={index} className="p-5 hover:shadow-xl transition-all hover:-translate-y-1">
            <div className="flex items-start justify-between mb-3">
              <h3 className="font-semibold text-lg">{broker.name}</h3>
              <Badge variant="secondary" className="text-xs">
                {broker.badge}
              </Badge>
            </div>
            <div className="flex items-center gap-1 mb-4">
              <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
              <span className="font-semibold text-sm">{broker.rating}</span>
            </div>
            <div className="space-y-2 text-sm text-muted-foreground mb-4">
              <div className="flex justify-between">
                <span>Min Deposit:</span>
                <span className="font-medium text-foreground">{broker.minDeposit}</span>
              </div>
              <div className="flex justify-between">
                <span>Max Leverage:</span>
                <span className="font-medium text-foreground">{broker.leverage}</span>
              </div>
              <div className="flex justify-between">
                <span>Regulation:</span>
                <span className="font-medium text-foreground text-xs">{broker.regulation}</span>
              </div>
            </div>
            <Button variant="outline" className="w-full group bg-transparent" size="sm">
              View Details
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </Card>
        ))}
      </div>
    </section>
  )
}
