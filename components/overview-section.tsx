import { Card } from "@/components/ui/card"

export function OverviewSection() {
  return (
    <section id="overview">
      <h2 className="text-3xl font-bold tracking-tight mb-4">FXTRADING.com Overview</h2>
      <h3 className="text-xl font-semibold text-muted-foreground mb-6">Overview and General Information</h3>
      <Card className="p-6 shadow-lg">
        <div className="prose prose-sm max-w-none">
          <p className="text-muted-foreground leading-relaxed mb-4">
            FXTRADING.com is an online brokerage firm established in 2012, headquartered in Sydney, Australia. It
            provides trading services for over 15,000 financial instruments, including forex, cryptocurrencies,
            commodities, indices, stocks, and ETFs.
          </p>
          <p className="text-muted-foreground leading-relaxed">
            The broker supports both English and Chinese and maintains an active presence on social media platforms such
            as Facebook, Twitter, and YouTube. Client support is provided 24/5 via phone and live chat, with 24/7 AI
            assistance, and the website includes a comprehensive FAQ section.
          </p>
        </div>
      </Card>
    </section>
  )
}
