import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Layouts
import { AdminLayout } from "@/components/layout/AdminLayout";
import { UserLayout } from "@/components/layout/UserLayout";

// Auth Pages
import Login from "@/pages/auth/Login";
import Register from "@/pages/auth/Register";
import PendingApproval from "@/pages/auth/PendingApproval";

// Admin Pages
import AdminDashboard from "@/pages/admin/AdminDashboard";
import TheaterUsers from "@/pages/admin/TheaterUsers";
import CleaningTeams from "@/pages/admin/CleaningTeams";
import ServicePackages from "@/pages/admin/ServicePackages";
import BookingsManagement from "@/pages/admin/BookingsManagement";
import PaymentsInvoices from "@/pages/admin/PaymentsInvoices";
import AdminSettings from "@/pages/admin/AdminSettings";

// User Pages
import UserDashboard from "@/pages/user/UserDashboard";
import TheaterProfile from "@/pages/user/TheaterProfile";
import BookingsList from "@/pages/user/BookingsList";
import NewBooking from "@/pages/user/NewBooking";
import UserProfile from "@/pages/user/UserProfile";

import NotFound from "./pages/NotFound";
import LandingPage from "./pages/LandingPage";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter
        future={{
          v7_startTransition: true,
          v7_relativeSplatPath: true,
        }}
      >
        <Routes>
          {/* Landing Page */}
          <Route path="/" element={<LandingPage />} />

          {/* Auth Routes */}
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/app/pending-approval" element={<PendingApproval />} />

          {/* Admin Routes */}
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<Navigate to="/admin/dashboard" replace />} />
            <Route path="dashboard" element={<AdminDashboard />} />
            <Route path="theaters" element={<TheaterUsers />} />
            <Route path="teams" element={<CleaningTeams />} />
            <Route path="packages" element={<ServicePackages />} />
            <Route path="bookings" element={<BookingsManagement />} />
            <Route path="payments" element={<PaymentsInvoices />} />
            <Route path="settings" element={<AdminSettings />} />
          </Route>

          {/* User Routes */}
          <Route path="/app" element={<UserLayout />}>
            <Route index element={<Navigate to="/app/dashboard" replace />} />
            <Route path="dashboard" element={<UserDashboard />} />
            <Route path="theaters" element={<TheaterProfile />} />
            <Route path="bookings" element={<BookingsList />} />
            <Route path="bookings/new" element={<NewBooking />} />
            <Route path="profile" element={<UserProfile />} />
          </Route>

          {/* 404 */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
