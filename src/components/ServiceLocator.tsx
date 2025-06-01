
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, Star, Navigation, Clock, Wrench } from "lucide-react";

const ServiceLocator = () => {
  const [searchLocation, setSearchLocation] = useState("");
  
  const serviceProviders = [
    {
      id: 1,
      name: "Premium Auto Service",
      type: "Full Service",
      rating: 4.9,
      reviews: 156,
      distance: "0.8 miles",
      address: "123 Main St, San Francisco, CA",
      phone: "(555) 123-4567",
      services: ["Oil Change", "Brake Repair", "Tire Service", "Diagnostics"],
      hours: "Mon-Fri: 8AM-6PM, Sat: 9AM-4PM",
      price: "$$",
      image: "/placeholder.svg"
    },
    {
      id: 2,
      name: "QuickLube Express",
      type: "Oil Change",
      rating: 4.6,
      reviews: 89,
      distance: "1.2 miles",
      address: "456 Oak Ave, San Francisco, CA",
      phone: "(555) 234-5678",
      services: ["Oil Change", "Filter Replacement", "Fluid Check"],
      hours: "Mon-Sat: 7AM-8PM, Sun: 9AM-5PM",
      price: "$",
      image: "/placeholder.svg"
    },
    {
      id: 3,
      name: "Elite Automotive Repair",
      type: "Specialty Shop",
      rating: 4.8,
      reviews: 203,
      distance: "2.1 miles",
      address: "789 Pine St, San Francisco, CA",
      phone: "(555) 345-6789",
      services: ["Engine Repair", "Transmission", "AC Service", "Inspection"],
      hours: "Mon-Fri: 7:30AM-6PM",
      price: "$$$",
      image: "/placeholder.svg"
    },
    {
      id: 4,
      name: "City Inspection Station",
      type: "Inspection",
      rating: 4.4,
      reviews: 67,
      distance: "1.7 miles",
      address: "321 Elm St, San Francisco, CA",
      phone: "(555) 456-7890",
      services: ["State Inspection", "Emissions Test", "Safety Check"],
      hours: "Mon-Fri: 8AM-5PM, Sat: 8AM-12PM",
      price: "$",
      image: "/placeholder.svg"
    }
  ];

  const getPriceColor = (price: string) => {
    switch (price) {
      case "$": return "text-green-600 bg-green-100";
      case "$$": return "text-yellow-600 bg-yellow-100";
      case "$$$": return "text-red-600 bg-red-100";
      default: return "text-slate-600 bg-slate-100";
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Full Service": return "bg-blue-100 text-blue-700";
      case "Oil Change": return "bg-green-100 text-green-700";
      case "Specialty Shop": return "bg-purple-100 text-purple-700";
      case "Inspection": return "bg-orange-100 text-orange-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Service Locator</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Find trusted automotive service providers near you. Compare ratings, services, and get directions.
        </p>
      </div>

      {/* Search Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Enter your location or zip code"
              value={searchLocation}
              onChange={(e) => setSearchLocation(e.target.value)}
              className="pl-10 h-12 border-slate-300 focus:border-blue-500"
            />
          </div>
          <Button className="h-12 px-8 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            Find Services
          </Button>
        </div>
      </div>

      {/* Map Placeholder */}
      <Card className="border-0 shadow-lg overflow-hidden">
        <div className="w-full h-64 bg-gradient-to-r from-blue-100 to-purple-100 flex items-center justify-center">
          <div className="text-center space-y-2">
            <MapPin className="w-16 h-16 text-blue-600 mx-auto" />
            <p className="text-slate-600 font-medium">Interactive Map Coming Soon</p>
            <p className="text-sm text-slate-500">View service locations on map</p>
          </div>
        </div>
      </Card>

      {/* Service Providers List */}
      <div className="space-y-6">
        {serviceProviders.map((provider) => (
          <Card key={provider.id} className="hover:shadow-xl transition-all duration-300 border-0 shadow-lg">
            <CardContent className="p-6">
              <div className="flex flex-col lg:flex-row gap-6">
                {/* Provider Image */}
                <div className="w-full lg:w-32 h-32 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg flex items-center justify-center flex-shrink-0">
                  <Wrench className="w-12 h-12 text-slate-500" />
                </div>

                {/* Provider Info */}
                <div className="flex-1 space-y-4">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3">
                    <div>
                      <h3 className="text-xl font-semibold text-slate-900">{provider.name}</h3>
                      <div className="flex items-center gap-2 mt-1">
                        <Badge className={getTypeColor(provider.type)}>
                          {provider.type}
                        </Badge>
                        <Badge className={`${getPriceColor(provider.price)} border-0`}>
                          {provider.price}
                        </Badge>
                      </div>
                    </div>
                    
                    <div className="flex items-center gap-4">
                      <div className="text-right">
                        <div className="flex items-center gap-1">
                          <Star className="w-4 h-4 text-yellow-500 fill-current" />
                          <span className="font-semibold text-slate-900">{provider.rating}</span>
                          <span className="text-slate-500 text-sm">({provider.reviews})</span>
                        </div>
                        <div className="text-sm text-slate-600">{provider.distance}</div>
                      </div>
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-2 text-slate-600">
                    <div className="flex items-center gap-1">
                      <MapPin className="w-4 h-4" />
                      <span className="text-sm">{provider.address}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Phone className="w-4 h-4" />
                      <span className="text-sm">{provider.phone}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-slate-600">
                    <Clock className="w-4 h-4" />
                    <span className="text-sm">{provider.hours}</span>
                  </div>

                  <div className="space-y-2">
                    <p className="text-sm font-medium text-slate-700">Services:</p>
                    <div className="flex flex-wrap gap-2">
                      {provider.services.map((service, index) => (
                        <Badge key={index} variant="outline" className="text-xs">
                          {service}
                        </Badge>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row gap-3 pt-2">
                    <Button className="flex items-center gap-2 bg-blue-600 hover:bg-blue-700">
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </Button>
                    <Button variant="outline" className="flex items-center gap-2">
                      <Phone className="w-4 h-4" />
                      Call Now
                    </Button>
                    <Button variant="outline">
                      View Details
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Filters */}
      <Card className="bg-gradient-to-r from-slate-50 to-blue-50 border-0">
        <CardHeader>
          <CardTitle className="text-lg">Quick Service Filters</CardTitle>
          <CardDescription>Find exactly what you need</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            {[
              "Oil Change",
              "Brake Service",
              "Tire Service",
              "State Inspection",
              "AC Repair",
              "Transmission",
              "Engine Diagnostics",
              "Battery Service"
            ].map((service) => (
              <Button key={service} variant="outline" className="h-auto p-3 text-left justify-start">
                <Wrench className="w-4 h-4 mr-2" />
                {service}
              </Button>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default ServiceLocator;
