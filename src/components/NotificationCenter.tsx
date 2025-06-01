import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, Calendar, Car, MapPin, FileText, AlertTriangle, CheckCircle, MoreVertical } from "lucide-react";
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from "@/components/ui/dropdown-menu";

const NotificationCenter = () => {
  const [expandedNotification, setExpandedNotification] = useState<number | null>(null);
  
  const notifications = [
    {
      id: 1,
      type: "maintenance",
      title: "Oil Change Due",
      message: "Your 2022 Toyota Camry is due for an oil change in 500 miles",
      time: "2 hours ago",
      urgent: true,
      read: false,
      vehicle: "2022 Toyota Camry"
    },
    {
      id: 2,
      type: "registration",
      title: "Registration Renewal Reminder",
      message: "Vehicle registration expires in 30 days",
      time: "1 day ago",
      urgent: false,
      read: false,
      vehicle: "2021 Honda Civic"
    },
    {
      id: 3,
      type: "inspection",
      title: "State Inspection Due",
      message: "Annual inspection is due within 15 days",
      time: "3 days ago",
      urgent: true,
      read: true,
      vehicle: "2022 Toyota Camry"
    },
    {
      id: 4,
      type: "service",
      title: "Scheduled Service Completed",
      message: "Brake service has been completed at Premium Auto Service",
      time: "1 week ago",
      urgent: false,
      read: true,
      vehicle: "2021 Honda Civic"
    }
  ];

  const notificationSettings = [
    {
      category: "Maintenance Reminders",
      description: "Oil changes, tire rotations, and scheduled maintenance",
      email: true,
      sms: true,
      push: true
    },
    {
      category: "Registration & Renewals",
      description: "Vehicle registration, insurance, and inspection renewals",
      email: true,
      sms: false,
      push: true
    },
    {
      category: "Service Updates",
      description: "Updates from service centers and appointment confirmations",
      email: true,
      sms: true,
      push: false
    },
    {
      category: "Marketplace Activity",
      description: "Messages from buyers/sellers and listing updates",
      email: false,
      sms: false,
      push: true
    }
  ];

  const getNotificationIcon = (type: string) => {
    switch (type) {
      case "maintenance": return Car;
      case "registration": return FileText;
      case "inspection": return CheckCircle;
      case "service": return MapPin;
      default: return Bell;
    }
  };

  const getNotificationColor = (type: string, urgent: boolean) => {
    if (urgent) return "border-l-red-500 bg-red-50";
    switch (type) {
      case "maintenance": return "border-l-blue-500 bg-blue-50";
      case "registration": return "border-l-orange-500 bg-orange-50";
      case "inspection": return "border-l-purple-500 bg-purple-50";
      case "service": return "border-l-green-500 bg-green-50";
      default: return "border-l-slate-500 bg-slate-50";
    }
  };

  const handleNotificationClick = (notificationId: number) => {
    setExpandedNotification(expandedNotification === notificationId ? null : notificationId);
  };

  return (
    <div className="space-y-6 p-4">
      <div className="text-center space-y-2">
        <h1 className="text-2xl md:text-3xl font-bold text-slate-900">Smart Notifications</h1>
        <p className="text-slate-600 text-sm md:text-base">
          Stay on top of vehicle maintenance and important updates.
        </p>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-xl font-semibold text-slate-900">Recent Notifications</h2>
          <Button variant="outline" size="sm" className="text-xs">
            Mark All Read
          </Button>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => {
            const IconComponent = getNotificationIcon(notification.type);
            const isExpanded = expandedNotification === notification.id;
            
            return (
              <Card 
                key={notification.id} 
                className={`border-l-4 transition-all duration-200 ${
                  getNotificationColor(notification.type, notification.urgent)
                } ${notification.read ? 'opacity-75' : ''}`}
              >
                <CardContent className="p-3 md:p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-8 h-8 md:w-10 md:h-10 rounded-full flex items-center justify-center ${
                      notification.urgent ? 'bg-red-500' : 'bg-blue-500'
                    }`}>
                      <IconComponent className="w-4 h-4 md:w-5 md:h-5 text-white" />
                    </div>
                    
                    <div className="flex-1 min-w-0">
                      <div className="flex items-start justify-between gap-2">
                        <div className="flex-1 min-w-0" onClick={() => handleNotificationClick(notification.id)}>
                          <h3 className="font-semibold text-slate-900 flex items-center gap-2 text-sm md:text-base">
                            <span className="truncate">{notification.title}</span>
                            {notification.urgent && (
                              <Badge className="bg-red-500 text-white text-xs flex-shrink-0">Urgent</Badge>
                            )}
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full flex-shrink-0"></div>
                            )}
                          </h3>
                          <p className="text-slate-600 mt-1 text-sm line-clamp-2">{notification.message}</p>
                          <div className="flex items-center gap-2 mt-2 text-xs text-slate-500">
                            <span>{notification.time}</span>
                            <span>•</span>
                            <span className="font-medium truncate">{notification.vehicle}</span>
                          </div>
                        </div>
                        
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                              <MoreVertical className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            {notification.urgent && (
                              <DropdownMenuItem className="text-red-600">
                                Take Action
                              </DropdownMenuItem>
                            )}
                            <DropdownMenuItem>
                              Mark as Read
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                              Dismiss
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-4 md:p-6">
          <h3 className="text-lg md:text-xl font-bold mb-3">Quick Actions</h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-auto p-3 flex flex-col items-center gap-2 text-xs">
              <Calendar className="w-5 h-5" />
              <span>Schedule Service</span>
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-auto p-3 flex flex-col items-center gap-2 text-xs">
              <FileText className="w-5 h-5" />
              <span>Renew Registration</span>
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-auto p-3 flex flex-col items-center gap-2 text-xs">
              <MapPin className="w-5 h-5" />
              <span>Find Services</span>
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-auto p-3 flex flex-col items-center gap-2 text-xs">
              <Car className="w-5 h-5" />
              <span>Update Vehicle</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationCenter;
