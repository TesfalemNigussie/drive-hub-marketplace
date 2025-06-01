
import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Star, ShoppingCart, Heart, Share, ArrowLeft, Truck, Shield, RotateCcw } from "lucide-react";
import { useNavigate } from "react-router-dom";

const ProductDetailPage = () => {
  const navigate = useNavigate();
  const [selectedImage, setSelectedImage] = useState(0);
  const [quantity, setQuantity] = useState(1);

  const product = {
    id: 1,
    name: "Michelin Defender T+H All-Season Tire",
    price: 129.99,
    originalPrice: 159.99,
    rating: 4.8,
    reviewCount: 1247,
    inStock: true,
    category: "Tires",
    brand: "Michelin",
    model: "Defender T+H",
    size: "215/65R16",
    description: "The Michelin Defender T+H tire offers exceptional longevity and fuel efficiency for touring vehicles. Built with Michelin's MaxTouch Construction and IntelliSipe technology for superior performance in all weather conditions.",
    features: [
      "All-season traction",
      "80,000-mile warranty",
      "Fuel efficient design",
      "Quiet ride technology",
      "Enhanced wet grip"
    ],
    specifications: {
      "Tire Size": "215/65R16",
      "Load Index": "98",
      "Speed Rating": "T",
      "Sidewall": "Blackwall",
      "Tread Depth": "10/32\"",
      "Weight": "22.5 lbs"
    },
    images: ["/placeholder.svg", "/placeholder.svg", "/placeholder.svg"],
    compatibleWith: ["2018-2023 Toyota Camry", "2019-2023 Honda Civic", "2017-2022 Nissan Altima"]
  };

  const relatedProducts = [
    { id: 2, name: "Bridgestone Ecopia EP422", price: 119.99, rating: 4.6, image: "/placeholder.svg" },
    { id: 3, name: "Goodyear Assurance Fuel Max", price: 109.99, rating: 4.5, image: "/placeholder.svg" },
    { id: 4, name: "Continental TrueContact Tour", price: 134.99, rating: 4.7, image: "/placeholder.svg" }
  ];

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
            <Badge variant="outline">{product.category}</Badge>
          </div>
          <div className="flex gap-2">
            <Button variant="ghost" size="sm">
              <Heart className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="sm">
              <Share className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto p-4 space-y-6">
        {/* Product Images and Info */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-white rounded-lg border flex items-center justify-center">
              <ShoppingCart className="w-24 h-24 text-slate-400" />
            </div>
            <div className="grid grid-cols-3 gap-2">
              {product.images.map((_, index) => (
                <div 
                  key={index}
                  className={`aspect-square bg-white rounded border-2 cursor-pointer flex items-center justify-center ${
                    selectedImage === index ? 'border-blue-500' : 'border-slate-200'
                  }`}
                  onClick={() => setSelectedImage(index)}
                >
                  <ShoppingCart className="w-8 h-8 text-slate-400" />
                </div>
              ))}
            </div>
          </div>

          {/* Product Info */}
          <div className="space-y-6">
            <div>
              <div className="flex items-center gap-2 mb-2">
                <Badge className="bg-green-100 text-green-700">{product.brand}</Badge>
                {product.inStock && <Badge className="bg-blue-100 text-blue-700">In Stock</Badge>}
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-slate-900 mb-2">{product.name}</h1>
              <div className="flex items-center gap-4 mb-4">
                <div className="flex items-center gap-1">
                  <Star className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                  <span className="font-medium">{product.rating}</span>
                  <span className="text-slate-500">({product.reviewCount} reviews)</span>
                </div>
              </div>
              
              <div className="flex items-center gap-3 mb-6">
                <span className="text-3xl font-bold text-slate-900">${product.price}</span>
                <span className="text-lg text-slate-500 line-through">${product.originalPrice}</span>
                <Badge className="bg-red-100 text-red-700">Save ${(product.originalPrice - product.price).toFixed(2)}</Badge>
              </div>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-2">Description</h3>
              <p className="text-slate-600 leading-relaxed">{product.description}</p>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Key Features</h3>
              <ul className="space-y-2">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center gap-2 text-slate-600">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    {feature}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold text-slate-900 mb-3">Compatible Vehicles</h3>
              <div className="flex flex-wrap gap-2">
                {product.compatibleWith.map((vehicle, index) => (
                  <Badge key={index} variant="outline">{vehicle}</Badge>
                ))}
              </div>
            </div>

            {/* Purchase Section */}
            <Card className="border-0 shadow-lg">
              <CardContent className="p-4">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex items-center border rounded-lg">
                    <Button variant="ghost" size="sm" onClick={() => quantity > 1 && setQuantity(quantity - 1)}>-</Button>
                    <span className="px-4 py-2 min-w-[60px] text-center">{quantity}</span>
                    <Button variant="ghost" size="sm" onClick={() => setQuantity(quantity + 1)}>+</Button>
                  </div>
                  <Button className="flex-1 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700">
                    <ShoppingCart className="w-4 h-4 mr-2" />
                    Add to Cart
                  </Button>
                </div>
                
                <div className="grid grid-cols-3 gap-4 text-center text-sm">
                  <div className="flex flex-col items-center gap-1">
                    <Truck className="w-5 h-5 text-blue-600" />
                    <span className="text-slate-600">Free Shipping</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <Shield className="w-5 h-5 text-green-600" />
                    <span className="text-slate-600">Warranty</span>
                  </div>
                  <div className="flex flex-col items-center gap-1">
                    <RotateCcw className="w-5 h-5 text-orange-600" />
                    <span className="text-slate-600">30-Day Return</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* Specifications */}
        <Card>
          <CardHeader>
            <CardTitle>Specifications</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {Object.entries(product.specifications).map(([key, value]) => (
                <div key={key} className="flex justify-between py-2 border-b border-slate-100">
                  <span className="font-medium text-slate-900">{key}</span>
                  <span className="text-slate-600">{value}</span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        {/* Related Products */}
        <Card>
          <CardHeader>
            <CardTitle>Related Products</CardTitle>
            <CardDescription>You might also like these products</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {relatedProducts.map((relatedProduct) => (
                <Card key={relatedProduct.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                  <div className="aspect-square bg-slate-100 flex items-center justify-center">
                    <ShoppingCart className="w-12 h-12 text-slate-400" />
                  </div>
                  <CardContent className="p-4">
                    <h4 className="font-medium text-slate-900 mb-2 line-clamp-2">{relatedProduct.name}</h4>
                    <div className="flex items-center gap-2 mb-2">
                      <Star className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                      <span className="text-sm text-slate-600">{relatedProduct.rating}</span>
                    </div>
                    <p className="font-bold text-green-600">${relatedProduct.price}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default ProductDetailPage;
