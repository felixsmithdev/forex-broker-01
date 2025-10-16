import { Card } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"

export function AccountTypesSection() {
  return (
    <section id="account-types">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Account Types</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">Standard Account</h3>
            <Badge variant="secondary">Popular</Badge>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Commission: None</li>
            <li>• Spreads: From 1.2 pips</li>
            <li>• Minimum deposit: $100</li>
            <li>• Leverage: Up to 1:500</li>
            <li>• Execution: Instant</li>
          </ul>
        </Card>

        <Card className="p-6 shadow-lg hover:shadow-xl transition-shadow">
          <div className="flex items-center justify-between mb-4">
            <h3 className="text-xl font-semibold">ECN Account</h3>
            <Badge>Pro</Badge>
          </div>
          <ul className="space-y-2 text-sm text-muted-foreground">
            <li>• Commission: $3.5 per lot</li>
            <li>• Spreads: From 0.0 pips</li>
            <li>• Minimum deposit: $500</li>
            <li>• Leverage: Up to 1:500</li>
            <li>• Execution: Market</li>
          </ul>
        </Card>
      </div>

      <Card className="mt-6 p-6 bg-muted/50">
        <h4 className="font-semibold mb-3">Common Features</h4>
        <div className="grid sm:grid-cols-2 gap-3 text-sm text-muted-foreground">
          <div>• Maximum lot per order: 50 lots</div>
          <div>• Minimum lot size: 0.01 lots</div>
          <div>• Hedging allowed: Yes</div>
          <div>• Platforms: MT4 & MT5</div>
        </div>
      </Card>
    </section>
  )
}
