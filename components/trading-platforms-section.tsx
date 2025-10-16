import { Card } from "@/components/ui/card"
import { Monitor, Smartphone, Globe } from "lucide-react"

export function TradingPlatformsSection() {
  const platforms = [
    {
      icon: Monitor,
      title: "MetaTrader 4 (MT4)",
      description:
        "Available on PC, Mac, iOS, Android, and as a web-based platform. Known for its user-friendly interface, advanced charting tools, technical indicators, and automated trading capabilities.",
    },
    {
      icon: Smartphone,
      title: "MetaTrader 5 (MT5)",
      description:
        "Enhanced version with more timeframes, technical indicators, and improved order management. Supports hedging and netting position accounting.",
    },
    {
      icon: Globe,
      title: "FX Navigator",
      description:
        "Proprietary web platform with customizable market data analysis, economic calendar, and market sentiment insights to help traders make informed decisions.",
    },
  ]

  return (
    <section id="platforms">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Trading Platforms</h2>
      <p className="text-muted-foreground mb-6 leading-relaxed">
        FXTRADING.com provides multiple trading platforms to suit different trading styles:
      </p>
      <div className="grid md:grid-cols-3 gap-6">
        {platforms.map((platform, index) => (
          <Card key={index} className="p-6 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <div className="mb-4 p-3 bg-primary/10 rounded-xl w-fit">
              <platform.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="text-lg font-semibold mb-3">{platform.title}</h3>
            <p className="text-sm text-muted-foreground leading-relaxed">{platform.description}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
