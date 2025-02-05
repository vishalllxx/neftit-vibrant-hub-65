import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { WalletConnect } from "@/components/wallet/WalletConnect";

export function MainNav() {
  const menuItems = [
    { name: "Home", path: "/" },
    { name: "Profile", path: "/profile" },
    { name: "Tasks", path: "/tasks" },
    { name: "Collectibles", path: "/collectibles" },
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          NEFTIT
        </Link>
        
        <div className="flex items-center gap-4">
          <Link 
            to="/" 
            className="text-white hover:text-primary transition-colors"
          >
            Discover
          </Link>
          <Link 
            to="/streaks" 
            className="text-white hover:text-primary transition-colors"
          >
            Streaks
          </Link>
          <WalletConnect />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent>
              <SheetHeader>
                <SheetTitle className="text-gradient">Menu</SheetTitle>
              </SheetHeader>
              <div className="mt-8 space-y-4">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="block px-4 py-2 text-white hover:bg-accent hover:text-accent-foreground rounded-md transition-colors"
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </SheetContent>
          </Sheet>
        </div>
      </div>
    </nav>
  );
}