
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Bell, Calendar, Car, MapPin, FileText, AlertTriangle, CheckCircle } from "lucide-react";

const NotificationCenter = () => {
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

  return (
    <div className="space-y-8">
      <div className="text-center space-y-4">
        <h1 className="text-3xl font-bold text-slate-900">Smart Notifications</h1>
        <p className="text-slate-600 max-w-2xl mx-auto">
          Stay on top of vehicle maintenance, renewals, and important updates with personalized notifications.
        </p>
      </div>

      {/* Notifications List */}
      <div className="space-y-4">
        <div className="flex items-center justify-between">
          <h2 className="text-2xl font-semibold text-slate-900">Recent Notifications</h2>
          <Button variant="outline" size="sm">
            Mark All as Read
          </Button>
        </div>

        <div className="space-y-3">
          {notifications.map((notification) => {
            const IconComponent = getNotificationIcon(notification.type);
            return (
              <Card 
                key={notification.id} 
                className={`border-l-4 transition-all duration-200 hover:shadow-md ${
                  getNotificationColor(notification.type, notification.urgent)
                } ${notification.read ? 'opacity-75' : ''}`}
              >
                <CardContent className="p-4">
                  <div className="flex items-start gap-4">
                    <div className={`w-10 h-10 rounded-full flex items-center justify-center ${
                      notification.urgent ? 'bg-red-500' : 'bg-blue-500'
                    }`}>
                      <IconComponent className="w-5 h-5 text-white" />
                    </div>
                    
                    <div className="flex-1">
                      <div className="flex items-start justify-between">
                        <div>
                          <h3 className="font-semibold text-slate-900 flex items-center gap-2">
                            {notification.title}
                            {notification.urgent && (
                              <Badge className="bg-red-500 text-white text-xs">Urgent</Badge>
                            )}
                            {!notification.read && (
                              <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                            )}
                          </h3>
                          <p className="text-slate-600 mt-1">{notification.message}</p>
                          <div className="flex items-center gap-3 mt-2 text-sm text-slate-500">
                            <span>{notification.time}</span>
                            <span>•</span>
                            <span className="font-medium">{notification.vehicle}</span>
                          </div>
                        </div>
                        
                        <div className="flex gap-2">
                          {notification.urgent && (
                            <Button size="sm" className="bg-red-500 hover:bg-red-600 text-white">
                              Take Action
                            </Button>
                          )}
                          <Button variant="ghost" size="sm">
                            Dismiss
                          </Button>
                        </div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            );
          })}
        </div>
      </div>

      {/* Notification Settings */}
      <div className="space-y-6">
        <h2 className="text-2xl font-semibold text-slate-900">Notification Preferences</h2>
        
        <Card className="border-0 shadow-lg">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Bell className="w-5 h-5" />
              Delivery Methods
            </CardTitle>
            <CardDescription>
              Choose how you want to receive different types of notifications
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {notificationSettings.map((setting, index) => (
              <div key={index} className="space-y-3">
                <div>
                  <h4 className="font-medium text-slate-900">{setting.category}</h4>
                  <p className="text-sm text-slate-600">{setting.description}</p>
                </div>
                
                <div className="grid grid-cols-3 gap-6 pl-4">
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">Email</label>
                    <Switch defaultChecked={setting.email} />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">SMS</label>
                    <Switch defaultChecked={setting.sms} />
                  </div>
                  <div className="flex items-center justify-between">
                    <label className="text-sm font-medium text-slate-700">Push</label>
                    <Switch defaultChecked={setting.push} />
                  </div>
                </div>
                
                {index < notificationSettings.length - 1 && (
                  <hr className="border-slate-200" />
                )}
              </div>
            ))}
          </CardContent>
        </Card>
      </div>

      {/* Quick Actions */}
      <Card className="bg-gradient-to-r from-blue-600 to-purple-600 text-white border-0">
        <CardContent className="p-8">
          <h3 className="text-2xl font-bold mb-4">Quick Actions</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-auto p-4 flex flex-col items-center gap-2">
              <Calendar className="w-6 h-6" />
              <span>Schedule Service</span>
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-auto p-4 flex flex-col items-center gap-2">
              <FileText className="w-6 h-6" />
              <span>Renew Registration</span>
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-auto p-4 flex flex-col items-center gap-2">
              <MapPin className="w-6 h-6" />
              <span>Find Services</span>
            </Button>
            <Button className="bg-white/20 hover:bg-white/30 text-white border-white/30 h-auto p-4 flex flex-col items-center gap-2">
              <Car className="w-6 h-6" />
              <span>Update Vehicle</span>
            </Button>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default NotificationCenter;
