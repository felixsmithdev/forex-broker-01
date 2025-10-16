import { Header } from "@/components/header"
import { BrokerListHero } from "@/components/broker-list-hero"
import { BrokerGrid } from "@/components/broker-grid"

export default function HomePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <BrokerListHero />
        <BrokerGrid />
      </main>
    </div>
  )
}
