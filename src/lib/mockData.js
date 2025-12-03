// Mock data for the application

export const currentUser = {
  id: "1",
  name: "John Smith",
  email: "john@cinema.com",
  phone: "+1 555-0123",
  role: "THEATER_OWNER",
  status: "APPROVED",
  theaterName: "Grand Cinema",
  theaterCity: "New York",
  avatar: "JS",
};

export const adminUser = {
  id: "admin-1",
  name: "Admin User",
  email: "admin@cleanscreen.com",
  role: "ADMIN",
  avatar: "AU",
};

export const theaters = [
  {
    id: "1",
    name: "Grand Cinema",
    address: "123 Main Street",
    city: "New York",
    screens: 8,
    notes: "Premium theater with IMAX",
    ownerId: "1",
  },
  {
    id: "2",
    name: "Starlight Movies",
    address: "456 Oak Avenue",
    city: "Los Angeles",
    screens: 12,
    notes: "High traffic location",
    ownerId: "2",
  },
];

export const pendingUsers = [
  {
    id: "p1",
    name: "Sarah Johnson",
    email: "sarah@movies.com",
    phone: "+1 555-0124",
    theaterName: "Sunset Cinema",
    theaterCity: "Miami",
    role: "THEATER_OWNER",
    status: "PENDING",
    registeredDate: "2024-01-15",
    notes: "Opening new theater in downtown Miami",
  },
  {
    id: "p2",
    name: "Mike Chen",
    email: "mike@starlight.com",
    phone: "+1 555-0125",
    theaterName: "Starlight Movies",
    theaterCity: "Los Angeles",
    role: "MANAGER",
    status: "PENDING",
    registeredDate: "2024-01-14",
    notes: "Referred by existing customer",
  },
  {
    id: "p3",
    name: "Emily Davis",
    email: "emily@regal.com",
    phone: "+1 555-0126",
    theaterName: "Regal Theater",
    theaterCity: "Chicago",
    role: "STAFF",
    status: "PENDING",
    registeredDate: "2024-01-13",
    notes: "",
  },
];

export const approvedUsers = [
  {
    id: "a1",
    name: "John Smith",
    email: "john@cinema.com",
    phone: "+1 555-0123",
    theaterName: "Grand Cinema",
    theaterCity: "New York",
    role: "THEATER_OWNER",
    status: "APPROVED",
    registeredDate: "2024-01-01",
    notes: "",
  },
  {
    id: "a2",
    name: "Lisa Wong",
    email: "lisa@palace.com",
    phone: "+1 555-0127",
    theaterName: "Palace Theater",
    theaterCity: "San Francisco",
    role: "MANAGER",
    status: "APPROVED",
    registeredDate: "2023-12-20",
    notes: "",
  },
];

export const cleaningTeams = [
  {
    id: "t1",
    name: "Alpha Team",
    teamLead: "Robert Brown",
    teamSize: 5,
    status: "ACTIVE",
    currentLoad: 3,
  },
  {
    id: "t2",
    name: "Beta Team",
    teamLead: "Jennifer Lee",
    teamSize: 4,
    status: "ACTIVE",
    currentLoad: 2,
  },
  {
    id: "t3",
    name: "Gamma Team",
    teamLead: "David Wilson",
    teamSize: 6,
    status: "INACTIVE",
    currentLoad: 0,
  },
];

export const servicePackages = [
  {
    id: "pkg1",
    name: "Basic Clean",
    description: "Standard cleaning for screens and common areas",
    duration: 60,
    basePrice: 150,
    status: "ACTIVE",
  },
  {
    id: "pkg2",
    name: "Deep Clean",
    description: "Comprehensive cleaning including seats and carpets",
    duration: 120,
    basePrice: 350,
    status: "ACTIVE",
  },
  {
    id: "pkg3",
    name: "Premium Sanitization",
    description: "Full sanitization with disinfection and air purification",
    duration: 180,
    basePrice: 500,
    status: "ACTIVE",
  },
  {
    id: "pkg4",
    name: "Express Clean",
    description: "Quick touch-up between showings",
    duration: 30,
    basePrice: 75,
    status: "INACTIVE",
  },
];

export const bookings = [
  {
    id: "B001",
    theaterId: "1",
    theaterName: "Grand Cinema",
    packageId: "pkg1",
    packageName: "Basic Clean",
    date: "2024-01-20",
    time: "06:00",
    teamId: "t1",
    teamName: "Alpha Team",
    status: "CONFIRMED",
    specialInstructions: "Focus on VIP section",
  },
  {
    id: "B002",
    theaterId: "2",
    theaterName: "Starlight Movies",
    packageId: "pkg2",
    packageName: "Deep Clean",
    date: "2024-01-20",
    time: "07:30",
    teamId: "t2",
    teamName: "Beta Team",
    status: "IN_PROGRESS",
    specialInstructions: "",
  },
  {
    id: "B003",
    theaterId: "1",
    theaterName: "Grand Cinema",
    packageId: "pkg3",
    packageName: "Premium Sanitization",
    date: "2024-01-21",
    time: "05:00",
    teamId: null,
    teamName: null,
    status: "PENDING",
    specialInstructions: "Preparing for premiere event",
  },
  {
    id: "B004",
    theaterId: "1",
    theaterName: "Grand Cinema",
    packageId: "pkg1",
    packageName: "Basic Clean",
    date: "2024-01-19",
    time: "06:00",
    teamId: "t1",
    teamName: "Alpha Team",
    status: "COMPLETED",
    specialInstructions: "",
  },
  {
    id: "B005",
    theaterId: "2",
    theaterName: "Starlight Movies",
    packageId: "pkg2",
    packageName: "Deep Clean",
    date: "2024-01-18",
    time: "07:00",
    teamId: "t2",
    teamName: "Beta Team",
    status: "COMPLETED",
    specialInstructions: "",
  },
];

export const payments = [
  {
    id: "PAY001",
    bookingId: "B004",
    theaterName: "Grand Cinema",
    amount: 150,
    status: "PAID",
    method: "Credit Card",
    date: "2024-01-19",
  },
  {
    id: "PAY002",
    bookingId: "B005",
    theaterName: "Starlight Movies",
    amount: 350,
    status: "PAID",
    method: "Bank Transfer",
    date: "2024-01-18",
  },
  {
    id: "PAY003",
    bookingId: "B001",
    theaterName: "Grand Cinema",
    amount: 150,
    status: "PENDING",
    method: "Invoice",
    date: "2024-01-20",
  },
  {
    id: "PAY004",
    bookingId: "B002",
    theaterName: "Starlight Movies",
    amount: 350,
    status: "PENDING",
    method: "Credit Card",
    date: "2024-01-20",
  },
];

export const bookingsChartData = [
  { day: "Mon", bookings: 12 },
  { day: "Tue", bookings: 8 },
  { day: "Wed", bookings: 15 },
  { day: "Thu", bookings: 10 },
  { day: "Fri", bookings: 18 },
  { day: "Sat", bookings: 22 },
  { day: "Sun", bookings: 20 },
];

export const recentActivity = [
  {
    id: "act1",
    action: "Booking confirmed",
    description: "Basic Clean scheduled for Jan 20",
    time: "2 hours ago",
  },
  {
    id: "act2",
    action: "Payment received",
    description: "Invoice #PAY001 paid",
    time: "1 day ago",
  },
  {
    id: "act3",
    action: "Cleaning completed",
    description: "Deep Clean finished successfully",
    time: "2 days ago",
  },
];

