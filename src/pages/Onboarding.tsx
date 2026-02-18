import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import KinOneLogo from "@/components/KinOneLogo";
import { 
  Heart, 
  Palette, 
  Music, 
  BookOpen, 
  Dumbbell, 
  Camera, 
  Code, 
  Gamepad2, 
  Utensils, 
  Plane,
  Trees,
  Users,
  Brain,
  Mic,
  ChevronRight,
  ChevronLeft,
  MapPin,
  Sparkles,
  Check
} from "lucide-react";

const passionCategories = [
  { id: "creative", label: "Creative Arts", icon: Palette, color: "coral" },
  { id: "music", label: "Music", icon: Music, color: "marigold" },
  { id: "reading", label: "Reading & Writing", icon: BookOpen, color: "lavender" },
  { id: "fitness", label: "Fitness & Wellness", icon: Dumbbell, color: "sage" },
  { id: "photography", label: "Photography", icon: Camera, color: "coral" },
  { id: "tech", label: "Technology", icon: Code, color: "marigold" },
  { id: "gaming", label: "Gaming", icon: Gamepad2, color: "lavender" },
  { id: "food", label: "Food & Cooking", icon: Utensils, color: "coral" },
  { id: "travel", label: "Travel", icon: Plane, color: "marigold" },
  { id: "nature", label: "Nature & Outdoors", icon: Trees, color: "sage" },
  { id: "social", label: "Social Causes", icon: Users, color: "lavender" },
  { id: "mindfulness", label: "Mindfulness", icon: Brain, color: "peach" },
];

const connectionIntents = [
  { id: "study-buddy", label: "Study Buddy", description: "Someone to learn and grow with" },
  { id: "workout-partner", label: "Workout Partner", description: "Stay motivated together" },
  { id: "creative-collab", label: "Creative Collaborator", description: "Build something incredible" },
  { id: "mental-health", label: "Mental Wellness Support", description: "Share, listen, and heal" },
  { id: "hobby-group", label: "Hobby Group", description: "Join local enthusiasts" },
  { id: "new-friends", label: "New Friendships", description: "Deep, lasting connections" },
];

