
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Car, FileText, Calendar, MapPin, Plus, Settings } from "lucide-react";
import { Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

const VehicleDashboard = () => {
  const [vehicles, setVehicles] = useState([
    {
      id: 1,
      make: "Toyota",
      model: "Camry",
      year: 2022,
      vin: "1HGBH41JXMN109186",
      mileage: 25000,
      fuelType: "Gasoline",
      image: "https://images.unsplash.com/photo-1449157291145-7efd050a4d0e?w=300&h=200&fit=crop"
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2021,
      vin: "2HGFC2F59MH123456",
      mileage: 18500,
      fuelType: "Gasoline",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?w=300&h=200&fit=crop"
    },
    {
      id: 3,
      make: "Ford",
      model: "F-150",
      year: 2023,
      vin: "1FTFW1ET5NFA12345",
      mileage: 12000,
      fuelType: "Gasoline",
      image: "https://images.unsplash.com/photo-1518005020951-eccb494ad742?w=300&h=200&fit=crop"
    },
    {
      id: 4,
      make: "Tesla",
      model: "Model 3",
      year: 2023,
      vin: "5YJ3E1EA9NF123456",
      mileage: 8500,
      fuelType: "Electric",
      image: "https://images.unsplash.com/photo-1496307653780-42ee777d4833?w=300&h=200&fit=crop"
    }
  ]);

  const [newVehicle, setNewVehicle] = useState({
    make: "",
    model: "",
    year: "",
    vin: "",
    mileage: "",
    fuelType: ""
  });

  const handleAddVehicle = () => {
    if (newVehicle.make && newVehicle.model && newVehicle.year) {
      setVehicles([...vehicles, {
        id: vehicles.length + 1,
        ...newVehicle,
        year: parseInt(newVehicle.year),
        mileage: parseInt(newVehicle.mileage) || 0,
        image: "https://images.unsplash.com/photo-1518770660439-4636190af475?w=300&h=200&fit=crop"
      }]);
      setNewVehicle({
        make: "",
        model: "",
        year: "",
        vin: "",
        mileage: "",
        fuelType: ""
      });
    }
  };

  return (
    <div className="space-y-4 p-2">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-xl md:text-2xl font-bold text-slate-900">My Vehicles</h1>
          <p className="text-slate-600 text-sm">Manage your vehicles and track information</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg">
              <Plus className="w-4 h-4 mr-2" />
              Add Vehicle
            </Button>
          </DialogTrigger>
          <DialogContent className="sm:max-w-md">
            <DialogHeader>
              <DialogTitle>Register New Vehicle</DialogTitle>
              <DialogDescription>
                Add your vehicle details to start tracking maintenance and documents.
              </DialogDescription>
            </DialogHeader>
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="make">Make</Label>
                  <Input
                    id="make"
                    value={newVehicle.make}
                    onChange={(e) => setNewVehicle({...newVehicle, make: e.target.value})}
                    placeholder="Toyota"
                  />
                </div>
                <div>
                  <Label htmlFor="model">Model</Label>
                  <Input
                    id="model"
                    value={newVehicle.model}
                    onChange={(e) => setNewVehicle({...newVehicle, model: e.target.value})}
                    placeholder="Camry"
                  />
                </div>
              </div>
              
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="year">Year</Label>
                  <Input
                    id="year"
                    type="number"
                    value={newVehicle.year}
                    onChange={(e) => setNewVehicle({...newVehicle, year: e.target.value})}
                    placeholder="2023"
                  />
                </div>
                <div>
                  <Label htmlFor="mileage">Mileage</Label>
                  <Input
                    id="mileage"
                    type="number"
                    value={newVehicle.mileage}
                    onChange={(e) => setNewVehicle({...newVehicle, mileage: e.target.value})}
                    placeholder="25000"
                  />
                </div>
              </div>

              <div>
                <Label htmlFor="vin">VIN</Label>
                <Input
                  id="vin"
                  value={newVehicle.vin}
                  onChange={(e) => setNewVehicle({...newVehicle, vin: e.target.value})}
                  placeholder="1HGBH41JXMN109186"
                />
              </div>

              <div>
                <Label htmlFor="fuelType">Fuel Type</Label>
                <Select value={newVehicle.fuelType} onValueChange={(value) => setNewVehicle({...newVehicle, fuelType: value})}>
                  <SelectTrigger>
                    <SelectValue placeholder="Select fuel type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="gasoline">Gasoline</SelectItem>
                    <SelectItem value="diesel">Diesel</SelectItem>
                    <SelectItem value="hybrid">Hybrid</SelectItem>
                    <SelectItem value="electric">Electric</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <Button onClick={handleAddVehicle} className="w-full">
                Register Vehicle
              </Button>
            </div>
          </DialogContent>
        </Dialog>
      </div>

      {/* Quick Stats - Updated to 2x2 Grid */}
      <div className="grid grid-cols-2 gap-2 md:gap-3">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-3">
            <div className="text-center">
              <p className="text-blue-100 text-xs">Total Vehicles</p>
              <p className="text-xl font-bold">{vehicles.length}</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-3">
            <div className="text-center">
              <p className="text-green-100 text-xs">Services Due</p>
              <p className="text-xl font-bold">2</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-3">
            <div className="text-center">
              <p className="text-purple-100 text-xs">Documents</p>
              <p className="text-xl font-bold">8</p>
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-3">
            <div className="text-center">
              <p className="text-orange-100 text-xs">Avg Mileage</p>
              <p className="text-xl font-bold">18K</p>
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Vehicle Grid - 2x2 Layout */}
      <div className="grid grid-cols-2 gap-2 md:gap-3">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="group hover:shadow-lg transition-all duration-300">
            <CardContent className="p-2 md:p-3">
              <div className="w-full h-16 md:h-20 rounded-lg mb-2 overflow-hidden">
                <img 
                  src={vehicle.image} 
                  alt={`${vehicle.year} ${vehicle.make} ${vehicle.model}`}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="space-y-1">
                <h3 className="font-semibold text-xs md:text-sm text-slate-900 line-clamp-1">
                  {vehicle.year} {vehicle.make}
                </h3>
                <p className="text-xs text-slate-600 line-clamp-1">{vehicle.model}</p>
                <div className="space-y-1 text-xs text-slate-500">
                  <div className="flex justify-between">
                    <span>Mileage:</span>
                    <span className="font-medium">{vehicle.mileage.toLocaleString()}</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Fuel:</span>
                    <span className="font-medium">{vehicle.fuelType}</span>
                  </div>
                </div>
                
                <div className="flex gap-1 pt-1">
                  <Button variant="outline" size="sm" className="flex-1 text-xs p-1">
                    <FileText className="w-3 h-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1 text-xs p-1">
                    <Calendar className="w-3 h-3" />
                  </Button>
                  <Button variant="outline" size="sm" className="p-1">
                    <Settings className="w-3 h-3" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default VehicleDashboard;
