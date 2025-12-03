import { Link } from "react-router-dom";
import { Sparkles, Clock, CheckCircle, FileCheck } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function PendingApproval() {
  const steps = [
    { icon: FileCheck, label: "Submitted", completed: true },
    { icon: Clock, label: "Pending Admin Review", completed: false, active: true },
    { icon: CheckCircle, label: "Approved", completed: false },
  ];

  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="w-full max-w-md animate-fade-in">
        <div className="rounded-2xl bg-card p-8 shadow-elevated text-center">
          {/* Logo */}
          <div className="mb-6 flex flex-col items-center">
            <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-xl bg-primary">
              <Sparkles className="h-8 w-8 text-accent" />
            </div>
          </div>

          {/* Status */}
          <div className="mb-6">
            <span className="inline-flex items-center rounded-full border border-destructive/20 bg-destructive/10 px-4 py-1.5 text-sm font-medium text-destructive">
              <Clock className="mr-2 h-4 w-4" />
              Pending Approval
            </span>
          </div>

          {/* Content */}
          <h1 className="font-heading text-2xl font-bold text-foreground mb-3">
            Waiting for Admin Approval
          </h1>
          <p className="text-muted-foreground mb-8">
            Your theater staff account has been submitted. You'll get access after
            the admin approves your profile.
          </p>

          {/* Timeline */}
          <div className="mb-8">
            <div className="flex justify-center">
              {steps.map((step, index) => (
                <div key={step.label} className="flex items-center">
                  <div className="flex flex-col items-center">
                    <div
                      className={`flex h-10 w-10 items-center justify-center rounded-full ${
                        step.completed
                          ? "bg-success text-success-foreground"
                          : step.active
                          ? "bg-warning text-warning-foreground"
                          : "bg-muted text-muted-foreground"
                      }`}
                    >
                      <step.icon className="h-5 w-5" />
                    </div>
                    <span
                      className={`mt-2 text-xs font-medium ${
                        step.completed
                          ? "text-success"
                          : step.active
                          ? "text-warning"
                          : "text-muted-foreground"
                      }`}
                    >
                      {step.label}
                    </span>
                  </div>
                  {index < steps.length - 1 && (
                    <div
                      className={`mx-2 h-0.5 w-12 ${
                        step.completed ? "bg-success" : "bg-muted"
                      }`}
                    />
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Action */}
          <Button variant="outline" asChild>
            <Link to="/login">Back to Login</Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
