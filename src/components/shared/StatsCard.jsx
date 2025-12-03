import { cn } from "@/lib/utils";

export function StatsCard({ title, value, icon: Icon, trend, className }) {
  return (
    <div className={cn("rounded-xl bg-card p-6 shadow-card", className)}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm font-medium text-muted-foreground">{title}</p>
          <p className="mt-2 text-3xl font-semibold font-heading text-foreground">
            {value}
          </p>
          {trend && (
            <p
              className={cn(
                "mt-1 text-sm font-medium",
                trend.isPositive ? "text-success" : "text-destructive"
              )}
            >
              {trend.isPositive ? "+" : "-"}
              {Math.abs(trend.value)}% from last week
            </p>
          )}
        </div>
        <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10">
          <Icon className="h-6 w-6 text-accent" />
        </div>
      </div>
    </div>
  );
}
