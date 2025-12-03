import { Link } from "react-router-dom";
import { Calendar, CheckCircle, Clock, ArrowRight, Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import { StatsCard } from "@/components/shared/StatsCard";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { currentUser, bookings, recentActivity } from "@/lib/mockData";

export default function UserDashboard() {
  const userBookings = bookings.filter((b) => b.theaterId === "1");
  const upcomingBookings = userBookings.filter(
    (b) => b.status === "PENDING" || b.status === "CONFIRMED"
  );
  const completedThisMonth = userBookings.filter(
    (b) => b.status === "COMPLETED"
  ).length;

  return (
    <div className="space-y-6 animate-fade-in">
      {/* Welcome Header */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <h1 className="font-heading text-2xl font-bold text-foreground">
            Welcome back, {currentUser.name}
          </h1>
          <p className="text-muted-foreground">
            from {currentUser.theaterName}
          </p>
        </div>
        <Button variant="accent" asChild>
          <Link to="/app/bookings/new">
            <Plus className="mr-2 h-4 w-4" /> Book New Cleaning
          </Link>
        </Button>
      </div>

      {/* Stats Cards */}
      <div className="grid gap-4 sm:grid-cols-3">
        <StatsCard
          title="Upcoming Bookings"
          value={upcomingBookings.length}
          icon={Calendar}
        />
        <StatsCard
          title="Completed This Month"
          value={completedThisMonth}
          icon={CheckCircle}
        />
        <StatsCard title="Last Cleaning Date" value="Jan 19" icon={Clock} />
      </div>

      {/* Main Content */}
      <div className="grid gap-6 lg:grid-cols-3">
        {/* Upcoming Bookings */}
        <div className="lg:col-span-2 rounded-xl bg-card p-6 shadow-card">
          <div className="mb-4 flex items-center justify-between">
            <h2 className="font-heading text-lg font-semibold text-foreground">
              Upcoming Bookings
            </h2>
            <Button variant="ghost" size="sm" asChild>
              <Link to="/app/bookings">
                View all <ArrowRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="border-b border-border text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  <th className="pb-3 pr-4">Date</th>
                  <th className="pb-3 pr-4">Time</th>
                  <th className="pb-3 pr-4">Package</th>
                  <th className="pb-3">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border">
                {upcomingBookings.length > 0 ? (
                  upcomingBookings.map((booking) => (
                    <tr key={booking.id}>
                      <td className="py-3 pr-4 text-sm font-medium">
                        {booking.date}
                      </td>
                      <td className="py-3 pr-4 text-sm text-muted-foreground">
                        {booking.time}
                      </td>
                      <td className="py-3 pr-4 text-sm text-muted-foreground">
                        {booking.packageName}
                      </td>
                      <td className="py-3">
                        <StatusBadge status={booking.status} />
                      </td>
                    </tr>
                  ))
                ) : (
                  <tr>
                    <td
                      colSpan={4}
                      className="py-8 text-center text-muted-foreground"
                    >
                      No upcoming bookings
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
        </div>

        {/* Recent Activity */}
        <div className="rounded-xl bg-card p-6 shadow-card">
          <h2 className="mb-4 font-heading text-lg font-semibold text-foreground">
            Recent Activity
          </h2>
          <div className="space-y-4">
            {recentActivity.map((activity, index) => (
              <div
                key={activity.id}
                className="relative flex gap-4 pb-4 last:pb-0"
              >
                {index < recentActivity.length - 1 && (
                  <div className="absolute left-[7px] top-6 h-full w-0.5 bg-border" />
                )}
                <div className="relative z-10 h-4 w-4 rounded-full border-2 border-accent bg-card" />
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-medium">{activity.action}</p>
                  <p className="text-xs text-muted-foreground truncate">
                    {activity.description}
                  </p>
                  <p className="mt-1 text-xs text-muted-foreground">
                    {activity.time}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
