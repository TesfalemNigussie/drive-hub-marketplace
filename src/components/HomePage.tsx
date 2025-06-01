
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, MapPin, User, Car, Fuel, Wrench, Star, ShoppingCart } from "lucide-react";

const HomePage = () => {
  const upcomingNotifications = [
    {
      id: 1,
      title: "Oil Change Due",
      vehicle: "Toyota Camry",
      daysLeft: 3,
      urgent: true
    },
    {
      id: 2,
      title: "Registration Renewal",
      vehicle: "Honda Civic",
      daysLeft: 15,
      urgent: false
    }
  ];

  const userProfile = {
    name: "John Doe",
    email: "john.doe@email.com",
    vehicleCount: 2,
    memberSince: "2023"
  };

  const userCarTypes = ["Sedan", "SUV"];

  const nearbyStations = [
    {
      id: 1,
      name: "Shell Gas Station",
      type: "fuel",
      distance: "0.5 mi",
      rating: 4.2,
      price: "$3.45/gal"
    },
    {
      id: 2,
      name: "AutoCare Service Center",
      type: "service",
      distance: "1.2 mi",
      rating: 4.7,
      services: "Oil Change, Tire"
    }
  ];

  const topProducts = [
    {
      id: 1,
      name: "Michelin Defender T+H Tire",
      price: "$129.99",
      rating: 4.8,
      image: "/placeholder.svg",
      category: "Tires"
    },
    {
      id: 2,
      name: "Mobil 1 Synthetic Oil",
      price: "$24.99",
      rating: 4.9,
      image: "/placeholder.svg",
      category: "Oil"
    },
    {
      id: 3,
      name: "Bosch Air Filter",
      price: "$19.99",
      rating: 4.6,
      image: "/placeholder.svg",
      category: "Filters"
    },
    {
      id: 4,
      name: "ACDelco Spark Plugs",
      price: "$8.99",
      rating: 4.7,
      image: "/placeholder.svg",
      category: "Engine"
    }
  ];

  return (
    <div className="space-y-6 p-4">
      {/* Profile Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-4">
          <div className="flex items-center gap-4">
            <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-8 h-8 text-white" />
            </div>
            <div>
              <h2 className="text-xl font-bold">{userProfile.name}</h2>
              <p className="text-blue-100">{userProfile.email}</p>
              <div className="flex gap-4 mt-2 text-sm">
                <span>{userProfile.vehicleCount} Vehicles</span>
                <span>Member since {userProfile.memberSince}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Notifications */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Upcoming Notifications
            </CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-3">
          {upcomingNotifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-3 bg-slate-50 rounded-lg">
              <div>
                <h4 className="font-medium text-slate-900">{notification.title}</h4>
                <p className="text-sm text-slate-600">{notification.vehicle}</p>
              </div>
              <Badge className={notification.urgent ? "bg-red-500" : "bg-blue-500"}>
                {notification.daysLeft} days
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* User Car Types */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <Car className="w-5 h-5" />
            Your Car Types
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {userCarTypes.map((type, index) => (
              <Badge key={index} variant="outline" className="px-3 py-1">
                {type}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nearby Stations */}
      <Card>
        <CardHeader className="pb-3">
          <CardTitle className="text-lg flex items-center gap-2">
            <MapPin className="w-5 h-5" />
            Nearby Stations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-3">
          {nearbyStations.map((station) => (
            <div key={station.id} className="flex items-center justify-between p-3 border rounded-lg">
              <div className="flex items-center gap-3">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                  station.type === 'fuel' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  {station.type === 'fuel' ? 
                    <Fuel className="w-5 h-5 text-green-600" /> : 
                    <Wrench className="w-5 h-5 text-blue-600" />
                  }
                </div>
                <div>
                  <h4 className="font-medium text-slate-900">{station.name}</h4>
                  <div className="flex items-center gap-2 text-sm text-slate-600">
                    <span>{station.distance}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{station.rating}</span>
                    </div>
                  </div>
                  {station.price && <p className="text-sm text-green-600">{station.price}</p>}
                  {station.services && <p className="text-xs text-slate-500">{station.services}</p>}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top Products */}
      <Card>
        <CardHeader className="pb-3">
          <div className="flex items-center justify-between">
            <CardTitle className="text-lg flex items-center gap-2">
              <ShoppingCart className="w-5 h-5" />
              Top Products for Your Cars
            </CardTitle>
            <Button variant="ghost" size="sm">View All</Button>
          </div>
        </CardHeader>
        <CardContent>
          <ScrollArea className="w-full">
            <div className="flex gap-4 pb-4">
              {topProducts.map((product) => (
                <Card key={product.id} className="min-w-[160px] hover:shadow-lg transition-shadow">
                  <div className="w-full h-32 bg-gradient-to-r from-slate-200 to-slate-300 flex items-center justify-center">
                    <ShoppingCart className="w-8 h-8 text-slate-500" />
                  </div>
                  <CardContent className="p-3">
                    <Badge variant="outline" className="text-xs mb-2">{product.category}</Badge>
                    <h4 className="font-medium text-sm text-slate-900 line-clamp-2 mb-1">{product.name}</h4>
                    <div className="flex items-center gap-1 mb-2">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span className="text-xs text-slate-600">{product.rating}</span>
                    </div>
                    <p className="font-bold text-green-600 text-sm">{product.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </ScrollArea>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
