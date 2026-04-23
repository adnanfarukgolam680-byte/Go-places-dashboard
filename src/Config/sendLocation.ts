


import { useLocation } from "react-router";

export const dashboardTitleOptions: {
  [key: string]: { title: string; subtitle: string };
} = {
  "/": {
    title: "Dashboard Overview",
    subtitle: "Welcome back! Here's what's happening today."
  },
  "/riders": {
    title: "Rider Management",
    subtitle: "View and manage all registered riders"
  },
  "/drivers": {
    title: "Driver Management",
    subtitle: "View and manage all registered drivers"
  },
  "/documents": {
    title: "Document Verification",
    subtitle: "Track and verify driver compliance documents"
  },
  "/enrollments": {
    title: "Enrollment Forms",
    subtitle: "Register new riders and drivers using the official forms"
  },
  "/uploads": {
    title: "Document Upload Center",
    subtitle: "Upload documents anytime for drivers and riders"
  },
  "/payments": {
    title: "Payment & Billing",
    subtitle: "Track financial transactions and payouts"
  },
  "/notifications": {
    title: "Notifications",
    subtitle: "Manage and send notifications to users"
  },
  "/useraccounts": {
    title: "User Accounts",
    subtitle: "Manage admin and staff accounts"
  },
  "/reports": {
    title: "Reports & Analytics",
    subtitle: "View analytics and export reports"
  },
  "/ridesandmonitoring": {
    title: "Rides & Monitoring",
    subtitle: "Manage, monitor, and edit all rides in one place"
  },
  "/livemap": {
    title: "Live Map Tracking",
    subtitle: "Real-time driver and trip tracking"
  },
  "/manualdispatch": {
    title: "Manual Dispatch",
    subtitle: "Create and assign rides manually for users who need assistance"
  },
  "/support": {
    title: "Support & Help Center",
    subtitle: "Manage customer support tickets"
  },
  "/activitylog": {
    title: "Activity Log",
    subtitle: "Track all admin actions and system activities"
  },
  "/feedback": {
    title: "Feedback & Ratings",
    subtitle: "View rider and driver feedback"
  },
  "/system-health": {
    title: "System Health",
    subtitle: "Monitor server status and maintenance alerts"
  },
  "/legal": {
    title: "Legal & Compliance",
    subtitle: "Manage legal documents and compliance requirements"
  } 

};

export function useDashboardTitle() {
  const location = useLocation();
  const path = location?.pathname as string;

  // Return the corresponding title and subtitle based on the current path
  const currentTitle = dashboardTitleOptions[path] || {
    title: "Page Not Found",
    subtitle: "The page you are looking for doesn't exist."
  };

  return currentTitle;
}