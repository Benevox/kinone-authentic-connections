import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import KinOneLogo from "@/components/KinOneLogo";
import { ThemeToggle } from "@/components/ThemeToggle";
import heroImage from "@/assets/hero-connections.jpg";
import {
  Heart,
  Users,
  Calendar,
  Sparkles,
  ArrowRight,
  Shield,
  Brain,
  Compass,
  CheckCircle2,
} from "lucide-react";

const features = [
  {
    icon: Brain,
    title: "Passion Matching",
    description: "Our algorithm finds people aligned with your values and interests — not just surface-level hobbies.",
    color: "coral",
  },
  {
    icon: Users,
    title: "Genuine Bonds",
    description: "No performance, no pressure. Damosco is built for people who crave real, lasting friendships.",
    color: "marigold",
  },
  {
    icon: Calendar,
    title: "Real-World Meetups",
    description: "Go beyond the screen. Discover local events and gatherings shaped around your shared passions.",
    color: "lavender",
  },
  {
    icon: Shield,
    title: "Wellness First",
    description: "A judgment-free space designed with mental health in mind. Your comfort and safety always come first.",
    color: "sage",
  },
];

const testimonials = [
  {
    quote: "Damosco helped me find a photography collective I didn't know I needed. We shoot together every weekend now.",
    author: "Maya, 27",
    passion: "Photography",
  },
  {
    quote: "I moved to a new city and felt invisible. Within two weeks on Damosco, I had a hiking crew that felt like home.",
    author: "Jordan, 32",
    passion: "Nature",
  },
  {
    quote: "Finally an app that values depth over followers. I've made two of my closest friends here.",
    author: "Alex, 29",
    passion: "Mindfulness",
  },
];

