import { Link } from "react-router-dom";
import {
  Building2,
  Users,
  Calendar,
  Clock,
  ArrowRight,
  Check,
  X,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/shared/StatsCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { bookings, pendingUsers, bookingsChartData } from "@/lib/mockData";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
} from "recharts";

export default function AdminDashboard() {
  const todaysBookings = bookings.filter(
    (b) => b.date === "2024-01-20" && b.status !== "CANCELLED"
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Dashboard Overview
        </h1>
        <p className="text-muted-foreground">
          Welcome back! Here's what's happening today.
        </p>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
        <StatsCard
          title="Total Theaters"
          value={24}
          icon={Building2}
          trend={{ value: 12, isPositive: true }}
        />
        <StatsCard
          title="Active Teams"
          value={8}
          icon={Users}
          trend={{ value: 5, isPositive: true }}
        />
        <StatsCard
          title="Today's Bookings"
          value={todaysBookings.length}
          icon={Calendar}
        />
        <StatsCard
          title="Pending Approvals"
          value={pendingUsers.length}
          icon={Clock}
        />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Today's Bookings */}
        <div className="lg:col-span-2 rounded-xl bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Today's Bookings
            </h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/bookings">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3 pr-4">Theater</th>
                  <th className="pb-3 pr-4">Team</th>
                  <th className="pb-3 pr-4">Time</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {todaysBookings.map((booking) => (
                  <tr key={booking.id}>
                    <td className="py-3 pr-4 text-sm font-medium">
                      {booking.theaterName}
                    </td>
                    <td className="py-3 pr-4 text-sm text-muted-foreground">
                      {booking.teamName || "Unassigned"}
                    </td>
                    <td className="py-3 pr-4 text-sm text-muted-foreground">
                      {booking.time}
                    </td>
                    <td className="py-3">
                      <StatusBadge status={booking.status} />
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* New Registrations */}
        <div className="rounded-xl bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              New Registrations
            </h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/admin/theaters">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="space-y-3">
            {pendingUsers.slice(0, 3).map((user) => (
              <div
                key={user.id}
                className="flex items-center justify-between rounded-lg border border-border p-3"
              >
                <div className="min-w-0">
                  <p className="truncate text-sm font-medium">{user.name}</p>
                  <p className="truncate text-xs text-muted-foreground">
                    {user.theaterName}
                  </p>
                </div>
                <div className="flex gap-1">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-success hover:bg-success/10 hover:text-success"
                  >
                    <Check className="h-4 w-4" />
                  </Button>
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8 text-destructive hover:bg-destructive/10 hover:text-destructive"
                  >
                    <X className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Chart */}
      <div className="rounded-xl bg-card p-6 shadow-card">
        <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">
          Bookings Last 7 Days
        </h2>
        <div className="h-[300px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={bookingsChartData}>
              <CartesianGrid
                strokeDasharray="3 3"
                vertical={false}
                stroke="hsl(var(--border))"
              />
              <XAxis
                dataKey="day"
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <YAxis
                axisLine={false}
                tickLine={false}
                tick={{ fill: "hsl(var(--muted-foreground))", fontSize: 12 }}
              />
              <Tooltip
                contentStyle={{
                  backgroundColor: "hsl(var(--card))",
                  border: "1px solid hsl(var(--border))",
                  borderRadius: "8px",
                }}
              />
              <Bar
                dataKey="bookings"
                fill="hsl(var(--accent))"
                radius={[4, 4, 0, 0]}
              />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}
