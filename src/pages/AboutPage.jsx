import { GradientBackground } from "@/components/GradientBackground";
import { TeamMember } from "@/components/About/TeamMember";
import { StatCard } from "@/components/About/StatCard";
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, Users, Star, Award } from "lucide-react";

// Mock data for team members
const teamMembers = [
  {
    id: 1,
    name: "Sarah Johnson",
    position: "Founder & CEO",
    image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330",
    bio: "Passionate about creating unforgettable travel experiences for our clients.",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 2,
    name: "Michael Chen",
    position: "Travel Director",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d",
    bio: "Expert in curating unique travel experiences and managing our global operations.",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
  {
    id: 3,
    name: "Emma Rodriguez",
    position: "Customer Experience Manager",
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80",
    bio: "Dedicated to ensuring every client has an exceptional travel experience.",
    social: {
      linkedin: "#",
      twitter: "#",
      instagram: "#",
    },
  },
];

// Mock data for statistics
const stats = [
  {
    id: 1,
    value: "10K+",
    label: "Happy Travelers",
    icon: Users,
  },
  {
    id: 2,
    value: "50+",
    label: "Destinations",
    icon: Globe,
  },
  {
    id: 3,
    value: "4.9",
    label: "Average Rating",
    icon: Star,
  },
  {
    id: 4,
    value: "15+",
    label: "Years Experience",
    icon: Award,
  },
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[50vh] flex items-center justify-center overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            About WanderLust
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Creating unforgettable travel experiences since 2008
          </p>
        </div>
      </section>

      {/* Our Story Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-white mb-6">Our Story</h2>
            <div className="prose prose-invert max-w-none">
              <p className="text-gray-300 mb-6">
                Founded in 2008, WanderLust began with a simple mission: to
                create extraordinary travel experiences that connect people with
                the world's most beautiful destinations. What started as a small
                team of travel enthusiasts has grown into a global travel agency
                trusted by thousands of adventurers.
              </p>
              <p className="text-gray-300 mb-6">
                Our journey has been marked by countless stories of discovery,
                friendship, and unforgettable moments. We believe that travel is
                not just about visiting new places—it's about experiencing new
                cultures, creating lasting memories, and returning home with a
                broader perspective.
              </p>
              <p className="text-gray-300">
                Today, we continue to innovate and expand our offerings while
                staying true to our core values of exceptional service,
                sustainable tourism, and authentic experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat) => (
              <StatCard key={stat.id} stat={stat} />
            ))}
          </div>
        </div>
      </section>

      {/* Our Team Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-white mb-12 text-center">
            Meet Our Team
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {teamMembers.map((member) => (
              <TeamMember key={member.id} member={member} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-bold text-white mb-6">
              Ready to Start Your Journey?
            </h2>
            <p className="text-gray-300 mb-8">
              Join thousands of happy travelers who have experienced the
              WanderLust difference. Let us help you create memories that will
              last a lifetime.
            </p>
            <Button
              variant="primary"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transform hover:scale-105 transition-all duration-300"
            >
              Explore Our Tours
              <ArrowRight className="ml-2" size={20} />
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
