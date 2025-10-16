import { Card } from "@/components/ui/card"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"

export function FeesCommissionsSection() {
  return (
    <section id="fees">
      <h2 className="text-3xl font-bold tracking-tight mb-6">Fees & Commissions</h2>
      <Card className="p-6 shadow-lg overflow-hidden">
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>Fee Type</TableHead>
              <TableHead>Standard Account</TableHead>
              <TableHead>ECN Account</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            <TableRow>
              <TableCell className="font-medium">Commission</TableCell>
              <TableCell>None</TableCell>
              <TableCell>$3.5 per lot</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Deposit Fee</TableCell>
              <TableCell>Free</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Withdrawal Fee</TableCell>
              <TableCell>Free</TableCell>
              <TableCell>Free</TableCell>
            </TableRow>
            <TableRow>
              <TableCell className="font-medium">Inactivity Fee</TableCell>
              <TableCell>$10/month after 6 months</TableCell>
              <TableCell>$10/month after 6 months</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </Card>
    </section>
  )
}
