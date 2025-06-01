
import { Car, MapPin, Bell, ShoppingCart, FileText, Wrench } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { useState } from "react";
import VehicleDashboard from "@/components/VehicleDashboard";
import Marketplace from "@/components/Marketplace";
import ServiceLocator from "@/components/ServiceLocator";
import NewsCenter from "@/components/NewsCenter";
import NotificationCenter from "@/components/NotificationCenter";
import HomePage from "@/components/HomePage";

const Index = () => {
  const [activeSection, setActiveSection] = useState("home");

  const features = [
    {
      icon: Car,
      title: "Vehicle Management",
      description: "Register and manage all your vehicles with detailed information and document storage",
      color: "from-blue-500 to-cyan-400"
    },
    {
      icon: ShoppingCart,
      title: "Marketplace",
      description: "Buy and sell cars and spare parts with secure payments and communication",
      color: "from-green-500 to-emerald-400"
    },
    {
      icon: MapPin,
      title: "Service Locator",
      description: "Find nearby service centers, inspection offices, and garages with reviews",
      color: "from-purple-500 to-pink-400"
    },
    {
      icon: FileText,
      title: "Smart Notifications",
      description: "Get reminders for maintenance, renewals, and important vehicle updates",
      color: "from-orange-500 to-red-400"
    },
    {
      icon: Bell,
      title: "News & Updates",
      description: "Stay informed with personalized automotive news and expert reviews",
      color: "from-indigo-500 to-blue-400"
    },
    {
      icon: Wrench,
      title: "Maintenance Tracking",
      description: "Track fuel, trips, expenses, and maintenance schedules effortlessly",
      color: "from-teal-500 to-green-400"
    }
  ];

  const renderContent = () => {
    switch (activeSection) {
      case "vehicles":
        return <VehicleDashboard />;
      case "marketplace":
        return <Marketplace />;
      case "services":
        return <ServiceLocator />;
      case "news":
        return <NewsCenter />;
      case "notifications":
        return <NotificationCenter />;
      case "home":
        return <HomePage />;
      default:
        return (
          <div className="space-y-12">
            {/* Hero Section */}
            <section className="text-center space-y-6 py-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full border border-blue-200">
                <Car className="w-5 h-5 text-blue-600" />
                <span className="text-sm font-medium text-blue-600">Complete Vehicle Management</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-bold bg-gradient-to-r from-slate-900 via-blue-900 to-slate-900 bg-clip-text text-transparent leading-tight">
                Your Complete
                <br />
                <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                  Vehicle Companion
                </span>
              </h1>
              <p className="text-xl text-slate-600 max-w-2xl mx-auto leading-relaxed">
                Manage your vehicles, track maintenance, find services, and explore our marketplace - all in one comprehensive platform designed for modern car owners.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center pt-4">
                <Button 
                  size="lg" 
                  className="bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white px-8 py-3 rounded-xl shadow-lg hover:shadow-xl transition-all duration-300"
                  onClick={() => setActiveSection("vehicles")}
                >
                  Get Started
                </Button>
                <Button 
                  variant="outline" 
                  size="lg"
                  className="border-2 border-slate-300 hover:border-blue-400 px-8 py-3 rounded-xl hover:bg-blue-50 transition-all duration-300"
                  onClick={() => setActiveSection("marketplace")}
                >
                  Explore Marketplace
                </Button>
              </div>
            </section>

            {/* Features Grid */}
            <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {features.map((feature, index) => (
                <Card key={index} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-0 shadow-lg">
                  <CardHeader className="pb-3">
                    <div className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.color} p-3 mb-3 group-hover:scale-110 transition-transform duration-300`}>
                      <feature.icon className="w-6 h-6 text-white" />
                    </div>
                    <CardTitle className="text-xl font-semibold text-slate-800 group-hover:text-blue-600 transition-colors">
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </section>
          </div>
        );
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-lg border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-purple-600 rounded-xl flex items-center justify-center">
                <Car className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-slate-900">VehiclePro</span>
            </div>
            
            <div className="hidden md:flex space-x-1">
              {[
                { id: "home", label: "Home", icon: Car },
                { id: "vehicles", label: "Vehicles", icon: Car },
                { id: "marketplace", label: "Marketplace", icon: ShoppingCart },
                { id: "services", label: "Services", icon: MapPin },
                { id: "news", label: "News", icon: FileText },
                { id: "notifications", label: "Alerts", icon: Bell }
              ].map((item) => (
                <Button
                  key={item.id}
                  variant={activeSection === item.id ? "default" : "ghost"}
                  className={`flex items-center gap-2 px-4 py-2 rounded-lg transition-all duration-200 ${
                    activeSection === item.id 
                      ? "bg-blue-600 text-white shadow-lg" 
                      : "text-slate-600 hover:text-blue-600 hover:bg-blue-50"
                  }`}
                  onClick={() => setActiveSection(item.id)}
                >
                  <item.icon className="w-4 h-4" />
                  {item.label}
                </Button>
              ))}
            </div>

            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300">
              Sign In
            </Button>
          </div>
        </div>
      </nav>

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {renderContent()}
      </main>

      {/* Mobile Navigation */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 p-2">
        <div className="flex justify-around">
          {[
            { id: "home", icon: Car },
            { id: "vehicles", icon: Car },
            { id: "marketplace", icon: ShoppingCart },
            { id: "services", icon: MapPin },
            { id: "notifications", icon: Bell }
          ].map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              size="sm"
              className={`flex flex-col items-center gap-1 p-2 ${
                activeSection === item.id ? "text-blue-600" : "text-slate-400"
              }`}
              onClick={() => setActiveSection(item.id)}
            >
              <item.icon className="w-5 h-5" />
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Index;
