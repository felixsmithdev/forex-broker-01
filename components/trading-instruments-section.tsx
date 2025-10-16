import { Card } from "@/components/ui/card"
import { TrendingUp, Bitcoin, BarChart3, Gem } from "lucide-react"

export function TradingInstrumentsSection() {
  const instruments = [
    { icon: TrendingUp, name: "Forex", count: "60+ pairs", color: "text-blue-600" },
    { icon: Bitcoin, name: "Cryptocurrencies", count: "30+ coins", color: "text-orange-600" },
    { icon: BarChart3, name: "Indices", count: "20+ indices", color: "text-purple-600" },
    { icon: Gem, name: "Commodities", count: "15+ products", color: "text-green-600" },
  ]

  return (
    <section id="instruments">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Trading Instruments</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {instruments.map((item, index) => (
          <Card key={index} className="p-5 hover:shadow-lg transition-all hover:-translate-y-1">
            <item.icon className={`h-8 w-8 mb-3 ${item.color}`} />
            <h3 className="font-semibold mb-1">{item.name}</h3>
            <p className="text-sm text-muted-foreground">{item.count}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
