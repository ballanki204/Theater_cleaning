import { useState, useEffect } from "react";
import { Outlet } from "react-router-dom";
import { UserSidebar } from "./UserSidebar";
import { TopNavbar } from "./TopNavbar";
import { currentUser } from "@/lib/mockData";
import { cn } from "@/lib/utils";

export function UserLayout() {
  const [isCollapsed, setIsCollapsed] = useState(() => {
    // Check localStorage for saved preference
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("userSidebarCollapsed");
      if (saved !== null) return saved === "true";
      // Default to collapsed on all screen sizes
      return true;
    }
    return true;
  });

  useEffect(() => {
    // Save preference to localStorage
    localStorage.setItem("userSidebarCollapsed", String(isCollapsed));
  }, [isCollapsed]);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className="min-h-screen bg-background">
      <UserSidebar isCollapsed={isCollapsed} onToggle={toggleSidebar} />
      {/* Main content - mobile: always full width, desktop: fills remaining space after fixed sidebar */}
      <div
        className={cn(
          "w-full min-h-screen transition-all duration-300",
          // On desktop, add left margin to account for fixed sidebar (always w-64 = 256px on desktop)
          // Use calc to ensure body fills exactly the remaining space
          "md:ml-64 md:w-[calc(100%-256px)]"
        )}
      >
        <TopNavbar user={currentUser} onMenuClick={toggleSidebar} />
        <main className="p-4 md:p-6">
          <Outlet />
        </main>
      </div>
    </div>
  );
}
