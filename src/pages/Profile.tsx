import { MainNav } from "@/components/layout/MainNav";
import { ProfileHeader } from "@/components/profile/ProfileHeader";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, Package } from "lucide-react";

const Profile = () => {
  const mockUser = {
    username: "CryptoEnthusiast",
    xp: 1250,
    neftPoints: 450,
  };

  const completedTasks = [
    { id: 1, name: "Daily Login", date: "2024-02-20" },
    { id: 2, name: "First Collection", date: "2024-02-19" },
  ];

  const collectibles = [
    { id: 1, name: "Digital Art #1", rarity: "Rare" },
    { id: 2, name: "Special Edition", rarity: "Epic" },
  ];

  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="container mx-auto px-4 pt-24 space-y-8">
        <ProfileHeader {...mockUser} />
        
        <div className="grid md:grid-cols-2 gap-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Tasks Completed
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {completedTasks.map((task) => (
                  <div key={task.id} className="flex justify-between items-center p-3 glass rounded-lg">
                    <span>{task.name}</span>
                    <span className="text-sm text-muted-foreground">{task.date}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Package className="w-5 h-5 text-primary" />
                My Collectibles
              </CardTitle>
            </CardHeader>
            <CardContent>
              <div className="space-y-4">
                {collectibles.map((item) => (
                  <div key={item.id} className="flex justify-between items-center p-3 glass rounded-lg">
                    <span>{item.name}</span>
                    <span className="text-sm text-accent">{item.rarity}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Profile;