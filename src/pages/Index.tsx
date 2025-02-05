import { MainNav } from "@/components/layout/MainNav";
import { NFTCard } from "@/components/nft/NFTCard";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Search, Sparkles, Compass } from "lucide-react";
import { DailyCheckin } from "@/components/streaks/DailyCheckin";

const Index = () => {
  const featuredNFTs = [
    {
      id: "1",
      name: "Cosmic Dreamer #001",
      image: "https://images.unsplash.com/photo-1634973357973-f2ed2657db3c",
      price: "0.85",
      creator: "CryptoArtist",
      likes: 142,
      isLiked: false,
    },
    {
      id: "2",
      name: "Digital Genesis",
      image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe",
      price: "1.2",
      creator: "PixelMaster",
      likes: 89,
      isLiked: true,
    },
    {
      id: "3",
      name: "Neon Horizons",
      image: "https://images.unsplash.com/photo-1577720580479-7d839d829c73",
      price: "2.4",
      creator: "Web3Creator",
      likes: 234,
      isLiked: false,
    },
    {
      id: "4",
      name: "Meta Landscapes",
      image: "https://images.unsplash.com/photo-1618172193622-ae2d025f4032",
      price: "1.8",
      creator: "ArtBlock",
      likes: 167,
      isLiked: false,
    },
  ];

  const collections = [
    {
      id: "1",
      name: "Bored Ape Yacht Club",
      items: 10000,
      floorPrice: "30.5",
      volume: "1.2M",
    },
    {
      id: "2",
      name: "CryptoPunks",
      items: 9999,
      floorPrice: "45.2",
      volume: "2.5M",
    },
    {
      id: "3",
      name: "Doodles",
      items: 8888,
      floorPrice: "8.2",
      volume: "450K",
    },
  ];

  return (
    <div className="min-h-screen">
      <MainNav />
      <main className="container mx-auto px-4 pt-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          {/* Left Sidebar */}
          <div className="lg:col-span-3 space-y-8">
            <div className="glass p-6 rounded-lg space-y-4">
              <h2 className="text-xl font-bold flex items-center gap-2">
                <Compass className="h-5 w-5 text-primary" />
                Discover Collections
              </h2>
              <div className="space-y-4">
                {collections.map((collection) => (
                  <div
                    key={collection.id}
                    className="flex items-center justify-between p-3 hover:bg-accent rounded-lg transition-colors cursor-pointer"
                  >
                    <div>
                      <h3 className="font-medium">{collection.name}</h3>
                      <p className="text-sm text-muted-foreground">
                        {collection.items} items
                      </p>
                    </div>
                    <div className="text-right">
                      <p className="font-medium">{collection.floorPrice} ETH</p>
                      <p className="text-sm text-primary">
                        Vol: {collection.volume}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <Button variant="ghost" className="w-full">
                View All Collections
              </Button>
            </div>

            <DailyCheckin />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            <div className="text-center space-y-4">
              <h1 className="text-4xl font-bold text-gradient">
                Discover, Collect, and Trade NFTs
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join the future of digital collectibles with our curated marketplace
              </p>
            </div>

            <div className="max-w-2xl mx-auto">
              <div className="glass p-2 flex gap-2 rounded-full">
                <Input
                  placeholder="Search collections and creators..."
                  className="border-none bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0"
                />
                <Button size="icon" className="rounded-full">
                  <Search className="h-4 w-4" />
                </Button>
              </div>
            </div>

            <div className="space-y-8">
              <div className="flex items-center justify-between">
                <h2 className="text-2xl font-bold flex items-center gap-2">
                  <Sparkles className="h-5 w-5 text-primary" />
                  Featured Collections
                </h2>
                <Button variant="ghost">View All</Button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
                {featuredNFTs.map((nft) => (
                  <NFTCard key={nft.id} {...nft} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Index;