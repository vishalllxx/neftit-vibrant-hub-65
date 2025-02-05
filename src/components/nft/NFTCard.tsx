import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, Share2 } from "lucide-react";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  price?: string;
  creator: string;
  likes: number;
  isLiked?: boolean;
}

export function NFTCard({ id, name, image, price, creator, likes, isLiked }: NFTCardProps) {
  return (
    <Card className="glass card-hover overflow-hidden">
      <div className="aspect-square relative overflow-hidden">
        <img
          src={image}
          alt={name}
          className="object-cover w-full h-full transition-transform duration-300 hover:scale-110"
        />
        <div className="absolute top-2 right-2 flex gap-2">
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/50">
            <Heart className={`h-4 w-4 ${isLiked ? 'fill-red-500 text-red-500' : ''}`} />
          </Button>
          <Button variant="ghost" size="icon" className="h-8 w-8 rounded-full bg-black/50">
            <Share2 className="h-4 w-4" />
          </Button>
        </div>
        {price && (
          <Badge className="absolute bottom-2 left-2 bg-black/50 hover:bg-black/50">
            {price} ETH
          </Badge>
        )}
      </div>
      <CardHeader>
        <CardTitle className="text-lg">{name}</CardTitle>
        <p className="text-sm text-muted-foreground">by {creator}</p>
      </CardHeader>
      <CardContent>
        <div className="flex justify-between items-center">
          <span className="text-sm text-muted-foreground">{likes} likes</span>
          <Button variant="secondary" size="sm">
            View Details
          </Button>
        </div>
      </CardContent>
    </Card>
  );
}