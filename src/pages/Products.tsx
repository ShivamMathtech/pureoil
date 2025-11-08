import { Navbar } from "@/components/Navbar";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";

const products = [
  { id: 1, name: "Extra Virgin Olive Oil", price: 24.99, category: "Olive Oil", image: "/placeholder.svg", badge: "Best Seller" },
  { id: 2, name: "Organic Coconut Oil", price: 18.99, category: "Coconut Oil", image: "/placeholder.svg", badge: "Organic" },
  { id: 3, name: "Cold-Pressed Sesame Oil", price: 22.99, category: "Sesame Oil", image: "/placeholder.svg", badge: "New" },
  { id: 4, name: "Premium Avocado Oil", price: 28.99, category: "Avocado Oil", image: "/placeholder.svg" },
  { id: 5, name: "Sunflower Oil", price: 15.99, category: "Sunflower Oil", image: "/placeholder.svg" },
  { id: 6, name: "Walnut Oil", price: 26.99, category: "Nut Oil", image: "/placeholder.svg" },
];

export default function Products() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Our Products</h1>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
          {products.map((product) => (
            <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
              <CardHeader className="p-0">
                <div className="relative">
                  <img src={product.image} alt={product.name} className="w-full h-44 sm:h-48 object-cover" />
                  {product.badge && (
                    <Badge className="absolute top-3 right-3">{product.badge}</Badge>
                  )}
                </div>
              </CardHeader>
              <CardContent className="pt-4">
                <p className="text-xs sm:text-sm text-muted-foreground mb-1">{product.category}</p>
                <CardTitle className="text-base sm:text-lg mb-2">{product.name}</CardTitle>
                <p className="text-xl sm:text-2xl font-bold text-primary">${product.price}</p>
              </CardContent>
              <CardFooter className="flex flex-col sm:flex-row gap-2">
                <Link to={`/product/${product.id}`} className="w-full sm:flex-1">
                  <Button className="w-full" variant="outline">View</Button>
                </Link>
                <Button className="w-full sm:flex-1">Add to Cart</Button>
              </CardFooter>
            </Card>
          ))}
        </div>
      </div>
    </div>
  );
}
