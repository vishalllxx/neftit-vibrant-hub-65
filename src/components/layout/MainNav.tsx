import { Menu } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link } from "react-router-dom";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Diamond, Trophy, Users, Award, Gift, Bookmark, LogOut } from "lucide-react";

export function MainNav() {
  const menuItems = [
    { 
      name: "3 NEFT", 
      icon: <Diamond className="h-4 w-4" />,
      path: "/profile"
    },
    { 
      name: "380 XPs", 
      icon: <Trophy className="h-4 w-4" />,
      path: "/profile"
    },
    { 
      name: "Leaderboard", 
      icon: <Users className="h-4 w-4" />,
      path: "/leaderboard"
    },
    { 
      name: "Achievements", 
      icon: <Award className="h-4 w-4" />,
      badge: "New",
      path: "/achievements"
    },
    { 
      name: "Refer and Earn", 
      icon: <Gift className="h-4 w-4" />,
      path: "/refer"
    },
    { 
      name: "Saved", 
      icon: <Bookmark className="h-4 w-4" />,
      path: "/saved"
    },
    { 
      name: "Following", 
      icon: <Users className="h-4 w-4" />,
      path: "/following"
    },
    { 
      name: "Logout", 
      icon: <LogOut className="h-4 w-4" />,
      path: "/logout"
    }
  ];

  return (
    <nav className="fixed top-0 w-full z-50 glass px-4 py-3">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold text-white">
          NEFTIT
        </Link>
        
        <div className="flex items-center gap-4">
          <WalletConnect />
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="text-white">
                <Menu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent className="w-[300px] bg-[#121212] border-l border-white/10">
              <div className="flex items-center gap-3 mb-8">
                <Avatar className="h-10 w-10">
                  <AvatarImage src="/placeholder.svg" />
                  <AvatarFallback>VS</AvatarFallback>
                </Avatar>
                <div className="text-white">
                  <h4 className="font-medium">vishal5120</h4>
                </div>
              </div>
              <div className="space-y-2">
                {menuItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="flex items-center gap-3 px-4 py-2 text-white hover:bg-white/5 rounded-lg transition-colors"
                  >
                    {item.icon}
                    <span>{item.name}</span>
                    {item.badge && (
                      <span className="ml-auto text-xs bg-primary px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
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