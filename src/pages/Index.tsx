import { MainNav } from "@/components/layout/MainNav";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Trophy, Star, Sparkles } from "lucide-react";

const Index = () => {
  const featuredProjects = [
    {
      id: 1,
      name: "Cyber Punks",
      image: "https://images.unsplash.com/photo-1558244661-d248897f7bc4",
      description: "A collection of unique digital avatars",
      status: "Live",
    },
    {
      id: 2,
      name: "Meta Worlds",
      image: "https://images.unsplash.com/photo-1614729939124-032f0b56c9ce",
      description: "Explore virtual landscapes and environments",
      status: "Coming Soon",
    },
    {
      id: 3,
      name: "Digital Dreams",
      image: "https://images.unsplash.com/photo-1618172193763-c511deb635ca",
      description: "Abstract digital art collection",
      status: "Live",
    },
  ];

  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="container mx-auto px-4 pt-24 space-y-12">
        <div className="text-center space-y-4">
          <h1 className="text-4xl font-bold text-gradient">
            Welcome to NEFTIT
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover and collect unique digital assets, earn rewards, and join a thriving community of creators and collectors.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProjects.map((project) => (
            <Card key={project.id} className="glass overflow-hidden group cursor-pointer">
              <div className="aspect-video relative">
                <img
                  src={project.image}
                  alt={project.name}
                  className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-200"
                />
                <div className="absolute top-2 right-2 glass px-2 py-1 rounded-full text-xs">
                  {project.status}
                </div>
              </div>
              <CardHeader>
                <CardTitle>{project.name}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  {project.description}
                </p>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Trophy className="w-5 h-5 text-primary" />
                Top Collections
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Discover the most popular collections
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Star className="w-5 h-5 text-accent" />
                Featured Artists
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Meet our talented creators
              </p>
            </CardContent>
          </Card>

          <Card className="glass">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-primary" />
                Upcoming Drops
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground">
                Stay tuned for new releases
              </p>
            </CardContent>
          </Card>
        </div>
      </main>
    </div>
  );
};

export default Index;