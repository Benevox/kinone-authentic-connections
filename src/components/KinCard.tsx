import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, MapPin, Sparkles } from "lucide-react";

interface KinCardProps {
  name: string;
  age: number;
  location: string;
  bio: string;
  passions: string[];
  alignmentScore: number;
  imageUrl: string;
  sharedPassions: string[];
}

const KinCard = ({
  name,
  age,
  location,
  bio,
  passions,
  alignmentScore,
  imageUrl,
  sharedPassions,
}: KinCardProps) => {
  return (
    <Card variant="elevated" className="overflow-hidden group">
      {/* Image Section */}
      <div className="relative h-64 overflow-hidden">
        <img
          src={imageUrl}
          alt={name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-transparent to-transparent" />
        
        {/* Alignment Score Badge */}
        <div className="absolute top-4 right-4">
          <div className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-card/90 backdrop-blur-sm shadow-card">
            <Sparkles className="w-4 h-4 text-coral" />
            <span className="font-bold text-coral">{alignmentScore}%</span>
            <span className="text-xs text-muted-foreground">match</span>
          </div>
        </div>

        {/* Name & Location */}
        <div className="absolute bottom-4 left-4 right-4">
          <h3 className="text-xl font-bold text-primary-foreground">
            {name}, {age}
          </h3>
          <div className="flex items-center gap-1 text-primary-foreground/80 text-sm">
            <MapPin className="w-3 h-3" />
            {location}
          </div>
        </div>
      </div>

      <CardContent className="p-5 space-y-4">
        {/* Shared Passions */}
        <div>
          <p className="text-xs text-muted-foreground uppercase tracking-wide mb-2 font-medium">
            Shared Passions
          </p>
          <div className="flex flex-wrap gap-2">
            {sharedPassions.map((passion) => (
              <Badge key={passion} variant="passion">
                {passion}
              </Badge>
            ))}
          </div>
        </div>

        {/* Bio */}
        <p className="text-sm text-muted-foreground line-clamp-2">{bio}</p>

        {/* All Passions */}
        <div className="flex flex-wrap gap-1.5">
          {passions
            .filter((p) => !sharedPassions.includes(p))
            .slice(0, 3)
            .map((passion) => (
              <Badge key={passion} variant="outline" className="text-xs">
                {passion}
              </Badge>
            ))}
        </div>

        {/* Actions */}
        <div className="flex gap-3 pt-2">
          <Button variant="soft" className="flex-1">
            <Heart className="w-4 h-4" />
            Connect
          </Button>
          <Button variant="coral" className="flex-1">
            <MessageCircle className="w-4 h-4" />
            Message
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default KinCard;
