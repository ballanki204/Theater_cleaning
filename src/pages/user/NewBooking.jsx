import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Calendar as CalendarIcon, Clock, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { servicePackages, theaters } from "@/lib/mockData";
import { cn } from "@/lib/utils";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";

export default function NewBooking() {
  const navigate = useNavigate();
  const [showSuccess, setShowSuccess] = useState(false);
  const [date, setDate] = useState();
  const [formData, setFormData] = useState({
    theaterId: theaters[0].id,
    packageId: "",
    time: "",
    instructions: "",
  });

  const selectedPackage = servicePackages.find(
    (p) => p.id === formData.packageId
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    setShowSuccess(true);
  };

  const handleClose = () => {
    setShowSuccess(false);
    navigate("/app/bookings");
  };

  const timeSlots = [
    "05:00",
    "05:30",
    "06:00",
    "06:30",
    "07:00",
    "07:30",
    "08:00",
    "08:30",
    "09:00",
  ];

  return (
    <div className="animate-fade-in">
      <div className="mb-6">
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Book New Cleaning
        </h1>
        <p className="text-muted-foreground">
          Schedule a cleaning service for your theater
        </p>
      </div>

      <div className="grid gap-6 lg:grid-cols-3">
        {/* Form */}
        <div className="lg:col-span-2">
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Theater Selection */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Select Theater
              </h2>
              <Select
                value={formData.theaterId}
                onValueChange={(value) =>
                  setFormData({ ...formData, theaterId: value })
                }
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select theater" />
                </SelectTrigger>
                <SelectContent>
                  {theaters.map((theater) => (
                    <SelectItem key={theater.id} value={theater.id}>
                      {theater.name} - {theater.city}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Package Selection */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Select Package
              </h2>
              <div className="grid gap-3 sm:grid-cols-2">
                {servicePackages
                  .filter((p) => p.status === "ACTIVE")
                  .map((pkg) => (
                    <button
                      key={pkg.id}
                      type="button"
                      onClick={() =>
                        setFormData({ ...formData, packageId: pkg.id })
                      }
                      className={cn(
                        "rounded-lg border p-4 text-left transition-all",
                        formData.packageId === pkg.id
                          ? "border-accent bg-accent/5 ring-2 ring-accent"
                          : "border-border hover:border-accent/50"
                      )}
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <p className="font-semibold">{pkg.name}</p>
                          <p className="mt-1 text-sm text-muted-foreground line-clamp-2">
                            {pkg.description}
                          </p>
                        </div>
                        {formData.packageId === pkg.id && (
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-accent">
                            <Check className="h-3 w-3 text-accent-foreground" />
                          </div>
                        )}
                      </div>
                      <div className="mt-3 flex items-center gap-4 text-sm">
                        <span className="text-muted-foreground">
                          {pkg.duration} min
                        </span>
                        <span className="font-semibold">${pkg.basePrice}</span>
                      </div>
                    </button>
                  ))}
              </div>
            </div>

            {/* Date & Time */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Select Date & Time
              </h2>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-2">
                  <Label>Date</Label>
                  <Popover>
                    <PopoverTrigger asChild>
                      <Button
                        variant="outline"
                        className={cn(
                          "w-full justify-start text-left font-normal",
                          !date && "text-muted-foreground"
                        )}
                      >
                        <CalendarIcon className="mr-2 h-4 w-4" />
                        {date ? format(date, "PPP") : "Pick a date"}
                      </Button>
                    </PopoverTrigger>
                    <PopoverContent className="w-auto p-0" align="start">
                      <Calendar
                        mode="single"
                        selected={date}
                        onSelect={setDate}
                        initialFocus
                        className="pointer-events-auto"
                      />
                    </PopoverContent>
                  </Popover>
                </div>
                <div className="space-y-2">
                  <Label>Time</Label>
                  <Select
                    value={formData.time}
                    onValueChange={(value) =>
                      setFormData({ ...formData, time: value })
                    }
                  >
                    <SelectTrigger>
                      <Clock className="mr-2 h-4 w-4" />
                      <SelectValue placeholder="Select time" />
                    </SelectTrigger>
                    <SelectContent>
                      {timeSlots.map((time) => (
                        <SelectItem key={time} value={time}>
                          {time}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>

            {/* Instructions */}
            <div className="rounded-xl border border-border bg-card p-6 shadow-card">
              <h2 className="mb-4 font-heading text-lg font-semibold">
                Special Instructions
              </h2>
              <Textarea
                placeholder="Any specific requirements or notes for the cleaning team..."
                value={formData.instructions}
                onChange={(e) =>
                  setFormData({ ...formData, instructions: e.target.value })
                }
                className="min-h-[100px]"
              />
            </div>

            {/* Actions */}
            <div className="flex gap-3">
              <Button
                type="button"
                variant="outline"
                onClick={() => navigate("/app/bookings")}
              >
                Cancel
              </Button>
              <Button
                type="submit"
                variant="accent"
                disabled={!formData.packageId || !date || !formData.time}
              >
                Submit Booking Request
              </Button>
            </div>
          </form>
        </div>

        {/* Summary */}
        <div className="lg:col-span-1">
          <div className="sticky top-24 rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-4 font-heading text-lg font-semibold">
              Booking Summary
            </h2>
            <div className="space-y-4">
              <div>
                <p className="text-sm text-muted-foreground">Theater</p>
                <p className="font-medium">
                  {theaters.find((t) => t.id === formData.theaterId)?.name ||
                    "—"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Package</p>
                <p className="font-medium">{selectedPackage?.name || "—"}</p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Date</p>
                <p className="font-medium">
                  {date ? format(date, "PPP") : "—"}
                </p>
              </div>
              <div>
                <p className="text-sm text-muted-foreground">Time</p>
                <p className="font-medium">{formData.time || "—"}</p>
              </div>
              {selectedPackage && (
                <>
                  <div className="border-t border-border pt-4">
                    <p className="text-sm text-muted-foreground">Duration</p>
                    <p className="font-medium">
                      {selectedPackage.duration} minutes
                    </p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">
                      Estimated Price
                    </p>
                    <p className="text-2xl font-bold text-accent">
                      ${selectedPackage.basePrice}
                    </p>
                  </div>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Success Dialog */}
      <Dialog open={showSuccess} onOpenChange={setShowSuccess}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-full bg-success/10">
                <Check className="h-5 w-5 text-success" />
              </div>
              Booking Request Submitted
            </DialogTitle>
          </DialogHeader>
          <p className="text-muted-foreground">
            Your cleaning request has been submitted and is pending admin
            confirmation. You'll be notified once it's approved.
          </p>
          <DialogFooter>
            <Button variant="accent" onClick={handleClose}>
              View My Bookings
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </div>
  );
}
