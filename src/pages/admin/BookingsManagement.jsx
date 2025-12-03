import { useState } from "react";
import { Search, Filter, Calendar as CalendarIcon, Eye } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { StatusBadge } from "@/components/shared/StatusBadge";
import { bookings, cleaningTeams } from "@/lib/mockData";
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
  SheetFooter,
} from "@/components/ui/sheet";

export default function BookingsManagement() {
  const [statusFilter, setStatusFilter] = useState("all");
  const [selectedBooking, setSelectedBooking] = useState(null);
  const [editData, setEditData] = useState({
    teamId: "",
    status: "",
  });

  const filteredBookings = bookings.filter(
    (booking) =>
      statusFilter === "all" || booking.status === statusFilter.toUpperCase()
  );

  const handleOpenDrawer = (booking) => {
    setSelectedBooking(booking);
    setEditData({
      teamId: booking.teamId || "",
      status: booking.status,
    });
  };

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Bookings Management
        </h1>
        <p className="text-muted-foreground">
          View and manage all cleaning bookings
        </p>
      </div>

      {/* Filters */}
      <div className="flex flex-col gap-4 sm:flex-row sm:items-center">
        <div className="relative flex-1">
          <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
          <Input placeholder="Search bookings..." className="pl-10" />
        </div>
        <div className="flex gap-2">
          <Button variant="outline" className="gap-2">
            <CalendarIcon className="h-4 w-4" />
            Date Range
          </Button>
          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="w-40">
              <Filter className="mr-2 h-4 w-4" />
              <SelectValue placeholder="Status" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Status</SelectItem>
              <SelectItem value="pending">Pending</SelectItem>
              <SelectItem value="confirmed">Confirmed</SelectItem>
              <SelectItem value="in_progress">In Progress</SelectItem>
              <SelectItem value="completed">Completed</SelectItem>
              <SelectItem value="cancelled">Cancelled</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>

      {/* Bookings Table */}
      <div className="rounded-xl border border-border bg-card shadow-card overflow-hidden">
        <table className="w-full">
          <thead>
            <tr className="border-b border-border bg-muted/50 text-left text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              <th className="px-4 py-3">Booking ID</th>
              <th className="px-4 py-3">Theater</th>
              <th className="px-4 py-3">Package</th>
              <th className="px-4 py-3">Date & Time</th>
              <th className="px-4 py-3">Team</th>
              <th className="px-4 py-3">Status</th>
              <th className="px-4 py-3">Actions</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-border">
            {filteredBookings.map((booking) => (
              <tr
                key={booking.id}
                className="hover:bg-muted/30 cursor-pointer"
                onClick={() => handleOpenDrawer(booking)}
              >
                <td className="px-4 py-4 text-sm font-mono font-medium">
                  {booking.id}
                </td>
                <td className="px-4 py-4 text-sm">{booking.theaterName}</td>
                <td className="px-4 py-4 text-sm text-muted-foreground">
                  {booking.packageName}
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
                  {booking.teamName || (
                    <span className="text-warning">Unassigned</span>
                  )}
                </td>
                <td className="px-4 py-4">
                  <StatusBadge status={booking.status} />
                </td>
                <td className="px-4 py-4">
                  <Button
                    size="icon"
                    variant="ghost"
                    className="h-8 w-8"
                    onClick={(e) => {
                      e.stopPropagation();
                      handleOpenDrawer(booking);
                    }}
                  >
                    <Eye className="h-4 w-4" />
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
              <div className="space-y-4">
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
                    <p className="text-sm text-muted-foreground">Theater</p>
                    <p className="font-medium">{selectedBooking.theaterName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Package</p>
                    <p className="font-medium">{selectedBooking.packageName}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Date</p>
                    <p className="font-medium">{selectedBooking.date}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Time</p>
                    <p className="font-medium">{selectedBooking.time}</p>
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

              <div className="space-y-4 border-t border-border pt-4">
                <div className="space-y-2">
                  <Label>Assigned Team</Label>
                  <Select
                    value={editData.teamId}
                    onValueChange={(value) =>
                      setEditData({ ...editData, teamId: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue placeholder="Select team" />
                    </SelectTrigger>
                    <SelectContent>
                      {cleaningTeams
                        .filter((t) => t.status === "ACTIVE")
                        .map((team) => (
                          <SelectItem key={team.id} value={team.id}>
                            {team.name}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>

                <div className="space-y-2">
                  <Label>Status</Label>
                  <Select
                    value={editData.status}
                    onValueChange={(value) =>
                      setEditData({ ...editData, status: value })
                    }
                  >
                    <SelectTrigger>
                      <SelectValue />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="PENDING">Pending</SelectItem>
                      <SelectItem value="CONFIRMED">Confirmed</SelectItem>
                      <SelectItem value="IN_PROGRESS">In Progress</SelectItem>
                      <SelectItem value="COMPLETED">Completed</SelectItem>
                      <SelectItem value="CANCELLED">Cancelled</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
          )}
          <SheetFooter className="mt-6">
            <Button variant="outline" onClick={() => setSelectedBooking(null)}>
              Cancel
            </Button>
            <Button variant="accent" onClick={() => setSelectedBooking(null)}>
              Save Changes
            </Button>
          </SheetFooter>
        </SheetContent>
      </Sheet>
    </div>
  );
}
