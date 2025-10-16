import { Header } from "@/components/header"
import { Sidebar } from "@/components/sidebar"
import { HeroSection } from "@/components/hero-section"
import { ProsConsSection } from "@/components/pros-cons-section"
import { BasicInfoSection } from "@/components/basic-info-section"
import { ReviewsSection } from "@/components/reviews-section"
import { OverviewSection } from "@/components/overview-section"
import { RegulationSection } from "@/components/regulation-section"
import { FaqSection } from "@/components/faq-section"
import { RelatedBrokersSection } from "@/components/related-brokers-section"
import { Footer } from "@/components/footer"

export default function FXTradingPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <div className="flex">
        <Sidebar />
        <main className="flex-1 lg:ml-64">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 space-y-12">
            <HeroSection />
            <ProsConsSection />
            <BasicInfoSection />
            <ReviewsSection />
            <OverviewSection />
            <RegulationSection />
            <FaqSection />
            <RelatedBrokersSection />
          </div>
        </main>
      </div>
      <Footer />
    </div>
  )
}
