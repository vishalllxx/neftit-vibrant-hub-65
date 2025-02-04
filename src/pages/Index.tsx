import { MainNav } from "@/components/layout/MainNav";

const Index = () => {
  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="container mx-auto px-4 pt-24">
        <h1 className="text-4xl font-bold text-gradient">Welcome to NEFTIT</h1>
        <p className="mt-4 text-lg text-muted-foreground">
          Your gateway to digital collectibles and achievements
        </p>
      </main>
    </div>
  );
};

export default Index;