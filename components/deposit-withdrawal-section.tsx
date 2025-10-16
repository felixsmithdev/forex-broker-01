import { Card } from "@/components/ui/card"
import { CreditCard, Wallet, Building2, Zap } from "lucide-react"

export function DepositWithdrawalSection() {
  const paymentMethods = [
    { icon: CreditCard, name: "Credit/Debit Cards", methods: "Visa, Mastercard" },
    { icon: Wallet, name: "E-Wallets", methods: "PayPal, Neteller, Skrill" },
    { icon: Building2, name: "Bank Transfer", methods: "Wire transfer, Local banking" },
    { icon: Zap, name: "Instant Payment", methods: "iDEAL, Online banking" },
  ]

  return (
    <section id="deposit">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Deposit & Withdrawal</h2>
      <div className="grid md:grid-cols-2 gap-6 mb-6">
        {paymentMethods.map((method, index) => (
          <Card key={index} className="p-5 hover:shadow-lg transition-shadow">
            <div className="flex items-start gap-4">
              <div className="p-2 bg-primary/10 rounded-lg">
                <method.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold mb-1">{method.name}</h3>
                <p className="text-sm text-muted-foreground">{method.methods}</p>
              </div>
            </div>
          </Card>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        <Card className="p-5 bg-green-50 dark:bg-green-950/20 border-green-200 dark:border-green-900">
          <h4 className="font-semibold mb-2 text-green-900 dark:text-green-100">Processing Times</h4>
          <p className="text-sm text-green-700 dark:text-green-300">
            Deposits: Instant • Withdrawals: 1-3 business days
          </p>
        </Card>
        <Card className="p-5 bg-blue-50 dark:bg-blue-950/20 border-blue-200 dark:border-blue-900">
          <h4 className="font-semibold mb-2 text-blue-900 dark:text-blue-100">Fees</h4>
          <p className="text-sm text-blue-700 dark:text-blue-300">No deposit or withdrawal fees from FXTRADING.com</p>
        </Card>
      </div>
    </section>
  )
}
