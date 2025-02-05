import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Wallet } from "lucide-react";
import { useNavigate } from "react-router-dom";
import { useToast } from "@/components/ui/use-toast";

export function AuthPage() {
  const navigate = useNavigate();
  const { toast } = useToast();

  const handleLogin = (method: string) => {
    // Mock login - in real app would integrate with actual auth
    localStorage.setItem("isAuthenticated", "true");
    toast({
      title: "Login Successful",
      description: `Logged in with ${method}`,
    });
    navigate("/");
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-background to-background/80">
      <Card className="w-[380px] glass">
        <CardHeader className="text-center">
          <CardTitle className="text-3xl font-bold text-gradient">NEFTIT</CardTitle>
          <CardDescription>Connect to start your NFT journey</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <Button 
            variant="outline" 
            className="w-full gap-2"
            onClick={() => handleLogin("Wallet")}
          >
            <Wallet className="w-4 h-4" />
            Connect Wallet
          </Button>
          <Button 
            variant="outline"
            className="w-full gap-2"
            onClick={() => handleLogin("Email")}
          >
            <Mail className="w-4 h-4" />
            Continue with Email
          </Button>
        </CardContent>
      </Card>
    </div>
  );
}