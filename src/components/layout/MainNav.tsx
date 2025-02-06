
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Link, useLocation } from "react-router-dom";
import { WalletConnect } from "@/components/wallet/WalletConnect";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Diamond, Trophy, Users, Award, Gift, Bookmark, LogOut, Search } from "lucide-react";

export function MainNav() {
  const location = useLocation();
  const menuItems = [
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
        <div className="flex items-center gap-8">
          <Link to="/" className="text-2xl font-bold text-white">
            NEFTIT
          </Link>
          
          <div className="flex items-center gap-6">
            <Link 
              to="/" 
              className={`text-white/80 hover:text-white transition-colors ${location.pathname === "/" ? "text-white font-medium" : ""}`}
            >
              Discover
            </Link>
            <Link 
              to="/streaks" 
              className={`text-white/80 hover:text-white transition-colors ${location.pathname === "/streaks" ? "text-white font-medium" : ""}`}
            >
              Streaks✨
            </Link>
          </div>
          
          <div className="relative">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-white/50" />
            <input
              type="text"
              placeholder="Search Creators"
              className="bg-white/5 border border-white/10 rounded-full pl-10 pr-4 py-2 text-sm text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-primary/50 w-[280px]"
            />
          </div>
        </div>

        <Sheet>
          <SheetTrigger asChild>
            <div className="flex items-center gap-3 cursor-pointer">
              <Avatar className="h-10 w-10">
                <AvatarImage src="/placeholder.svg" />
                <AvatarFallback>VS</AvatarFallback>
              </Avatar>
              <span className="text-sm text-white bg-white/5 px-3 py-1.5 rounded-lg">
                vishal5120
              </span>
              <div className="flex bg-black/40 rounded-full overflow-hidden h-8">
                <div className="flex items-center gap-2 px-3 py-1 border-r border-white/10">
                  <Trophy className="h-3.5 w-3.5 text-primary" />
                  <span className="text-white text-sm">380 XPs</span>
                </div>
                <div className="flex items-center gap-2 px-3 py-1">
                  <Diamond className="h-3.5 w-3.5 text-primary" />
                  <span className="text-white text-sm">3 NEFT</span>
                </div>
              </div>
            </div>
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

        <WalletConnect />
      </div>
    </nav>
  );
}
