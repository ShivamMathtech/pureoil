import { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent } from "@/components/ui/card";
import { Minus, Plus, ArrowLeft } from "lucide-react";

export default function ProductDetail() {
  const { id } = useParams();
  const [quantity, setQuantity] = useState(1);

  // Mock product data
  const product = {
    id,
    name: "Extra Virgin Olive Oil",
    price: 24.99,
    category: "Olive Oil",
    image: "/placeholder.svg",
    description: "Premium quality extra virgin olive oil, cold-pressed from the finest organic olives. Rich in antioxidants and perfect for salads, cooking, and dipping.",
    features: [
      "100% Pure & Natural",
      "Cold-Pressed",
      "Rich in Antioxidants",
      "No Additives",
      "Glass Bottle Packaging"
    ],
    inStock: true
  };

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-6 sm:py-8">
        <Link to="/products">
          <Button variant="ghost" className="mb-4 sm:mb-6 gap-2">
            <ArrowLeft className="h-4 w-4" />
            Back to Products
          </Button>
        </Link>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8 md:gap-12">
          {/* Product Image */}
          <div>
            <img 
              src={product.image} 
              alt={product.name} 
              className="w-full rounded-lg shadow-lg"
            />
          </div>

          {/* Product Info */}
          <div>
            <p className="text-xs sm:text-sm text-muted-foreground mb-2">{product.category}</p>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-4">{product.name}</h1>
            
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <p className="text-2xl sm:text-3xl font-bold text-primary">${product.price}</p>
              {product.inStock ? (
                <Badge variant="secondary">In Stock</Badge>
              ) : (
                <Badge variant="destructive">Out of Stock</Badge>
              )}
            </div>

            <p className="text-sm sm:text-base text-muted-foreground mb-4 sm:mb-6 leading-relaxed">
              {product.description}
            </p>

            <Card className="mb-4 sm:mb-6">
              <CardContent className="pt-4 sm:pt-6">
                <h3 className="font-semibold mb-3">Features:</h3>
                <ul className="space-y-2">
                  {product.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-primary flex-shrink-0"></span>
                      <span className="text-xs sm:text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            {/* Quantity Selector */}
            <div className="flex items-center gap-3 sm:gap-4 mb-4 sm:mb-6">
              <span className="text-sm sm:text-base font-medium">Quantity:</span>
              <div className="flex items-center border border-input rounded-md">
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setQuantity(Math.max(1, quantity - 1))}
                >
                  <Minus className="h-4 w-4" />
                </Button>
                <span className="px-3 sm:px-4 py-2 min-w-[2.5rem] sm:min-w-[3rem] text-center text-sm sm:text-base">{quantity}</span>
                <Button 
                  variant="ghost" 
                  size="icon"
                  className="h-9 w-9"
                  onClick={() => setQuantity(quantity + 1)}
                >
                  <Plus className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <Button size="lg" className="w-full" disabled={!product.inStock}>
              Add to Cart - ${(product.price * quantity).toFixed(2)}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
