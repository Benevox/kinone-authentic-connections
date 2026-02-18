import { useState } from "react";
import { Link } from "react-router-dom";
import KinOneLogo from "@/components/KinOneLogo";
import KinCard from "@/components/KinCard";
import { ThemeToggle } from "@/components/ThemeToggle";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import {
  Home,
  Search,
  Calendar,
  User,
  Bell,
  Filter,
  MapPin,
  Sparkles,
  TrendingUp,
  Users,
} from "lucide-react";

const mockKins = [
  {
    id: 1,
    name: "Sofia",
    age: 28,
    location: "Barcelona, Spain",
    bio: "Illustrator and urban explorer. I collect vintage maps and spend weekends sketching city corners nobody notices.",
    passions: ["Creative Arts", "Nature", "Photography", "Mindfulness", "Travel"],
    alignmentScore: 91,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    sharedPassions: ["Creative Arts", "Photography", "Travel"],
  },
  {
    id: 2,
    name: "Marcus",
    age: 31,
    location: "Lisbon, Portugal",
    bio: "Sound engineer by trade, record collector by obsession. Looking for jam partners and late-night conversation.",
    passions: ["Music", "Technology", "Gaming", "Travel"],
    alignmentScore: 87,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    sharedPassions: ["Music", "Technology"],
  },
  {
    id: 3,
    name: "Aisha",
    age: 26,
    location: "Porto, Portugal",
    bio: "Mental wellness advocate and morning yoga devotee. I believe the best conversations happen over tea.",
    passions: ["Mindfulness", "Fitness", "Reading", "Social Causes"],
    alignmentScore: 85,
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    sharedPassions: ["Mindfulness", "Fitness"],
  },
  {
    id: 4,
    name: "Leo",
    age: 29,
    location: "Madrid, Spain",
    bio: "Chef-in-training and fermentation nerd. Let's cook something weird together and talk about it for hours.",
    passions: ["Food", "Travel", "Photography", "Nature"],
    alignmentScore: 78,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    sharedPassions: ["Food", "Travel"],
  },
];

const upcomingMeetups = [
  {
    id: 1,
    title: "Golden Hour Photo Walk",
    date: "Tomorrow, 6:00 PM",
    attendees: 9,
    passion: "Photography",
  },
  {
    id: 2,
    title: "Rooftop Vinyl Night",
    date: "Sat, Dec 14",
    attendees: 14,
    passion: "Music",
  },
];

const Feed = () => {
  const [searchQuery, setSearchQuery] = useState("");

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <KinOneLogo />
          <div className="flex items-center gap-3">
            <ThemeToggle />
            <Button variant="ghost" size="icon" className="relative">
              <Bell className="w-5 h-5" />
              <span className="absolute top-1 right-1 w-2 h-2 bg-coral rounded-full" />
            </Button>
            <Link to="/profile">
              <Button variant="ghost" size="icon">
                <User className="w-5 h-5" />
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <div className="container mx-auto px-4 py-6">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Feed */}
          <div className="lg:col-span-2 space-y-6">
            {/* Search & Filter */}
            <div className="flex gap-3">
              <div className="flex-1 relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-muted-foreground" />
                <Input
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  placeholder="Search by passion, name, or city..."
                  className="pl-12"
                />
              </div>
              <Button variant="soft" size="icon">
                <Filter className="w-5 h-5" />
              </Button>
            </div>

            {/* Stats Bar */}
            <div className="flex items-center gap-4 text-sm">
              <div className="flex items-center gap-2 text-coral">
                <Sparkles className="w-4 h-4" />
                <span className="font-medium">18 new matches for you</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Within 15 miles</span>
              </div>
            </div>

            {/* Kin Cards Grid */}
            <div className="grid sm:grid-cols-2 gap-6">
              {mockKins.map((kin) => (
                <KinCard key={kin.id} {...kin} />
              ))}
            </div>

            {/* Load More */}
            <div className="text-center pt-4">
              <Button variant="soft" size="lg">
                Discover More People
              </Button>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Trending Passions */}
            <Card variant="warm" className="p-5">
              <div className="flex items-center gap-2 mb-4">
                <TrendingUp className="w-5 h-5 text-coral" />
                <h3 className="font-semibold">Trending Near You</h3>
              </div>
              <div className="flex flex-wrap gap-2">
                <Badge variant="coral">Photography</Badge>
                <Badge variant="marigold">Hiking</Badge>
                <Badge variant="lavender">Book Clubs</Badge>
                <Badge variant="sage">Yoga</Badge>
                <Badge variant="peach">Cooking</Badge>
              </div>
            </Card>

            {/* Upcoming Meetups */}
            <Card variant="elevated" className="p-5">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <Calendar className="w-5 h-5 text-lavender" />
                  <h3 className="font-semibold">Upcoming Meetups</h3>
                </div>
                <Link to="/events">
                  <Button variant="link" size="sm" className="text-xs">
                    See all
                  </Button>
                </Link>
              </div>
              <div className="space-y-3">
                {upcomingMeetups.map((meetup) => (
                  <div
                    key={meetup.id}
                    className="p-3 rounded-xl bg-muted/50 hover:bg-muted transition-colors cursor-pointer"
                  >
                    <h4 className="font-medium text-sm">{meetup.title}</h4>
                    <div className="flex items-center justify-between mt-1 text-xs text-muted-foreground">
                      <span>{meetup.date}</span>
                      <div className="flex items-center gap-1">
                        <Users className="w-3 h-3" />
                        {meetup.attendees} going
                      </div>
                    </div>
                    <Badge variant="passion" className="mt-2 text-xs">
                      {meetup.passion}
                    </Badge>
                  </div>
                ))}
              </div>
            </Card>

            {/* Quick Actions */}
            <Card variant="default" className="p-5">
              <h3 className="font-semibold mb-4">Quick Actions</h3>
              <div className="space-y-2">
                <Button variant="soft" className="w-full justify-start">
                  <Calendar className="w-4 h-4 mr-2" />
                  Create a Meetup
                </Button>
                <Button variant="soft" className="w-full justify-start">
                  <Users className="w-4 h-4 mr-2" />
                  Start a Group
                </Button>
              </div>
            </Card>
          </div>
        </div>
      </div>

      {/* Mobile Bottom Navigation */}
      <nav className="lg:hidden fixed bottom-0 left-0 right-0 glass border-t border-border/30">
        <div className="flex items-center justify-around h-16">
          <Link to="/feed">
            <Button variant="ghost" size="icon" className="text-coral">
              <Home className="w-6 h-6" />
            </Button>
          </Link>
          <Link to="/discover">
            <Button variant="ghost" size="icon">
              <Search className="w-6 h-6" />
            </Button>
          </Link>
          <Link to="/events">
            <Button variant="ghost" size="icon">
              <Calendar className="w-6 h-6" />
            </Button>
          </Link>
          <Link to="/profile">
            <Button variant="ghost" size="icon">
              <User className="w-6 h-6" />
            </Button>
          </Link>
        </div>
      </nav>
    </div>
  );
};

export default Feed;
