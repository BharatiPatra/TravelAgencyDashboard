import { Search } from "lucide-react";
import { GradientBackground } from "@/components/GradientBackground";

export function HeroSection({ searchQuery, onSearchChange }) {
  return (
    <section className="relative h-[60vh] flex items-center justify-center overflow-hidden">
      <GradientBackground />
      <div className="absolute inset-0 bg-black/50" />
      <div className="container mx-auto px-4 relative z-10 text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
          Discover Your Next Adventure
        </h1>
        <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Explore our carefully curated destinations and find your perfect
          getaway
        </p>
        <div className="max-w-2xl mx-auto">
          <div className="relative">
            <input
              type="text"
              placeholder="Search destinations..."
              className="w-full px-6 py-4 rounded-full bg-white/10 backdrop-blur-md text-white placeholder-gray-400 border border-purple-500/20 focus:outline-none focus:border-purple-500"
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
            />
            <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
          </div>
        </div>
      </div>
    </section>
  );
}
