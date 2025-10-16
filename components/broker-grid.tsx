import { Star } from "lucide-react"
import Link from "next/link"

const brokers = [
  { id: 1, name: "FXTRADING.com", score: 7.99, logo: "/fxtrading-logo.jpg" },
  { id: 2, name: "Eightcap", score: 7.86, logo: "/eightcap-logo.jpg" },
  { id: 3, name: "BlackBull", score: 7.76, logo: "/blackbull-logo.jpg" },
  { id: 4, name: "Blueberry Markets", score: 7.4, logo: "/blueberry-markets-logo.jpg" },
  { id: 5, name: "OMG Markets", score: 7.54, logo: "/omg-markets-logo.jpg" },
  { id: 6, name: "FxPro", score: 7.48, logo: "/fxpro-logo.jpg" },
  { id: 7, name: "GM", score: 7.1, logo: "/generic-automotive-logo.png" },
  { id: 8, name: "Equiti", score: 6.26, logo: "/equiti-logo.jpg" },
  { id: 9, name: "CAPEX.com", score: 6.12, logo: "/capex-logo.jpg" },
  { id: 10, name: "IQ Option", score: 5.47, logo: "/iq-option-logo.jpg" },
  { id: 11, name: "CVS", score: 5.21, logo: "/cvs-logo.jpg" },
  { id: 12, name: "LiteForex", score: 4.99, logo: "/liteforex-logo.jpg" },
  { id: 13, name: "MSN", score: 3.27, logo: "/msn-logo.jpg" },
  { id: 14, name: "MultiBank Group", score: 2.97, logo: "/multibank-logo.jpg" },
  { id: 15, name: "FXPRIMUS", score: 2.47, logo: "/fxprimus-logo.jpg" },
  { id: 16, name: "MTtrading", score: 2.39, logo: "/mttrading-logo.jpg" },
  { id: 17, name: "Billion Markets", score: 2.29, logo: "/placeholder.svg?height=60&width=160" },
  { id: 18, name: "Marketcall", score: 2.07, logo: "/placeholder.svg?height=60&width=160" },
  { id: 19, name: "OBSFX", score: 1.93, logo: "/placeholder.svg?height=60&width=160" },
  { id: 20, name: "Prodigy", score: 1.93, logo: "/placeholder.svg?height=60&width=160" },
  { id: 21, name: "Auro Markets", score: 1.76, logo: "/placeholder.svg?height=60&width=160" },
  { id: 22, name: "SWSJ", score: 1.73, logo: "/placeholder.svg?height=60&width=160" },
  { id: 23, name: "Progressive", score: 1.66, logo: "/placeholder.svg?height=60&width=160" },
  { id: 24, name: "FOX", score: 1.59, logo: "/placeholder.svg?height=60&width=160" },
  { id: 25, name: "FRONTIER", score: 1.57, logo: "/placeholder.svg?height=60&width=160" },
  { id: 26, name: "Bank of America", score: 1.57, logo: "/placeholder.svg?height=60&width=160" },
  { id: 27, name: "YT", score: 1.56, logo: "/placeholder.svg?height=60&width=160" },
  { id: 28, name: "Spectrum", score: 1.56, logo: "/placeholder.svg?height=60&width=160" },
  { id: 29, name: "DELTA", score: 1.55, logo: "/placeholder.svg?height=60&width=160" },
  { id: 30, name: "GPT", score: 1.54, logo: "/placeholder.svg?height=60&width=160" },
  { id: 31, name: "SP500", score: 1.54, logo: "/placeholder.svg?height=60&width=160" },
  { id: 32, name: "CITIBANK", score: 1.53, logo: "/placeholder.svg?height=60&width=160" },
  { id: 33, name: "AI", score: 1.53, logo: "/placeholder.svg?height=60&width=160" },
  { id: 34, name: "BTC", score: 1.52, logo: "/placeholder.svg?height=60&width=160" },
  { id: 35, name: "WIX", score: 1.5, logo: "/placeholder.svg?height=60&width=160" },
  { id: 36, name: "JP", score: 1.49, logo: "/placeholder.svg?height=60&width=160" },
  { id: 37, name: "Charles Schwab", score: 1.48, logo: "/placeholder.svg?height=60&width=160" },
  { id: 38, name: "Target", score: 1.48, logo: "/placeholder.svg?height=60&width=160" },
  { id: 39, name: "DAP", score: 1.47, logo: "/placeholder.svg?height=60&width=160" },
  { id: 40, name: "IBC", score: 1.45, logo: "/placeholder.svg?height=60&width=160" },
]

export function BrokerGrid() {
  return (
    <div>
      <h2 className="text-2xl font-bold text-foreground mb-6">Global Broker Rankings</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {brokers.map((broker, index) => (
          <Link key={broker.id} href={`/info/xm-forex-broker-information-guide.html`} className="group">
            <div className="flex flex-col items-center gap-3 p-4 bg-card rounded-lg border border-border hover:border-primary hover:shadow-md transition-all h-full">
              <div className="w-full h-20 bg-muted rounded flex items-center justify-center overflow-hidden px-3">
                <img
                  src={broker.logo || "/placeholder.svg"}
                  alt={broker.name}
                  className="max-w-full max-h-full object-contain"
                />
              </div>

              <div className="w-full text-center">
                <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors text-base mb-2 line-clamp-2">
                  {broker.name}
                </h3>

                <div className="flex items-center gap-1 justify-center">
                  <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-lg font-bold text-foreground">{broker.score}</span>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  )
}