const OnboardingFlow = () => {
  const navigate = useNavigate();
  const [step, setStep] = useState(1);
  const [selectedPassions, setSelectedPassions] = useState<string[]>([]);
  const [aboutMe, setAboutMe] = useState("");
  const [selectedIntents, setSelectedIntents] = useState<string[]>([]);
  const [location, setLocation] = useState("");
  const [radius, setRadius] = useState("10");

  const totalSteps = 4;

  const togglePassion = (id: string) => {
    setSelectedPassions(prev => 
      prev.includes(id) ? prev.filter(p => p !== id) : [...prev, id]
    );
  };

  const toggleIntent = (id: string) => {
    setSelectedIntents(prev =>
      prev.includes(id) ? prev.filter(i => i !== id) : [...prev, id]
    );
  };

  const handleNext = () => {
    if (step < totalSteps) {
      setStep(step + 1);
    } else {
      navigate("/feed");
    }
  };

  const handleBack = () => {
    if (step > 1) {
      setStep(step - 1);
    }
  };

  const canProceed = () => {
    switch (step) {
      case 1: return selectedPassions.length >= 3;
      case 2: return aboutMe.length >= 20;
      case 3: return selectedIntents.length >= 1;
      case 4: return location.length >= 2;
      default: return false;
    }
  };

  return (
    <div className="min-h-screen gradient-hero">
      {/* Header */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <KinOneLogo />
          <div className="flex items-center gap-2">
            {Array.from({ length: totalSteps }).map((_, i) => (
              <div
                key={i}
                className={`h-2 rounded-full transition-all duration-300 ${
                  i + 1 === step 
                    ? "w-8 bg-coral" 
                    : i + 1 < step 
                    ? "w-2 bg-coral/60" 
                    : "w-2 bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 pt-24 pb-32">
        <div className="max-w-2xl mx-auto">
          {/* Step 1: Passions */}
          {step === 1 && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 text-coral-dark mb-4">
                  <Sparkles className="w-4 h-4" />
                  <span className="text-sm font-medium">Step 1 of 4</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  What truly lights you up?
                </h1>
                <p className="text-muted-foreground text-lg">
                  Pick at least 3 passions. These form the heart of every connection Damosco makes for you.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {passionCategories.map((passion) => {
                  const Icon = passion.icon;
                  const isSelected = selectedPassions.includes(passion.id);
                  return (
                    <Card
                      key={passion.id}
                      variant={isSelected ? "elevated" : "default"}
                      className={`p-4 cursor-pointer transition-all duration-300 hover:scale-[1.02] ${
                        isSelected 
                          ? "ring-2 ring-coral border-coral/50" 
                          : "hover:border-primary/30"
                      }`}
                      onClick={() => togglePassion(passion.id)}
                    >
                      <div className="flex flex-col items-center gap-3 text-center">
                        <div className={`w-12 h-12 rounded-xl flex items-center justify-center ${
                          isSelected ? "bg-coral text-primary-foreground" : `bg-${passion.color}/20`
                        }`}>
                          <Icon className={`w-6 h-6 ${!isSelected && `text-${passion.color}-dark`}`} />
                        </div>
                        <span className="font-medium text-sm">{passion.label}</span>
                        {isSelected && (
                          <div className="absolute top-2 right-2">
                            <Check className="w-4 h-4 text-coral" />
                          </div>
                        )}
                      </div>
                    </Card>
                  );
                })}
              </div>

              <div className="mt-6 flex flex-wrap gap-2">
                {selectedPassions.map(id => {
                  const passion = passionCategories.find(p => p.id === id);
                  return passion && (
                    <Badge key={id} variant="passion">
                      {passion.label}
                    </Badge>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 2: Express True Self */}
          {step === 2 && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-marigold/10 text-marigold-dark mb-4">
                  <Heart className="w-4 h-4" />
                  <span className="text-sm font-medium">Step 2 of 4</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Show us who you really are
                </h1>
                <p className="text-muted-foreground text-lg">
                  No filters, no highlights reel. Just you — and that's exactly what we need.
                </p>
              </div>

              <Card variant="elevated" className="p-6">
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      <Mic className="w-4 h-4 inline mr-2" />
                      Tell us about yourself
                    </label>
                    <textarea
                      value={aboutMe}
                      onChange={(e) => setAboutMe(e.target.value)}
                      placeholder="I'm passionate about... My weirdest hobby is... What I'm really looking for is..."
                      className="w-full h-40 rounded-xl border-2 border-border bg-card px-4 py-3 text-base placeholder:text-muted-foreground focus:outline-none focus:border-primary focus:ring-2 focus:ring-primary/20 transition-all duration-200 resize-none"
                    />
                    <p className="text-sm text-muted-foreground mt-2">
                      {aboutMe.length}/20 minimum characters
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-marigold/10 border border-marigold/20">
                    <p className="text-sm text-marigold-dark">
                      <strong>Tip:</strong> The more real you are here, the better your matches will be. Mention your quirks, your dreams, even your current struggles — Damosco celebrates authenticity.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}

          {/* Step 3: Connection Intent */}
          {step === 3 && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lavender/10 text-lavender-dark mb-4">
                  <Users className="w-4 h-4" />
                  <span className="text-sm font-medium">Step 3 of 4</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  What are you looking for?
                </h1>
                <p className="text-muted-foreground text-lg">
                  Choose the kinds of connection that would make your life richer right now.
                </p>
              </div>

              <div className="grid gap-4">
                {connectionIntents.map((intent) => {
                  const isSelected = selectedIntents.includes(intent.id);
                  return (
                    <Card
                      key={intent.id}
                      variant={isSelected ? "elevated" : "default"}
                      className={`p-5 cursor-pointer transition-all duration-300 ${
                        isSelected 
                          ? "ring-2 ring-lavender border-lavender/50" 
                          : "hover:border-primary/30"
                      }`}
                      onClick={() => toggleIntent(intent.id)}
                    >
                      <div className="flex items-center justify-between">
                        <div>
                          <h3 className="font-semibold text-foreground">{intent.label}</h3>
                          <p className="text-sm text-muted-foreground">{intent.description}</p>
                        </div>
                        <div className={`w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                          isSelected 
                            ? "bg-lavender border-lavender" 
                            : "border-border"
                        }`}>
                          {isSelected && <Check className="w-4 h-4 text-primary-foreground" />}
                        </div>
                      </div>
                    </Card>
                  );
                })}
              </div>
            </div>
          )}

          {/* Step 4: Location */}
          {step === 4 && (
            <div className="animate-fade-in">
              <div className="text-center mb-8">
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-sage/50 text-sage-dark mb-4">
                  <MapPin className="w-4 h-4" />
                  <span className="text-sm font-medium">Step 4 of 4</span>
                </div>
                <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-3">
                  Where are you in the world?
                </h1>
                <p className="text-muted-foreground text-lg">
                  Help us find people near you — because the best connections happen in person too.
                </p>
              </div>

              <Card variant="elevated" className="p-6">
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Your City or Neighborhood
                    </label>
                    <Input
                      value={location}
                      onChange={(e) => setLocation(e.target.value)}
                      placeholder="e.g., Lisbon, Portugal"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-foreground mb-2">
                      Search Radius: {radius} miles
                    </label>
                    <input
                      type="range"
                      min="5"
                      max="50"
                      value={radius}
                      onChange={(e) => setRadius(e.target.value)}
                      className="w-full h-2 bg-muted rounded-lg appearance-none cursor-pointer accent-coral"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground mt-1">
                      <span>5 mi</span>
                      <span>50 mi</span>
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-sage/30 border border-sage-dark/10">
                    <p className="text-sm text-sage-dark">
                      <strong>Privacy Note:</strong> Your exact location is never shared. We only use this to suggest nearby people and events.
                    </p>
                  </div>
                </div>
              </Card>
            </div>
          )}
        </div>
      </main>

      {/* Footer Navigation */}
      <footer className="fixed bottom-0 left-0 right-0 glass border-t border-border/30">
        <div className="container mx-auto px-4 py-4">
          <div className="max-w-2xl mx-auto flex items-center justify-between">
            <Button
              variant="ghost"
              onClick={handleBack}
              disabled={step === 1}
              className={step === 1 ? "invisible" : ""}
            >
              <ChevronLeft className="w-4 h-4 mr-1" />
              Back
            </Button>

            <Button
              variant="warm"
              size="lg"
              onClick={handleNext}
              disabled={!canProceed()}
            >
              {step === totalSteps ? "Find My People" : "Continue"}
              <ChevronRight className="w-4 h-4 ml-1" />
            </Button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default OnboardingFlow;
