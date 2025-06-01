
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
      image: "/placeholder.svg"
    },
    {
      id: 2,
      make: "Honda",
      model: "Civic",
      year: 2021,
      vin: "2HGFC2F59MH123456",
      mileage: 18500,
      fuelType: "Gasoline",
      image: "/placeholder.svg"
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
        image: "/placeholder.svg"
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
    <div className="space-y-8">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-3xl font-bold text-slate-900">Vehicle Dashboard</h1>
          <p className="text-slate-600 mt-2">Manage your vehicles and track important information</p>
        </div>
        
        <Dialog>
          <DialogTrigger asChild>
            <Button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg hover:shadow-xl transition-all duration-300">
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

      {/* Vehicle Cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {vehicles.map((vehicle) => (
          <Card key={vehicle.id} className="group hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
            <CardHeader className="pb-3">
              <div className="w-full h-32 bg-gradient-to-r from-slate-200 to-slate-300 rounded-lg mb-4 flex items-center justify-center">
                <Car className="w-16 h-16 text-slate-500" />
              </div>
              <CardTitle className="text-xl text-slate-900">
                {vehicle.year} {vehicle.make} {vehicle.model}
              </CardTitle>
              <CardDescription className="text-slate-600">
                VIN: {vehicle.vin}
              </CardDescription>
            </CardHeader>
            <CardContent className="space-y-3">
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Mileage:</span>
                <span className="font-medium">{vehicle.mileage.toLocaleString()} miles</span>
              </div>
              <div className="flex justify-between text-sm">
                <span className="text-slate-600">Fuel Type:</span>
                <span className="font-medium">{vehicle.fuelType}</span>
              </div>
              
              <div className="flex gap-2 pt-3">
                <Button variant="outline" size="sm" className="flex-1">
                  <FileText className="w-4 h-4 mr-1" />
                  Documents
                </Button>
                <Button variant="outline" size="sm" className="flex-1">
                  <Calendar className="w-4 h-4 mr-1" />
                  Service
                </Button>
                <Button variant="outline" size="sm">
                  <Settings className="w-4 h-4" />
                </Button>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
        <Card className="bg-gradient-to-r from-blue-500 to-blue-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-blue-100">Total Vehicles</p>
                <p className="text-3xl font-bold">{vehicles.length}</p>
              </div>
              <Car className="w-8 h-8 text-blue-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-green-500 to-green-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-green-100">Services Due</p>
                <p className="text-3xl font-bold">2</p>
              </div>
              <Calendar className="w-8 h-8 text-green-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-purple-500 to-purple-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-purple-100">Documents</p>
                <p className="text-3xl font-bold">8</p>
              </div>
              <FileText className="w-8 h-8 text-purple-200" />
            </div>
          </CardContent>
        </Card>

        <Card className="bg-gradient-to-r from-orange-500 to-orange-600 text-white">
          <CardContent className="p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="text-orange-100">Avg Mileage</p>
                <p className="text-3xl font-bold">21.8K</p>
              </div>
              <MapPin className="w-8 h-8 text-orange-200" />
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default VehicleDashboard;
