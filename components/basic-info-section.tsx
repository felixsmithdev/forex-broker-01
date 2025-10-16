import { Card } from "@/components/ui/card"

export function BasicInfoSection() {
  const info = [
    { label: "Company Name", value: "FXTRADING.com" },
    { label: "Registered Region", value: "Vanuatu" },
    { label: "Established Period", value: "Above 20" },
    { label: "Company Service Email Address", value: "service@fxtrading.com" },
    { label: "Contact Number", value: "+1(626)097365" },
    { label: "Company Website", value: "https://fxtrading.com" },
  ]

  return (
    <section>
      <h2 className="text-3xl font-bold tracking-tight mb-8">Basic Information</h2>
      <Card className="p-8 shadow-lg">
        <div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
          {info.map((item, index) => (
            <div key={index} className="space-y-2">
              <dt className="text-sm font-medium text-muted-foreground">{item.label}</dt>
              <dd className="text-base font-medium text-foreground">{item.value}</dd>
            </div>
          ))}
        </div>
      </Card>
    </section>
  )
}
