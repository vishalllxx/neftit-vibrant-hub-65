
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Bookmark } from "lucide-react";
import { cn } from "@/lib/utils";

interface NFTCardProps {
  id: string;
  name: string;
  image: string;
  creator: {
    name: string;
    image: string;
  };
  xp: number;
  neft: number;
  backgroundColor: string;
}

export function NFTCard({ id, name, image, creator, xp, neft, backgroundColor }: NFTCardProps) {
  return (
    <Card className={cn("border-0 overflow-hidden transition-all duration-300 hover:scale-[1.02]", backgroundColor)}>
      <div className="p-4 space-y-4">
        <div className="relative aspect-[4/3] rounded-lg overflow-hidden">
          <img
            src={image}
            alt={name}
            className="object-cover w-full h-full"
          />
          <button className="absolute top-3 right-3 p-1.5 rounded-md bg-black/20 hover:bg-black/40 transition-colors">
            <Bookmark className="h-4 w-4 text-white" />
          </button>
        </div>
        
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <img
              src={creator.image}
              alt={creator.name}
              className="w-5 h-5 rounded-full"
            />
            <span className="text-sm font-medium text-white/90">{creator.name}</span>
          </div>
          
          <h3 className="font-semibold text-white/90 line-clamp-2">
            {name}
          </h3>
          
          <div className="flex gap-2">
            <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
              {xp} XPs
            </Badge>
            <Badge variant="secondary" className="bg-white/10 hover:bg-white/20 text-white">
              {neft} NEFT
            </Badge>
          </div>
        </div>
      </div>
    </Card>
  );
}
