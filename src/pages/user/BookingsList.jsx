import { useState } from "react";
import { Search, Filter, Eye, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { bookings } from "@/lib/mockData";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from "@/components/ui/sheet";
import { Alert, AlertDescription } from "@/components/ui/alert";

export default function BookingsList() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);

  const userBookings = bookings.filter((b) => b.theaterId === "1");

  const filteredBookings = userBookings.filter(
    (booking) =>
      statusFilter === "all" || booking.status === statusFilter.toUpperCase()
  );

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          My Bookings
        </h1>
        <p className="text-muted-foreground">
          View all your cleaning booking requests
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search bookings..." className="pl-10" />
        </div>
        <Select value={statusFilter} onValueChange={setStatusFilter}>
          <SelectTrigger className="w-full sm:w-40">
            <Filter className="mr-2 h-4 w-4" />
            <SelectValue placeholder="Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="all">All Status</SelectItem>
            <SelectItem value="pending">Pending</SelectItem>
            <SelectItem value="confirmed">Confirmed</SelectItem>
            <SelectItem value="completed">Completed</SelectItem>
            <SelectItem value="cancelled">Cancelled</SelectItem>
          </SelectContent>
        </Select>
      </div>

      {/* Bookings Table */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <th className="px-4 py-3">Booking ID</th>
              <th className="px-4 py-3">Date & Time</th>
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Team</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredBookings.map((booking) => (
              <tr key={booking.id} className="hover:bg-muted/30">
                <td className="px-4 py-4 text-sm font-mono font-medium">
                  {booking.id}
                </td>
                <td className="px-4 py-4 text-sm">
                  <div>
                    <p className="font-medium">{booking.date}</p>
                    <p className="text-xs text-muted-foreground">
                      {booking.time}
                    </p>
                  </div>
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground">
                  {booking.packageName}
                </td>
                <td className="px-4 py-4 text-sm text-muted-foreground">
                  {booking.teamName || "—"}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={booking.status} />
                </td>
                <td className="px-4 py-4">
                  <Button
                    size="sm"
                    variant="outline"
                    onClick={() => setSelectedBooking(booking)}
                  >
                    <Eye className="mr-1 h-3 w-3" /> View
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Booking Details Drawer */}
      <Sheet
        open={!!selectedBooking}
        onOpenChange={() => setSelectedBooking(null)}
      >
        <SheetContent className="sm:max-w-md">
          <SheetHeader>
            <SheetTitle>Booking Details</SheetTitle>
          </SheetHeader>
          {selectedBooking && (
            <div className="mt-6 space-y-6">
              {selectedBooking.status === "PENDING" && (
                <Alert className="border-warning/50 bg-warning/10">
                  <AlertCircle className="h-4 w-4 text-warning" />
                  <AlertDescription className="text-warning">
                    Waiting for admin confirmation
                  </AlertDescription>
                </Alert>
              )}

              <div className="rounded-lg bg-muted/50 p-4">
                <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                  Booking ID
                </p>
                <p className="mt-1 font-mono font-medium">
                  {selectedBooking.id}
                </p>
              </div>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <p className="text-sm text-muted-foreground">Package</p>
                  <p className="font-medium">{selectedBooking.packageName}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Status</p>
                  <StatusBadge
                    status={selectedBooking.status}
                    className="mt-1"
                  />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Date</p>
                  <p className="font-medium">{selectedBooking.date}</p>
                </div>
                <div>
                  <p className="text-sm text-muted-foreground">Time</p>
                  <p className="font-medium">{selectedBooking.time}</p>
                </div>
                <div className="col-span-2">
                  <p className="text-sm text-muted-foreground">Assigned Team</p>
                  <p className="font-medium">
                    {selectedBooking.teamName || "Not yet assigned"}
                  </p>
                </div>
              </div>

              {selectedBooking.specialInstructions && (
                <div>
                  <p className="text-sm text-muted-foreground">
                    Special Instructions
                  </p>
                  <p className="mt-1 text-sm">
                    {selectedBooking.specialInstructions}
                  </p>
                </div>
              )}
            </div>
          )}
        </SheetContent>
      </Sheet>
    </div>
  );
}
