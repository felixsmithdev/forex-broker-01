import { Card } from "@/components/ui/card"
import { CheckCircle2, XCircle } from "lucide-react"

export function ProsConsSection() {
  const pros = [
    "Regulated by ASIC",
    "Wide range of trading instruments",
    "Multiple trading platforms and tools available",
    "Comprehensive educational resources",
    "24/7 customer support",
  ]

  const cons = [
    "Clients from the USA, Ontario Province (inside Canada), North Korea, Iran and New Zealand are not accepted",
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-8">Pros and Cons</h2>
      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-6 bg-secondary/5 border-secondary/20 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <CheckCircle2 className="h-5 w-5 text-secondary" />
            <h3 className="text-lg font-semibold">Pros</h3>
          </div>
          <ul className="space-y-3">
            {pros.map((pro, index) => (
              <li key={index} className="flex items-start gap-3">
                <CheckCircle2 className="h-5 w-5 text-secondary mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{pro}</span>
              </li>
            ))}
          </ul>
        </Card>

        <Card className="p-6 bg-destructive/5 border-destructive/20 shadow-lg">
          <div className="flex items-center gap-2 mb-4">
            <XCircle className="h-5 w-5 text-destructive" />
            <h3 className="text-lg font-semibold">Cons</h3>
          </div>
          <ul className="space-y-3">
            {cons.map((con, index) => (
              <li key={index} className="flex items-start gap-3">
                <XCircle className="h-5 w-5 text-destructive mt-0.5 flex-shrink-0" />
                <span className="text-sm text-muted-foreground leading-relaxed">{con}</span>
              </li>
            ))}
          </ul>
        </Card>
      </div>
    </section>
  )
}
