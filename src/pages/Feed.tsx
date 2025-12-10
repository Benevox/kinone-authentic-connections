import { useState } from "react";
import { Link } from "react-router-dom";
import KinOneLogo from "@/components/KinOneLogo";
import KinCard from "@/components/KinCard";
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
    name: "Sarah",
    age: 28,
    location: "San Francisco, CA",
    bio: "Artist and plant mom who loves hiking on weekends. Always looking for creative souls to collaborate with!",
    passions: ["Creative Arts", "Nature", "Photography", "Mindfulness", "Food"],
    alignmentScore: 92,
    imageUrl: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop",
    sharedPassions: ["Creative Arts", "Nature", "Photography"],
  },
  {
    id: 2,
    name: "Marcus",
    age: 31,
    location: "Oakland, CA",
    bio: "Software engineer by day, musician by night. Looking for jam session buddies and tech collaborators.",
    passions: ["Music", "Technology", "Gaming", "Travel"],
    alignmentScore: 87,
    imageUrl: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop",
    sharedPassions: ["Music", "Technology"],
  },
  {
    id: 3,
    name: "Aisha",
    age: 26,
    location: "Berkeley, CA",
    bio: "Mental health advocate and yoga instructor. I believe in genuine connections and meaningful conversations.",
    passions: ["Mindfulness", "Fitness", "Reading", "Social Causes"],
    alignmentScore: 85,
    imageUrl: "https://images.unsplash.com/photo-1531123897727-8f129e1688ce?w=400&h=400&fit=crop",
    sharedPassions: ["Mindfulness", "Fitness"],
  },
  {
    id: 4,
    name: "Jake",
    age: 29,
    location: "San Jose, CA",
    bio: "Chef and food blogger exploring cuisines from around the world. Let's cook together!",
    passions: ["Food", "Travel", "Photography", "Nature"],
    alignmentScore: 78,
    imageUrl: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=400&h=400&fit=crop",
    sharedPassions: ["Food", "Travel"],
  },
];

const upcomingMeetups = [
  {
    id: 1,
    title: "Sunset Hiking Group",
    date: "Tomorrow, 5:30 PM",
    attendees: 12,
    passion: "Nature",
  },
  {
    id: 2,
    title: "Art & Wine Night",
    date: "Sat, Dec 14",
    attendees: 8,
    passion: "Creative Arts",
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
                  placeholder="Search by passion, name, or location..."
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
                <span className="font-medium">24 new Kin matches</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="w-4 h-4" />
                <span>Within 10 miles</span>
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
                Discover More Kin
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
