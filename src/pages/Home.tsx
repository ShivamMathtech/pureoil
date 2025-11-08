import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "react-router-dom";
import { Navbar } from "@/components/Navbar";
import { ArrowRight, Droplets, Leaf, Award } from "lucide-react";

const featuredProducts = [
  { id: 1, name: "Extra Virgin Olive Oil", price: 24.99, image: "/placeholder.svg", badge: "Best Seller" },
  { id: 2, name: "Organic Coconut Oil", price: 18.99, image: "/placeholder.svg", badge: "Organic" },
  { id: 3, name: "Cold-Pressed Sesame Oil", price: 22.99, image: "/placeholder.svg", badge: "New" },
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-primary/10 via-background to-accent/10 py-12 sm:py-16 md:py-20 px-4">
        <div className="container mx-auto text-center max-w-4xl">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-foreground mb-4 sm:mb-6">
            Pure, Natural Oils from Our Mill
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-muted-foreground mb-6 sm:mb-8 px-4">
            Experience the finest quality cold-pressed oils, crafted with care and tradition
          </p>
          <Link to="/products">
            <Button size="lg" className="gap-2">
              Shop Now <ArrowRight className="h-4 w-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="py-12 sm:py-16 px-4 bg-card">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8">
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4">
                <Droplets className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Pure & Natural</h3>
              <p className="text-sm sm:text-base text-muted-foreground">100% pure oils with no additives or preservatives</p>
            </div>
            <div className="text-center p-4">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4">
                <Leaf className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Organic Sourced</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Ethically sourced from organic farms</p>
            </div>
            <div className="text-center p-4 sm:col-span-2 md:col-span-1">
              <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4">
                <Award className="h-7 w-7 sm:h-8 sm:w-8 text-primary" />
              </div>
              <h3 className="text-lg sm:text-xl font-semibold mb-2">Award Winning</h3>
              <p className="text-sm sm:text-base text-muted-foreground">Recognized for quality and excellence</p>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-12 sm:py-16 px-4">
        <div className="container mx-auto">
          <h2 className="text-2xl sm:text-3xl font-bold text-center mb-8 sm:mb-12">Featured Products</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
            {featuredProducts.map((product) => (
              <Card key={product.id} className="overflow-hidden hover:shadow-lg transition-shadow">
                <CardHeader className="p-0">
                  <div className="relative">
                    <img src={product.image} alt={product.name} className="w-full h-48 sm:h-56 md:h-64 object-cover" />
                    <Badge className="absolute top-3 right-3 sm:top-4 sm:right-4">{product.badge}</Badge>
                  </div>
                </CardHeader>
                <CardContent className="pt-4">
                  <CardTitle className="text-base sm:text-lg mb-2">{product.name}</CardTitle>
                  <p className="text-xl sm:text-2xl font-bold text-primary">${product.price}</p>
                </CardContent>
                <CardFooter>
                  <Link to={`/product/${product.id}`} className="w-full">
                    <Button className="w-full" variant="outline">View Details</Button>
                  </Link>
                </CardFooter>
              </Card>
            ))}
          </div>
          <div className="text-center mt-8 sm:mt-12">
            <Link to="/products">
              <Button variant="outline" size="lg">View All Products</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
