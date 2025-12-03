import { useState } from "react";
import { DollarSign, Clock, AlertCircle, Filter } from "lucide-react";
import { StatsCard } from "@/components/shared/StatsCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { payments } from "@/lib/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function PaymentsInvoices() {
  const [statusFilter, setStatusFilter] = useState("all");

  const totalRevenue = payments
    .filter((p) => p.status === "PAID")
    .reduce((sum, p) => sum + p.amount, 0);

  const pendingPayments = payments.filter((p) => p.status === "PENDING").length;

  const filteredPayments = payments.filter(
    (payment) =>
      statusFilter === "all" || payment.status === statusFilter.toUpperCase()
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Payments & Invoices
        </h1>
        <p className="text-muted-foreground">
          Track revenue and payment status
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatsCard
          title="Total Revenue (This Month)"
          value={`$${totalRevenue.toLocaleString()}`}
          icon={DollarSign}
          trend={{ value: 15, isPositive: true }}
        />
        <StatsCard
          title="Pending Payments"
          value={pendingPayments}
          icon={Clock}
        />
        <StatsCard title="Failed Payments" value={0} icon={AlertCircle} />
      </div>

      {/* Filter */}
      <div className="flex justify-end">
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-40">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="paid">Paid</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="failed">Failed</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Payments Table */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <th className="px-4 py-3">Payment ID</th>
              <th className="px-4 py-3">Booking</th>
              <th className="px-4 py-3">Theater</th>
              <th className="px-4 py-3">Amount</th>
              <th className="px-4 py-3">Method</th>
              <th className="px-4 py-3">Date</th>
              <th className="px-4 py-3">Status</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredPayments.map((payment) => (
              <tr key={payment.id} className="hover:bg-muted/30">
                <td className="px-4 py-4 text-sm font-mono font-medium">
                  {payment.id}
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground">
                  {payment.bookingId}
                </td>
                <td className="px-4 py-4 text-sm">{payment.theaterName}</td>
                <td className="px-4 py-4 text-sm font-semibold">
                  ${payment.amount}
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground">
                  {payment.method}
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground">
                  {payment.date}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={payment.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
