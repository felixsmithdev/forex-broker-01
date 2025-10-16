import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Shield } from "lucide-react"

export function RegulationSection() {
  return (
    <section id="regulation">
      <h2 className="text-3xl font-bold tracking-tight mb-8">FXTRADING.com Safe? Regulation Analysis</h2>
      <Card className="p-8 shadow-lg border-secondary/20">
        <div className="flex items-start gap-4 mb-6">
          <div className="p-3 bg-secondary/10 rounded-xl">
            <Shield className="h-6 w-6 text-secondary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center gap-3 mb-2">
              <h3 className="text-xl font-semibold">Regulatory Status</h3>
              <Badge variant="secondary" className="bg-secondary/20 text-secondary">
                Regulated
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              FXTRADING.com's regulatory framework is a telling example of industry strategy: it holds just a Market
              Maker (MM) license from ASIC (Australian Securities and Investments Commission), which represents a lower
              tier of regulation compared to full-service brokers. This classification means the broker can facilitate
              trades but may not offer the same level of investor protection as more comprehensively regulated entities.
            </p>
          </div>
        </div>
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed">
            The Australian Securities and Investments Commission (ASIC) is one of the world's most respected financial
            oversight systems, which monitors high capital thresholds, real-time large monitoring, and investor
            protections (such as ASIC's segregated client-based fund credibility for safer to trade with brokers under
            its jurisdiction). This Australian approach demands the broker maintain credibility for safer trading with
            brokers under its jurisdiction.
          </p>
        </div>
      </Card>
    </section>
  )
}
