
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Bell, MapPin, User, Car, Fuel, Wrench, Star, ShoppingCart, Home } from "lucide-react";

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
      image: "https://dxm.contentcenter.michelin.com/api/wedia/dam/transform/b98rpyxf61b4xj7wri1ufhtp1c/4w-234_3528706031144_tire_michelin_defender-t-plus-h_215-slash-60-r17-96h_a_main_5-quarterzoom_nopad.webp?t=resize&height=500",
      category: "Tires"
    },
    {
      id: 2,
      name: "Mobil 1 Synthetic Oil",
      price: "$24.99",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop",
      category: "Oil"
    },
    {
      id: 3,
      name: "Bosch Air Filter",
      price: "$19.99",
      rating: 4.6,
      image: "https://images.unsplash.com/photo-1486718448742-163732cd1544?w=300&h=200&fit=crop",
      category: "Filters"
    },
    {
      id: 4,
      name: "ACDelco Spark Plugs",
      price: "$8.99",
      rating: 4.7,
      image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop",
      category: "Engine"
    },
    {
      id: 5,
      name: "Continental Brake Pads",
      price: "$89.99",
      rating: 4.5,
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=300&h=200&fit=crop",
      category: "Brakes"
    },
    {
      id: 6,
      name: "Castrol GTX Motor Oil",
      price: "$19.99",
      rating: 4.4,
      image: "https://images.unsplash.com/photo-1581090464777-f3220bbe1b8b?w=300&h=200&fit=crop",
      category: "Oil"
    }
  ];

  return (
    <div className="space-y-4 p-2">
      {/* Profile Section */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-3">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center">
              <User className="w-6 h-6 text-white" />
            </div>
            <div>
              <h2 className="text-lg font-bold">{userProfile.name}</h2>
              <p className="text-blue-100 text-sm">{userProfile.email}</p>
              <div className="flex gap-4 mt-1 text-xs">
                <span>{userProfile.vehicleCount} Vehicles</span>
                <span>Member since {userProfile.memberSince}</span>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* Upcoming Notifications */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <Bell className="w-4 h-4" />
              Upcoming Notifications
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-xs">View All</Button>
          </div>
        </CardHeader>
        <CardContent className="space-y-2">
          {upcomingNotifications.map((notification) => (
            <div key={notification.id} className="flex items-center justify-between p-2 bg-slate-50 rounded-lg">
              <div>
                <h4 className="font-medium text-sm text-slate-900">{notification.title}</h4>
                <p className="text-xs text-slate-600">{notification.vehicle}</p>
              </div>
              <Badge className={notification.urgent ? "bg-red-500 text-xs" : "bg-blue-500 text-xs"}>
                {notification.daysLeft} days
              </Badge>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* User Car Types */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <Car className="w-4 h-4" />
            Your Car Types
          </CardTitle>
        </CardHeader>
        <CardContent>
          <div className="flex gap-2">
            {userCarTypes.map((type, index) => (
              <Badge key={index} variant="outline" className="px-2 py-1 text-xs">
                {type}
              </Badge>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* Nearby Stations */}
      <Card>
        <CardHeader className="pb-2">
          <CardTitle className="text-base flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            Nearby Stations
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-2">
          {nearbyStations.map((station) => (
            <div key={station.id} className="flex items-center justify-between p-2 border rounded-lg">
              <div className="flex items-center gap-2">
                <div className={`w-8 h-8 rounded-full flex items-center justify-center ${
                  station.type === 'fuel' ? 'bg-green-100' : 'bg-blue-100'
                }`}>
                  {station.type === 'fuel' ? 
                    <Fuel className="w-4 h-4 text-green-600" /> : 
                    <Wrench className="w-4 h-4 text-blue-600" />
                  }
                </div>
                <div>
                  <h4 className="font-medium text-sm text-slate-900">{station.name}</h4>
                  <div className="flex items-center gap-2 text-xs text-slate-600">
                    <span>{station.distance}</span>
                    <div className="flex items-center gap-1">
                      <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                      <span>{station.rating}</span>
                    </div>
                  </div>
                  {station.price && <p className="text-xs text-green-600">{station.price}</p>}
                  {station.services && <p className="text-xs text-slate-500">{station.services}</p>}
                </div>
              </div>
            </div>
          ))}
        </CardContent>
      </Card>

      {/* Top Products */}
      <Card>
        <CardHeader className="pb-2">
          <div className="flex items-center justify-between">
            <CardTitle className="text-base flex items-center gap-2">
              <ShoppingCart className="w-4 h-4" />
              Top Products for Your Cars
            </CardTitle>
            <Button variant="ghost" size="sm" className="text-xs">View All</Button>
          </div>
        </CardHeader>
        <CardContent className="p-2">
          <div className="flex gap-3 overflow-x-auto pb-2">
            {topProducts.map((product) => (
              <Card key={product.id} className="min-w-[140px] flex-shrink-0 hover:shadow-lg transition-shadow">
                <div className="w-full h-20 overflow-hidden rounded-t-lg">
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-2">
                  <Badge variant="outline" className="text-xs mb-1">{product.category}</Badge>
                  <h4 className="font-medium text-xs text-slate-900 line-clamp-2 mb-1">{product.name}</h4>
                  <div className="flex items-center gap-1 mb-1">
                    <Star className="w-3 h-3 fill-yellow-400 text-yellow-400" />
                    <span className="text-xs text-slate-600">{product.rating}</span>
                  </div>
                  <p className="font-bold text-green-600 text-xs">{product.price}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default HomePage;
