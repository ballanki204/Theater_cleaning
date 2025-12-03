import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Sparkles,
  Building2,
  Users,
  Calendar,
  Shield,
  Clock,
  Facebook,
  Twitter,
  Instagram,
  Linkedin,
  Mail,
  Phone,
  MapPin,
  CheckCircle2,
  Star,
} from "lucide-react";

const LandingPage = () => {
  const scrollToSection = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const services = [
    {
      icon: Building2,
      title: "Theater Cleaning",
      description:
        "Professional cleaning services tailored for theaters and entertainment venues.",
    },
    {
      icon: Calendar,
      title: "Scheduled Bookings",
      description:
        "Easy booking system to schedule cleaning services at your convenience.",
    },
    {
      icon: Users,
      title: "Expert Teams",
      description:
        "Trained and certified cleaning professionals dedicated to excellence.",
    },
    {
      icon: Shield,
      title: "Quality Assurance",
      description:
        "Guaranteed quality with our comprehensive quality control measures.",
    },
    {
      icon: Clock,
      title: "24/7 Support",
      description:
        "Round-the-clock customer support for all your cleaning needs.",
    },
  ];

  const quickLinks = [
    { label: "Home", href: "#home" },
    { label: "Services", href: "#services" },
    { label: "About", href: "#about" },
    { label: "Contact", href: "#contact" },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navbar */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-card/80 backdrop-blur-sm border-b border-border shadow-sm">
        <div className="container mx-auto px-4 md:px-6">
          <div className="flex items-center justify-between h-16">
            <div className="flex items-center gap-2">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                <Sparkles className="h-5 w-5 text-accent-foreground" />
              </div>
              <span className="font-heading text-xl font-bold text-foreground">
                CleanScreen
              </span>
            </div>
            <div className="hidden md:flex items-center gap-6">
              <button
                onClick={() => scrollToSection("home")}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                Home
              </button>
              <button
                onClick={() => scrollToSection("services")}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                Services
              </button>
              <button
                onClick={() => scrollToSection("about")}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                About
              </button>
              <button
                onClick={() => scrollToSection("contact")}
                className="text-sm font-medium text-foreground/70 hover:text-accent transition-colors"
              >
                Contact
              </button>
            </div>
            <div className="flex items-center gap-3">
              <Button variant="ghost" asChild>
                <Link to="/login">Login</Link>
              </Button>
              <Button variant="accent" asChild>
                <Link to="/register">Register</Link>
              </Button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        id="home"
        className="pt-16 pb-20 md:pt-24 md:pb-32 bg-gradient-to-b from-background to-muted/20"
      >
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-6">
              <div className="flex flex-wrap gap-2">
                <Badge
                  variant="outline"
                  className="bg-accent/10 text-accent-foreground border-accent/20"
                >
                  <Star className="h-3 w-3 mr-1" />
                  Trusted by 100+ Theaters
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-accent/10 text-accent-foreground border-accent/20"
                >
                  <CheckCircle2 className="h-3 w-3 mr-1" />
                  Certified Teams
                </Badge>
              </div>
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-heading font-bold text-foreground">
                Professional Theater
                <span className="text-accent"> Cleaning Services</span>
              </h1>
              <p className="text-lg text-muted-foreground">
                Keep your entertainment venues spotless with our expert cleaning
                teams. Book cleaning services tailored for theaters, cinemas,
                and event spaces.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" variant="accent" asChild>
                  <Link to="/register">Get Started</Link>
                </Button>
                <Button size="lg" variant="outline" asChild>
                  <Link to="/login">Login</Link>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-square rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 p-1 flex items-center justify-center border border-accent/5">
                <img
                  src="/theater.jpg"
                  alt="Theater"
                  className="fill-current"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Our Services
            </h2>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Comprehensive cleaning solutions designed for entertainment venues
            </p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card
                key={index}
                className="hover:shadow-lg transition-all duration-300 hover:border-accent/20 group"
              >
                <CardHeader>
                  <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4 group-hover:bg-accent/20 transition-colors">
                    <service.icon className="h-6 w-6 text-accent" />
                  </div>
                  <CardTitle>{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 md:px-6">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
                About CleanScreen
              </h2>
              <p className="text-lg text-muted-foreground">
                CleanScreen is a leading platform connecting theaters and
                entertainment venues with professional cleaning services. We
                understand the unique cleaning needs of entertainment spaces and
                provide tailored solutions.
              </p>
              <p className="text-lg text-muted-foreground">
                Our platform makes it easy to book, manage, and track cleaning
                services. With certified cleaning teams and a user-friendly
                interface, we ensure your venues are always ready for your next
                event.
              </p>
              <div className="flex gap-4">
                <Button variant="accent" asChild>
                  <Link to="/register">Join Us</Link>
                </Button>
                <Button
                  variant="outline"
                  onClick={() => scrollToSection("contact")}
                >
                  Contact Us
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="aspect-video rounded-lg bg-gradient-to-br from-accent/20 to-accent/5 p-8 flex items-center justify-center border border-accent/10">
                <Users className="h-48 w-48 text-accent/40" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 bg-muted/30">
        <div className="container mx-auto px-4 md:px-6">
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Get In Touch
            </h2>
            <p className="text-muted-foreground">
              Have questions? We'd love to hear from you.
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
            <Card className="hover:shadow-lg transition-shadow hover:border-accent/20">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <Mail className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>info@cleanscreen.com</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow hover:border-accent/20">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <Phone className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>+1 (555) 123-4567</CardDescription>
              </CardContent>
            </Card>
            <Card className="hover:shadow-lg transition-shadow hover:border-accent/20">
              <CardHeader>
                <div className="flex h-12 w-12 items-center justify-center rounded-lg bg-accent/10 mb-4">
                  <MapPin className="h-6 w-6 text-accent" />
                </div>
                <CardTitle>Address</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription>
                  123 Theater Street, City, State 12345
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t border-border">
        <div className="container mx-auto px-4 md:px-6 py-12">
          <div className="grid md:grid-cols-4 gap-8">
            {/* Logo and Social Media */}
            <div className="space-y-4">
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-accent">
                  <Sparkles className="h-5 w-5 text-accent-foreground" />
                </div>
                <span className="font-heading text-xl font-bold text-foreground">
                  CleanScreen
                </span>
              </div>
              <p className="text-sm text-muted-foreground">
                Professional cleaning services for entertainment venues.
              </p>
              <Separator />
              <div className="flex gap-4">
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Twitter"
                >
                  <Twitter className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="h-5 w-5" />
                </a>
                <a
                  href="#"
                  className="text-muted-foreground hover:text-accent transition-colors"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-5 w-5" />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">
                Quick Links
              </h3>
              <ul className="space-y-2">
                {quickLinks.map((link, index) => (
                  <li key={index}>
                    <button
                      onClick={() =>
                        scrollToSection(link.href.replace("#", ""))
                      }
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {link.label}
                    </button>
                  </li>
                ))}
                <li>
                  <Link
                    to="/login"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Login
                  </Link>
                </li>
                <li>
                  <Link
                    to="/register"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Register
                  </Link>
                </li>
              </ul>
            </div>

            {/* About */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">About</h3>
              <ul className="space-y-2">
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Our Story
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Our Team
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Careers
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                  >
                    Terms of Service
                  </a>
                </li>
              </ul>
            </div>

            {/* Contact Details */}
            <div>
              <h3 className="font-semibold text-foreground mb-4">Contact</h3>
              <ul className="space-y-3">
                <li className="flex items-start gap-3">
                  <Mail className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    info@cleanscreen.com
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <Phone className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    +1 (555) 123-4567
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                  <span className="text-sm text-muted-foreground">
                    123 Theater Street
                    <br />
                    City, State 12345
                  </span>
                </li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © {new Date().getFullYear()} CleanScreen. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;
