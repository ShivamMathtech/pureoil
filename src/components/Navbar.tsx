import { ShoppingCart, User, Menu, X } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { useState } from "react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

export const Navbar = () => {
  const cartItemsCount = 0; // Mock data
  const [isOpen, setIsOpen] = useState(false);

  const NavLinks = () => (
    <>
      <Link 
        to="/" 
        className="text-sm font-medium text-foreground hover:text-primary transition-colors block py-2"
        onClick={() => setIsOpen(false)}
      >
        Home
      </Link>
      <Link 
        to="/products" 
        className="text-sm font-medium text-foreground hover:text-primary transition-colors block py-2"
        onClick={() => setIsOpen(false)}
      >
        Products
      </Link>
      <Link 
        to="/about" 
        className="text-sm font-medium text-foreground hover:text-primary transition-colors block py-2"
        onClick={() => setIsOpen(false)}
      >
        About Us
      </Link>
      <Link 
        to="/contact" 
        className="text-sm font-medium text-foreground hover:text-primary transition-colors block py-2"
        onClick={() => setIsOpen(false)}
      >
        Contact
      </Link>
    </>
  );

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center space-x-2">
          <div className="text-xl sm:text-2xl font-bold text-primary">🫒 PureOil Mill</div>
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:flex items-center space-x-6">
          <NavLinks />
        </div>

        <div className="flex items-center space-x-2 sm:space-x-4">
          <Link to="/cart">
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingCart className="h-5 w-5" />
              {cartItemsCount > 0 && (
                <Badge variant="destructive" className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs">
                  {cartItemsCount}
                </Badge>
              )}
            </Button>
          </Link>
          <Link to="/admin" className="hidden sm:block">
            <Button variant="ghost" size="icon">
              <User className="h-5 w-5" />
            </Button>
          </Link>

          {/* Mobile Menu */}
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild className="md:hidden">
              <Button variant="ghost" size="icon">
                <Menu className="h-5 w-5" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[280px] sm:w-[350px]">
              <div className="flex flex-col space-y-4 mt-8">
                <NavLinks />
                <Link to="/admin" onClick={() => setIsOpen(false)}>
                  <Button variant="outline" className="w-full gap-2">
                    <User className="h-4 w-4" />
                    Admin Panel
                  </Button>
                </Link>
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
};
