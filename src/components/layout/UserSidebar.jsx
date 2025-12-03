import { Link, useLocation } from "react-router-dom";
import {
  LayoutDashboard,
  Building2,
  Calendar,
  CalendarPlus,
  User,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";

const menuItems = [
  { icon: LayoutDashboard, label: "Dashboard", path: "/app/dashboard" },
  { icon: Building2, label: "My Theaters", path: "/app/theaters" },
  { icon: Calendar, label: "Bookings", path: "/app/bookings" },
  { icon: CalendarPlus, label: "New Booking", path: "/app/bookings/new" },
  { icon: User, label: "Profile", path: "/app/profile" },
];

export function UserSidebar({ isCollapsed = false, onToggle }) {
  const location = useLocation();

  const handleOverlayClick = () => {
    if (onToggle) {
      onToggle();
    }
  };

  return (
    <>
      {/* Overlay - show when expanded on mobile to allow clicking outside to close */}
      {!isCollapsed && onToggle && (
        <div
          className="fixed inset-0 z-40 bg-black/50 md:hidden"
          onClick={handleOverlayClick}
          aria-hidden="true"
        />
      )}
      <aside
        className={cn(
          "fixed left-0 top-0 z-50 h-screen bg-sidebar text-sidebar-foreground transition-all duration-300 shadow-lg overflow-hidden",
          // Mobile: sidebar floats/overlays on body, hidden when collapsed
          // Desktop: sidebar is fixed and always expanded
          // On mobile: translate off-screen when collapsed, show when expanded
          // On desktop: always expanded (w-64)
          isCollapsed
            ? "-translate-x-full md:translate-x-0 w-20 md:w-64"
            : "translate-x-0 w-64"
        )}
      >
        <div className="flex h-full flex-col">
          {/* Logo & Toggle Button */}
          <div
            className={cn(
              "relative flex h-16 items-center border-b border-sidebar-border transition-all duration-300",
              // On desktop always use px-4, on mobile use collapsed state
              isCollapsed
                ? "justify-between px-2 md:px-4"
                : "justify-between px-4"
            )}
          >
            <div className="flex items-center gap-2 flex-shrink-0">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-sidebar-primary">
                <Sparkles className="h-5 w-5 text-sidebar-primary-foreground" />
              </div>
              {/* Always show logo text on desktop, only on mobile when expanded */}
              <span
                className={cn(
                  "font-heading text-lg font-semibold text-sidebar-foreground whitespace-nowrap",
                  isCollapsed ? "hidden md:block" : "block"
                )}
              >
                CleanScreen
              </span>
            </div>
            {/* Toggle Button - only visible on mobile */}
            {onToggle && (
              <Button
                variant="ghost"
                size="icon"
                onClick={onToggle}
                className={cn(
                  "h-8 w-8 flex-shrink-0 transition-all duration-200 md:hidden",
                  "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                  "active:bg-sidebar-primary active:text-sidebar-primary-foreground focus:bg-sidebar-primary focus:text-sidebar-primary-foreground"
                )}
                aria-label="Toggle sidebar"
              >
                {isCollapsed ? (
                  <ChevronRight className="h-4 w-4" />
                ) : (
                  <ChevronLeft className="h-4 w-4" />
                )}
              </Button>
            )}
          </div>

          {/* Navigation - scrollable if content overflows */}
          <nav className="flex-1 space-y-1 p-4 overflow-y-auto">
            {menuItems.map((item) => {
              const isActive = location.pathname === item.path;
              return (
                <Link
                  key={item.path}
                  to={item.path}
                  className={cn(
                    "flex items-center gap-3 rounded-lg px-3 py-2.5 text-sm font-medium transition-colors",
                    isActive
                      ? "bg-sidebar-primary text-sidebar-primary-foreground"
                      : "text-sidebar-foreground/70 hover:bg-sidebar-accent hover:text-sidebar-accent-foreground",
                    // On desktop always show full, on mobile use collapsed state
                    isCollapsed
                      ? "justify-center px-2 md:justify-start md:px-3"
                      : "justify-start"
                  )}
                  title={isCollapsed ? item.label : undefined}
                >
                  <item.icon className="h-5 w-5 flex-shrink-0" />
                  {/* Always show label on desktop, only on mobile when expanded */}
                  <span className={isCollapsed ? "hidden md:inline" : "inline"}>
                    {item.label}
                  </span>
                </Link>
              );
            })}
          </nav>

          {/* Footer - always show on desktop, only on mobile when expanded */}
          <div
            className={cn(
              "border-t border-sidebar-border p-4",
              isCollapsed ? "hidden md:block" : "block"
            )}
          >
            <p className="text-xs text-sidebar-foreground/50">
              Theater Portal v1.0
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
