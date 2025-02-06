import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { AuthPage } from "./components/auth/AuthPage";
import { WalletProvider } from "./components/wallet/WalletProvider";
import Index from "./pages/Index";
import Profile from "./pages/Profile";
import Streaks from "./pages/Streaks";
import NotFound from "./pages/NotFound";

const queryClient = new QueryClient();

const isAuthenticated = () => {
  // Clear any stale auth state on app load
  const auth = localStorage.getItem("isAuthenticated");
  if (!auth) {
    localStorage.setItem("isAuthenticated", "false");
    return false;
  }
  return auth === "true";
};

const PrivateRoute = ({ children }: { children: React.ReactNode }) => {
  return isAuthenticated() ? children : <Navigate to="/auth" replace />;
};

const App = () => {
  console.log("Auth state:", isAuthenticated()); // Debug log
  
  return (
    <QueryClientProvider client={queryClient}>
      <WalletProvider>
        <TooltipProvider>
          <Toaster />
          <Sonner />
          <BrowserRouter>
            <Routes>
              <Route 
                path="/auth" 
                element={
                  isAuthenticated() ? <Navigate to="/" replace /> : <AuthPage />
                } 
              />
              <Route
                path="/"
                element={
                  <PrivateRoute>
                    <Index />
                  </PrivateRoute>
                }
              />
              <Route
                path="/profile"
                element={
                  <PrivateRoute>
                    <Profile />
                  </PrivateRoute>
                }
              />
              <Route
                path="/streaks"
                element={
                  <PrivateRoute>
                    <Streaks />
                  </PrivateRoute>
                }
              />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </BrowserRouter>
        </TooltipProvider>
      </WalletProvider>
    </QueryClientProvider>
  );
};

export default App;