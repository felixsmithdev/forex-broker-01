import { Card } from "@/components/ui/card"
import { Phone, MessageCircle, Mail, Clock } from "lucide-react"

export function CustomerSupportSection() {
  const supportChannels = [
    { icon: Phone, title: "Phone Support", detail: "24/5 availability", color: "bg-blue-100 text-blue-600" },
    { icon: MessageCircle, title: "Live Chat", detail: "Instant response", color: "bg-green-100 text-green-600" },
    { icon: Mail, title: "Email Support", detail: "support@fxtrading.com", color: "bg-purple-100 text-purple-600" },
    { icon: Clock, title: "AI Assistant", detail: "24/7 automated help", color: "bg-orange-100 text-orange-600" },
  ]

  return (
    <section id="support">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Customer Support</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
        {supportChannels.map((channel, index) => (
          <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
            <div className={`w-12 h-12 rounded-lg ${channel.color} flex items-center justify-center mb-3`}>
              <channel.icon className="h-6 w-6" />
            </div>
            <h3 className="font-semibold mb-1">{channel.title}</h3>
            <p className="text-sm text-muted-foreground">{channel.detail}</p>
          </Card>
        ))}
      </div>
    </section>
  )
}
