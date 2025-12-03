import { useState } from "react";
import { User, Bell, Settings } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Switch } from "@/components/ui/switch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { adminUser } from "@/lib/mockData";

export default function AdminSettings() {
  const [profile, setProfile] = useState({
    name: adminUser.name,
    email: adminUser.email,
  });

  const [notifications, setNotifications] = useState({
    emailNewBookings: true,
    emailNewRegistrations: true,
    emailPayments: false,
    browserNotifications: true,
  });

  const [system, setSystem] = useState({
    timezone: "America/New_York",
    dateFormat: "MM/DD/YYYY",
    currency: "USD",
  });

  return (
    <div className="space-y-6 animate-fade-in">
      <div>
        <h1 className="font-heading text-2xl font-bold text-foreground">
          Settings
        </h1>
        <p className="text-muted-foreground">
          Manage your account and system preferences
        </p>
      </div>

      <Tabs defaultValue="profile" className="space-y-6">
        <TabsList>
          <TabsTrigger value="profile" className="gap-2">
            <User className="h-4 w-4" /> Profile
          </TabsTrigger>
          <TabsTrigger value="notifications" className="gap-2">
            <Bell className="h-4 w-4" /> Notifications
          </TabsTrigger>
          <TabsTrigger value="system" className="gap-2">
            <Settings className="h-4 w-4" /> System
          </TabsTrigger>
        </TabsList>

        <TabsContent value="profile">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-4 font-heading text-lg font-semibold">
              Profile Information
            </h2>
            <div className="max-w-md space-y-4">
              <div className="space-y-2">
                <Label htmlFor="name">Full Name</Label>
                <Input
                  id="name"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="email">Email</Label>
                <Input
                  id="email"
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                />
              </div>
              <Button variant="accent">Save Changes</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="notifications">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-4 font-heading text-lg font-semibold">
              Notification Preferences
            </h2>
            <div className="max-w-md space-y-6">
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Booking Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive emails when new bookings are created
                  </p>
                </div>
                <Switch
                  checked={notifications.emailNewBookings}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      emailNewBookings: checked,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">New Registration Alerts</p>
                  <p className="text-sm text-muted-foreground">
                    Get notified when new users register
                  </p>
                </div>
                <Switch
                  checked={notifications.emailNewRegistrations}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      emailNewRegistrations: checked,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Payment Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Receive alerts for payment updates
                  </p>
                </div>
                <Switch
                  checked={notifications.emailPayments}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      emailPayments: checked,
                    })
                  }
                />
              </div>
              <div className="flex items-center justify-between">
                <div>
                  <p className="font-medium">Browser Notifications</p>
                  <p className="text-sm text-muted-foreground">
                    Enable push notifications in browser
                  </p>
                </div>
                <Switch
                  checked={notifications.browserNotifications}
                  onCheckedChange={(checked) =>
                    setNotifications({
                      ...notifications,
                      browserNotifications: checked,
                    })
                  }
                />
              </div>
              <Button variant="accent">Save Preferences</Button>
            </div>
          </div>
        </TabsContent>

        <TabsContent value="system">
          <div className="rounded-xl border border-border bg-card p-6 shadow-card">
            <h2 className="mb-4 font-heading text-lg font-semibold">
              System Settings
            </h2>
            <div className="max-w-md space-y-4">
              <div className="space-y-2">
                <Label>Timezone</Label>
                <Select
                  value={system.timezone}
                  onValueChange={(value) =>
                    setSystem({ ...system, timezone: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="America/New_York">
                      Eastern Time (ET)
                    </SelectItem>
                    <SelectItem value="America/Chicago">
                      Central Time (CT)
                    </SelectItem>
                    <SelectItem value="America/Denver">
                      Mountain Time (MT)
                    </SelectItem>
                    <SelectItem value="America/Los_Angeles">
                      Pacific Time (PT)
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Date Format</Label>
                <Select
                  value={system.dateFormat}
                  onValueChange={(value) =>
                    setSystem({ ...system, dateFormat: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="MM/DD/YYYY">MM/DD/YYYY</SelectItem>
                    <SelectItem value="DD/MM/YYYY">DD/MM/YYYY</SelectItem>
                    <SelectItem value="YYYY-MM-DD">YYYY-MM-DD</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="space-y-2">
                <Label>Currency</Label>
                <Select
                  value={system.currency}
                  onValueChange={(value) =>
                    setSystem({ ...system, currency: value })
                  }
                >
                  <SelectTrigger>
                    <SelectValue />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="USD">USD ($)</SelectItem>
                    <SelectItem value="EUR">EUR (€)</SelectItem>
                    <SelectItem value="GBP">GBP (£)</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button variant="accent">Save Settings</Button>
            </div>
          </div>
        </TabsContent>
      </Tabs>
    </div>
  );
}
