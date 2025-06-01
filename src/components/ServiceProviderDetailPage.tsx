
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, MapPin, Phone, Clock, Calendar, ArrowLeft, Car, Wrench } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ServiceProviderDetailPage = () => {
  const navigate = useNavigate();
  const [selectedService, setSelectedService] = useState<string | null>(null);

  const serviceProvider = {
    id: 1,
    name: "Premium Auto Service Center",
    rating: 4.8,
    reviewCount: 342,
    address: "1234 Main Street, Downtown, City 12345",
    phone: "(555) 123-4567",
    website: "www.premiumauto.com",
    hours: {
      "Monday": "8:00 AM - 6:00 PM",
      "Tuesday": "8:00 AM - 6:00 PM", 
      "Wednesday": "8:00 AM - 6:00 PM",
      "Thursday": "8:00 AM - 6:00 PM",
      "Friday": "8:00 AM - 6:00 PM",
      "Saturday": "9:00 AM - 4:00 PM",
      "Sunday": "Closed"
    },
    specialties: ["Oil Change", "Brake Service", "Tire Installation", "Engine Diagnostics", "AC Repair"],
    certifications: ["ASE Certified", "AAA Approved", "NAPA AutoCare Center"],
    description: "Premium Auto Service Center has been serving the community for over 20 years with expert automotive repair and maintenance services. Our ASE-certified technicians use the latest diagnostic equipment and quality parts to keep your vehicle running smoothly.",
    services: [
      {
        id: 1,
        name: "Oil Change Service",
        description: "Full synthetic or conventional oil change with filter replacement",
        price: "$49.99",
        duration: "30 minutes",
        category: "Maintenance"
      },
      {
        id: 2,
        name: "Brake Pad Replacement",
        description: "Front or rear brake pad replacement with inspection",
        price: "$199.99",
        duration: "2 hours",
        category: "Brake Service"
      },
      {
        id: 3,
        name: "Tire Installation",
        description: "Mount, balance, and install new tires",
        price: "$25.99",
        duration: "45 minutes",
        category: "Tires"
      },
      {
        id: 4,
        name: "Engine Diagnostic",
        description: "Computer diagnostic scan to identify engine issues",
        price: "$89.99",
        duration: "1 hour",
        category: "Diagnostics"
      }
    ],
    reviews: [
      {
        id: 1,
        author: "Mike Johnson",
        rating: 5,
        date: "2 days ago",
        comment: "Excellent service! Quick oil change and the staff was very professional. Will definitely come back."
      },
      {
        id: 2,
        author: "Sarah Wilson",
        rating: 5,
        date: "1 week ago",
        comment: "Had my brakes done here and they explained everything clearly. Fair pricing and quality work."
      },
      {
        id: 3,
        author: "David Chen",
        rating: 4,
        date: "2 weeks ago",
        comment: "Good service overall. The diagnostic was thorough and they fixed the issue on the first try."
      }
    ],
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"]
  };

  const getServiceCategoryColor = (category: string) => {
    switch (category) {
      case "Maintenance": return "bg-green-100 text-green-700";
      case "Brake Service": return "bg-red-100 text-red-700";
      case "Tires": return "bg-blue-100 text-blue-700";
      case "Diagnostics": return "bg-purple-100 text-purple-700";
      default: return "bg-slate-100 text-slate-700";
    }
  };

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Header */}
      <div className="bg-white border-b border-slate-200 p-4">
        <div className="flex items-center gap-4">
          <Button variant="ghost" size="sm" onClick={() => navigate(-1)}>
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back
          </Button>
          <div className="flex-1">
            <h1 className="font-semibold text-slate-900 truncate">{serviceProvider.name}</h1>
          </div>
          <Button variant="outline" size="sm">
            <Phone className="w-4 h-4 mr-2" />
            Call
          </Button>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Service Provider Info */}
        <Card className="border-0 shadow-lg">
          <CardContent className="p-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Main Info */}
              <div className="lg:col-span-2">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <h1 className="text-2xl font-bold text-slate-900 mb-2">{serviceProvider.name}</h1>
                    <div className="flex items-center gap-4 mb-3">
                      <div className="flex items-center gap-1">
                        <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                        <span className="font-medium">{serviceProvider.rating}</span>
                        <span className="text-slate-500">({serviceProvider.reviewCount} reviews)</span>
                      </div>
                    </div>
                    <div className="flex items-start gap-2 text-slate-600 mb-2">
                      <MapPin className="w-5 h-5 text-slate-400 mt-0.5" />
                      <span>{serviceProvider.address}</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-600">
                      <Phone className="w-5 h-5 text-slate-400" />
                      <span>{serviceProvider.phone}</span>
                    </div>
                  </div>
                </div>

                <p className="text-slate-600 leading-relaxed mb-4">{serviceProvider.description}</p>

                <div className="mb-4">
                  <h3 className="font-semibold text-slate-900 mb-2">Specialties</h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceProvider.specialties.map((specialty, index) => (
                      <Badge key={index} variant="outline">{specialty}</Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h3 className="font-semibold text-slate-900 mb-2">Certifications</h3>
                  <div className="flex flex-wrap gap-2">
                    {serviceProvider.certifications.map((cert, index) => (
                      <Badge key={index} className="bg-green-100 text-green-700">{cert}</Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* Hours & Actions */}
              <div className="space-y-6">
                <Card>
                  <CardHeader className="pb-3">
                    <CardTitle className="text-lg flex items-center gap-2">
                      <Clock className="w-5 h-5" />
                      Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-2">
                    {Object.entries(serviceProvider.hours).map(([day, hours]) => (
                      <div key={day} className="flex justify-between text-sm">
                        <span className="font-medium">{day}</span>
                        <span className={hours === "Closed" ? "text-red-600" : "text-slate-600"}>{hours}</span>
                      </div>
                    ))}
                  </CardContent>
                </Card>

                <div className="space-y-3">
                  <Button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <Calendar className="w-4 h-4 mr-2" />
                    Book Appointment
                  </Button>
                  <Button variant="outline" className="w-full">
                    <MapPin className="w-4 h-4 mr-2" />
                    Get Directions
                  </Button>
                  <Button variant="outline" className="w-full">
                    <Phone className="w-4 h-4 mr-2" />
                    Call Now
                  </Button>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Services */}
        <Card>
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Wrench className="w-5 h-5" />
              Services & Pricing
            </CardTitle>
            <CardDescription>Click on a service to learn more and book an appointment</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {serviceProvider.services.map((service) => (
                <Card 
                  key={service.id} 
                  className={`cursor-pointer transition-all duration-200 hover:shadow-lg ${
                    selectedService === service.id.toString() ? 'ring-2 ring-blue-500' : ''
                  }`}
                  onClick={() => setSelectedService(service.id.toString())}
                >
                  <CardContent className="p-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-semibold text-slate-900">{service.name}</h4>
                      <Badge className={getServiceCategoryColor(service.category)}>{service.category}</Badge>
                    </div>
                    <p className="text-sm text-slate-600 mb-3">{service.description}</p>
                    <div className="flex justify-between items-center text-sm">
                      <span className="text-slate-500">Duration: {service.duration}</span>
                      <span className="font-bold text-green-600 text-lg">{service.price}</span>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Reviews */}
        <Card>
          <CardHeader>
            <CardTitle>Customer Reviews</CardTitle>
            <CardDescription>What customers are saying about this service center</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            {serviceProvider.reviews.map((review) => (
              <div key={review.id} className="border-b border-slate-100 pb-4 last:border-b-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center text-white font-medium">
                      {review.author.charAt(0)}
                    </div>
                    <div>
                      <h5 className="font-medium text-slate-900">{review.author}</h5>
                      <div className="flex items-center gap-2">
                        <div className="flex">
                          {[...Array(5)].map((_, i) => (
                            <Star 
                              key={i} 
                              className={`w-4 h-4 ${
                                i < review.rating 
                                  ? 'fill-yellow-400 text-yellow-400' 
                                  : 'text-slate-300'
                              }`} 
                            />
                          ))}
                        </div>
                        <span className="text-sm text-slate-500">{review.date}</span>
                      </div>
                    </div>
                  </div>
                </div>
                <p className="text-slate-600">{review.comment}</p>
              </div>
            ))}
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ServiceProviderDetailPage;
