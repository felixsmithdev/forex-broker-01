import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion"
import { Card } from "@/components/ui/card"

export function FaqSection() {
  const faqs = [
    {
      question: "What is the minimum deposit required?",
      answer: "The minimum deposit for a Standard Account is $100, while the ECN Account requires a minimum of $500.",
    },
    {
      question: "How long does withdrawal take?",
      answer:
        "Withdrawals are typically processed within 1-3 business days. The exact time depends on your payment method.",
    },
    {
      question: "Is FXTRADING.com regulated?",
      answer:
        "Yes, FXTRADING.com is regulated by ASIC (Australian Securities and Investments Commission) under license number 398528.",
    },
    {
      question: "What trading platforms are available?",
      answer:
        "FXTRADING.com offers MetaTrader 4 (MT4) and MetaTrader 5 (MT5) platforms, available on desktop, web, and mobile devices.",
    },
    {
      question: "Can I use Expert Advisors (EAs)?",
      answer:
        "Yes, both MT4 and MT5 platforms support automated trading through Expert Advisors and custom indicators.",
    },
    {
      question: "Are there any hidden fees?",
      answer:
        "No, FXTRADING.com maintains transparent pricing. The only fees are spreads/commissions and an inactivity fee after 6 months of no trading.",
    },
  ]

  return (
    <section id="faq">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Frequently Asked Questions</h2>
      <Card className="p-6 shadow-lg">
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
              <AccordionContent className="text-muted-foreground">{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </Card>
    </section>
  )
}
