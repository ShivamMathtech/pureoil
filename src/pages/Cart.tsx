import { Navbar } from "@/components/Navbar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Trash2, Minus, Plus } from "lucide-react";
import { Link } from "react-router-dom";

// Mock cart data
const cartItems = [
  { id: 1, name: "Extra Virgin Olive Oil", price: 24.99, quantity: 2, image: "/placeholder.svg" },
  { id: 2, name: "Organic Coconut Oil", price: 18.99, quantity: 1, image: "/placeholder.svg" },
];

export default function Cart() {
  const subtotal = cartItems.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const shipping = 5.99;
  const total = subtotal + shipping;

  return (
    <div className="min-h-screen bg-background">
      <Navbar />
      
      <div className="container mx-auto px-4 py-8 sm:py-12">
        <h1 className="text-3xl sm:text-4xl font-bold mb-6 sm:mb-8">Shopping Cart</h1>

        {cartItems.length === 0 ? (
          <Card>
            <CardContent className="pt-6 text-center">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Link to="/products">
                <Button>Continue Shopping</Button>
              </Link>
            </CardContent>
          </Card>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 sm:gap-8">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              {cartItems.map((item) => (
                <Card key={item.id}>
                  <CardContent className="pt-4 sm:pt-6">
                    <div className="flex flex-col sm:flex-row gap-4">
                      <img src={item.image} alt={item.name} className="w-full sm:w-20 md:w-24 h-48 sm:h-20 md:h-24 object-cover rounded-md" />
                      <div className="flex-1">
                        <div className="flex justify-between items-start mb-2">
                          <h3 className="font-semibold text-base sm:text-lg">{item.name}</h3>
                          <p className="font-bold text-base sm:text-lg sm:hidden">${(item.price * item.quantity).toFixed(2)}</p>
                        </div>
                        <p className="text-primary font-bold text-sm sm:text-base">${item.price}</p>
                        
                        <div className="flex items-center gap-4 mt-3 sm:mt-4">
                          <div className="flex items-center border border-input rounded-md">
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Minus className="h-3 w-3" />
                            </Button>
                            <span className="px-3 py-1 text-sm">{item.quantity}</span>
                            <Button variant="ghost" size="icon" className="h-8 w-8">
                              <Plus className="h-3 w-3" />
                            </Button>
                          </div>
                          <Button variant="ghost" size="icon" className="text-destructive">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </div>
                      <div className="text-right hidden sm:block">
                        <p className="font-bold text-lg">${(item.price * item.quantity).toFixed(2)}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            {/* Order Summary */}
            <div>
              <Card className="lg:sticky lg:top-20">
                <CardHeader>
                  <CardTitle>Order Summary</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Subtotal</span>
                    <span className="font-medium">${subtotal.toFixed(2)}</span>
                  </div>
                  <div className="flex justify-between text-sm sm:text-base">
                    <span className="text-muted-foreground">Shipping</span>
                    <span className="font-medium">${shipping.toFixed(2)}</span>
                  </div>
                  <Separator />
                  <div className="flex justify-between text-base sm:text-lg">
                    <span className="font-bold">Total</span>
                    <span className="font-bold text-primary">${total.toFixed(2)}</span>
                  </div>
                </CardContent>
                <CardFooter>
                  <Button className="w-full" size="lg">Proceed to Checkout</Button>
                </CardFooter>
              </Card>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