const Index = () => {
  return (
    <div className="min-h-screen">
      {/* Navigation */}
      <header className="fixed top-0 left-0 right-0 z-50 glass border-b border-border/30">
        <div className="container mx-auto px-4 h-16 flex items-center justify-between">
          <KinOneLogo />
          <div className="flex items-center gap-4">
            <ThemeToggle />
            <Link to="/onboarding">
              <Button variant="ghost">Sign In</Button>
            </Link>
            <Link to="/onboarding">
              <Button variant="warm">Get Started</Button>
            </Link>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center gradient-hero overflow-hidden">
        {/* Decorative Elements */}
        <div className="absolute top-20 left-10 w-72 h-72 bg-coral/20 rounded-full blur-3xl animate-pulse-soft" />
        <div className="absolute bottom-20 right-10 w-96 h-96 bg-lavender/20 rounded-full blur-3xl animate-pulse-soft" style={{ animationDelay: "1s" }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-marigold/10 rounded-full blur-3xl" />

        <div className="container mx-auto px-4 pt-24 pb-16 relative z-10">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="space-y-8 animate-slide-up">
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-coral/10 border border-coral/20">
                <Sparkles className="w-4 h-4 text-coral" />
                <span className="text-sm font-medium text-coral-dark">
                  Fighting loneliness, one real connection at a time
                </span>
              </div>

              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground leading-tight">
                Where Real
                <br />
                <span className="gradient-warm bg-clip-text text-transparent">
                  Connections Begin
                </span>
              </h1>

              <p className="text-lg md:text-xl text-muted-foreground max-w-lg">
                Find your people — those who truly share your passions and understand your world. 
                Build friendships that go beyond the screen and into real life.
              </p>

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to="/onboarding">
                  <Button variant="warm" size="xl" className="w-full sm:w-auto">
                    Start Your Journey
                    <ArrowRight className="w-5 h-5 ml-2" />
                  </Button>
                </Link>
                <Button variant="outline" size="xl" className="w-full sm:w-auto">
                  <Compass className="w-5 h-5 mr-2" />
                  How It Works
                </Button>
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-6 pt-4">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <div
                      key={i}
                      className="w-10 h-10 rounded-full bg-muted border-2 border-background overflow-hidden"
                    >
                      <img
                        src={`https://i.pravatar.cc/80?img=${i + 10}`}
                        alt="User"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  ))}
                </div>
                <div className="text-sm">
                  <p className="font-semibold text-foreground">Join 50,000+ members</p>
                  <p className="text-muted-foreground">finding real connections daily</p>
                </div>
              </div>
            </div>

            {/* Right Content - Hero Image */}
            <div className="relative animate-fade-in" style={{ animationDelay: "0.3s" }}>
              <div className="relative rounded-3xl overflow-hidden shadow-elevated">
                <img
                  src={heroImage}
                  alt="People connecting over shared passions"
                  className="w-full h-auto"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/20 to-transparent" />
              </div>

              {/* Floating Cards */}
              <Card
                variant="glass"
                className="absolute -bottom-6 -left-6 p-4 animate-float shadow-elevated"
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-coral/20 flex items-center justify-center">
                    <Heart className="w-5 h-5 text-coral" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">91% Match</p>
                    <p className="text-xs text-muted-foreground">Sofia shares 5 passions</p>
                  </div>
                </div>
              </Card>

              <Card
                variant="glass"
                className="absolute -top-4 -right-4 p-4 animate-float shadow-elevated"
                style={{ animationDelay: "1s" }}
              >
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-marigold/20 flex items-center justify-center">
                    <Calendar className="w-5 h-5 text-marigold" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">Rooftop Yoga</p>
                    <p className="text-xs text-muted-foreground">Saturday, 8:00 AM</p>
                  </div>
                </div>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="lavender" className="mb-4">
              Why Damosco?
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Designed for Depth, Not Likes
            </h2>
            <p className="text-muted-foreground text-lg">
              Damosco is the antidote to shallow social media. 
              Here, authenticity wins and meaningful bonds are built to last.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={feature.title}
                  variant="elevated"
                  className="p-6 text-center group hover:scale-[1.02] transition-transform duration-300 animate-slide-up"
                  style={{ animationDelay: `${index * 0.1}s` }}
                >
                  <div
                    className={`w-14 h-14 rounded-2xl mx-auto mb-4 flex items-center justify-center bg-${feature.color}/20 group-hover:scale-110 transition-transform`}
                  >
                    <Icon className={`w-7 h-7 text-${feature.color}`} />
                  </div>
                  <h3 className="font-semibold text-lg mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="marigold" className="mb-4">
              Simple & Intuitive
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Find Your People in 4 Steps
            </h2>
          </div>

          <div className="grid md:grid-cols-4 gap-8 max-w-5xl mx-auto">
            {[
              { step: "1", title: "Share Your Passions", desc: "Tell us what truly lights you up" },
              { step: "2", title: "Be Yourself", desc: "Express your authentic story" },
              { step: "3", title: "Get Matched", desc: "Our algorithm finds your people" },
              { step: "4", title: "Connect & Meet", desc: "Build friendships that last" },
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-16 h-16 rounded-full gradient-warm text-primary-foreground font-bold text-2xl flex items-center justify-center mx-auto mb-4 shadow-card">
                  {item.step}
                </div>
                <h3 className="font-semibold mb-2">{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 gradient-sunset">
        <div className="container mx-auto px-4">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <Badge variant="coral" className="mb-4">
              Real Stories
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Lives Changed by Real Connection
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {testimonials.map((testimonial, i) => (
              <Card key={i} variant="glass" className="p-6">
                <p className="text-foreground mb-4 italic">"{testimonial.quote}"</p>
                <div className="flex items-center justify-between">
                  <div>
                    <p className="font-semibold text-sm">{testimonial.author}</p>
                    <Badge variant="passion" className="mt-1">{testimonial.passion}</Badge>
                  </div>
                  <CheckCircle2 className="w-5 h-5 text-sage-dark" />
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 relative overflow-hidden">
        <div className="absolute inset-0 gradient-warm opacity-10" />
        <div className="container mx-auto px-4 relative z-10">
          <Card variant="elevated" className="max-w-3xl mx-auto p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Ready to Find Your People?
            </h2>
            <p className="text-muted-foreground text-lg mb-8 max-w-lg mx-auto">
              Thousands have already found meaningful connections and broken free from isolation on Damosco. 
              Your people are waiting.
            </p>
            <Link to="/onboarding">
              <Button variant="warm" size="xl">
                Join Damosco Free
                <ArrowRight className="w-5 h-5 ml-2" />
              </Button>
            </Link>
          </Card>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-muted/50 border-t border-border/50">
        <div className="container mx-auto px-4">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6">
            <KinOneLogo />
            <p className="text-sm text-muted-foreground">
              © 2024 Damosco. Built with 💛 to combat loneliness.
            </p>
            <div className="flex gap-6 text-sm text-muted-foreground">
              <a href="#" className="hover:text-foreground transition-colors">Privacy</a>
              <a href="#" className="hover:text-foreground transition-colors">Terms</a>
              <a href="#" className="hover:text-foreground transition-colors">Support</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
