
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, MapPin, Search, Filter, Heart, MessageSquare } from "lucide-react";

const Marketplace = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  
  const listings = [
    {
      id: 1,
      type: "vehicle",
      title: "2021 Tesla Model 3",
      price: 35000,
      location: "San Francisco, CA",
      mileage: 15000,
      description: "Excellent condition, one owner, full autopilot",
      image: "/placeholder.svg",
      seller: "John Doe",
      rating: 4.8,
      featured: true
    },
    {
      id: 2,
      type: "vehicle",
      title: "2020 Honda Civic",
      price: 22000,
      location: "Los Angeles, CA",
      mileage: 25000,
      description: "Well maintained, recent service, clean title",
      image: "/placeholder.svg",
      seller: "Sarah Johnson",
      rating: 4.9,
      featured: false
    },
    {
      id: 3,
      type: "part",
      title: "BMW E90 Headlights",
      price: 350,
      location: "New York, NY",
      description: "OEM headlights, excellent condition",
      image: "/placeholder.svg",
      seller: "AutoParts Pro",
      rating: 4.7,
      featured: false
    },
    {
      id: 4,
      type: "vehicle",
      title: "2019 Ford F-150",
      price: 28500,
      location: "Austin, TX",
      mileage: 35000,
      description: "XLT package, 4WD, excellent for work and play",
      image: "/placeholder.svg",
      seller: "Mike Wilson",
      rating: 4.6,
      featured: true
    }
  ];

  const filteredListings = listings.filter(listing => {
    const matchesSearch = listing.title.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === "all" || listing.type === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Vehicle Marketplace</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Buy and sell cars and auto parts with confidence. Connect with verified sellers and find exactly what you need.
        </p>
      </div>

      {/* Search and Filter Section */}
      <div className="bg-white rounded-2xl shadow-lg p-6 border border-slate-200">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-slate-400" />
            <Input
              placeholder="Search vehicles, parts..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10 h-12 border-slate-300 focus:border-blue-500"
            />
          </div>
          
          <Select value={selectedCategory} onValueChange={setSelectedCategory}>
            <SelectTrigger className="w-full md:w-48 h-12">
              <SelectValue placeholder="Category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="all">All Items</SelectItem>
              <SelectItem value="vehicle">Vehicles</SelectItem>
              <SelectItem value="part">Parts</SelectItem>
            </SelectContent>
          </Select>
          
          <Button className="h-12 px-6 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
            <Filter className="w-4 h-4 mr-2" />
            Filters
          </Button>
        </div>
      </div>

      {/* Featured Listings */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">Featured Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredListings.filter(listing => listing.featured).map((listing) => (
            <Card key={listing.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-0 shadow-lg overflow-hidden">
              <div className="relative">
                <div className="w-full h-48 bg-gradient-to-r from-slate-200 to-slate-300 flex items-center justify-center">
                  <Car className="w-16 h-16 text-slate-500" />
                </div>
                <Badge className="absolute top-3 left-3 bg-gradient-to-r from-orange-500 to-red-500 text-white">
                  Featured
                </Badge>
                <Button variant="ghost" size="sm" className="absolute top-3 right-3 bg-white/80 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardHeader className="pb-3">
                <div className="flex justify-between items-start">
                  <div>
                    <CardTitle className="text-xl text-slate-900 group-hover:text-blue-600 transition-colors">
                      {listing.title}
                    </CardTitle>
                    <CardDescription className="flex items-center gap-1 mt-1">
                      <MapPin className="w-4 h-4" />
                      {listing.location}
                    </CardDescription>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">
                      ${listing.price.toLocaleString()}
                    </div>
                  </div>
                </div>
              </CardHeader>
              
              <CardContent className="space-y-4">
                {listing.mileage && (
                  <div className="text-sm text-slate-600">
                    {listing.mileage.toLocaleString()} miles
                  </div>
                )}
                <p className="text-slate-600 text-sm">{listing.description}</p>
                
                <div className="flex items-center justify-between pt-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white text-sm font-medium">
                      {listing.seller[0]}
                    </div>
                    <div>
                      <div className="text-sm font-medium text-slate-900">{listing.seller}</div>
                      <div className="text-xs text-slate-500">★ {listing.rating}</div>
                    </div>
                  </div>
                  
                  <Button size="sm" className="bg-blue-600 hover:bg-blue-700 text-white">
                    <MessageSquare className="w-4 h-4 mr-1" />
                    Contact
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* All Listings */}
      <div className="space-y-4">
        <h2 className="text-2xl font-semibold text-slate-900">All Listings</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredListings.map((listing) => (
            <Card key={listing.id} className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1">
              <div className="relative">
                <div className="w-full h-40 bg-gradient-to-r from-slate-200 to-slate-300 flex items-center justify-center">
                  <Car className="w-12 h-12 text-slate-500" />
                </div>
                <Button variant="ghost" size="sm" className="absolute top-2 right-2 bg-white/80 hover:bg-white">
                  <Heart className="w-4 h-4" />
                </Button>
              </div>
              
              <CardHeader className="pb-2">
                <CardTitle className="text-lg text-slate-900 group-hover:text-blue-600 transition-colors">
                  {listing.title}
                </CardTitle>
                <CardDescription className="flex items-center gap-1">
                  <MapPin className="w-3 h-3" />
                  {listing.location}
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-3">
                <div className="text-xl font-bold text-green-600">
                  ${listing.price.toLocaleString()}
                </div>
                
                {listing.mileage && (
                  <div className="text-sm text-slate-600">
                    {listing.mileage.toLocaleString()} miles
                  </div>
                )}
                
                <div className="flex items-center justify-between">
                  <div className="text-xs text-slate-500">
                    ★ {listing.rating} • {listing.seller}
                  </div>
                  <Button size="sm" variant="outline">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Sell Your Vehicle CTA */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-8 text-center">
          <h3 className="text-2xl font-bold mb-4">Ready to Sell Your Vehicle?</h3>
          <p className="text-blue-100 mb-6 max-w-2xl mx-auto">
            List your car or auto parts on our marketplace and reach thousands of potential buyers. 
            Get started with our easy listing process.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-slate-100">
            Create Listing
          </Button>
        </CardContent>
      </Card>
    </div>
  );
};

export default Marketplace;
