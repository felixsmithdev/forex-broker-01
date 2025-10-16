import { Button } from "@/components/ui/button"
import { Badge } from "@/components/ui/badge"
import { ExternalLink } from "lucide-react"
import Image from "next/image"

export function HeroSection() {
  return (
    <section className="relative">
      <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
        <div className="space-y-6">
          <div className="flex items-center gap-3">
            <div className="relative w-16 h-16 rounded-xl overflow-hidden border-2 border-border shadow-sm">
              <Image src="/fx-trading-logo.jpg" alt="FXTRADING.com" fill className="object-cover" />
            </div>
            <div>
              <h1 className="text-3xl font-bold tracking-tight">FXTRADING.com</h1>
              <div className="flex items-center gap-2 mt-1">
                <Badge variant="secondary" className="text-xs">
                  Vanuatu
                </Badge>
              </div>
            </div>
          </div>

          <div className="flex gap-3">
            <Button size="lg" className="rounded-full shadow-lg shadow-primary/25">
              Open account
            </Button>
            <Button size="lg" variant="outline" className="rounded-full bg-transparent">
              Visit website
              <ExternalLink className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </div>

        <div className="bg-gradient-to-br from-primary/5 via-secondary/5 to-accent/5 rounded-2xl p-8 border border-border shadow-xl">
          <div className="text-center space-y-4">
            <div>
              <div className="text-sm font-medium text-muted-foreground mb-2">Trusted</div>
              <div className="text-6xl font-bold bg-gradient-to-br from-primary via-secondary to-accent bg-clip-text text-transparent">
                8.67
              </div>
              <div className="text-2xl font-semibold text-muted-foreground">/10</div>
            </div>
            <div className="flex justify-center gap-1">
              {[...Array(5)].map((_, i) => (
                <svg
                  key={i}
                  className={cn("w-6 h-6", i < 4 ? "text-accent fill-accent" : "text-muted fill-muted")}
                  viewBox="0 0 20 20"
                >
                  <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                </svg>
              ))}
            </div>
            <p className="text-sm text-muted-foreground">About Us</p>
          </div>
        </div>
      </div>
    </section>
  )
}

function cn(...classes: string[]) {
  return classes.filter(Boolean).join(" ")
}
