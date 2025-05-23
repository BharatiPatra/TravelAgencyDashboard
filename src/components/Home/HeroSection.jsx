import { Button } from "@/components/ui/button";
import { GradientBackground } from "../GradientBackground";

export default function HeroSection() {
  return (
    <section className="relative h-[90vh] flex items-center overflow-hidden">
      {/* Background Image with Gradient Overlay */}
      <div
        className="absolute inset-0 bg-cover bg-center z-[-2] transform scale-105 animate-subtle-zoom"
        style={{
          backgroundImage: "url('/placeholder.svg?height=1080&width=1920')",
        }}
      ></div>

      {/* Animated Gradient Overlay */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute inset-0 bg-gradient-to-b from-gray-900/90 via-gray-900/80 to-gray-900/90" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.2),rgba(0,0,0,0))]" />
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 via-transparent to-purple-500/10 animate-gradient-x" />
      </div>

      {/* Animated Particles */}
      <div className="absolute inset-0 z-[-1]">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 bg-purple-500/10 rounded-full blur-3xl animate-pulse" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl animate-pulse delay-1000" />
      </div>

      <div className="container mx-auto px-4 z-10">
        <GradientBackground className="max-w-3xl p-8 rounded-2xl backdrop-blur-sm">
          <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x">
            Discover Your Next Adventure
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed">
            Explore breathtaking destinations and create unforgettable memories
            with our expertly curated travel experiences.
          </p>
          <div className="flex flex-wrap gap-4">
            <Button
              variant="primary"
              size="lg"
              className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transform hover:scale-105 transition-all duration-300"
            >
              Explore Destinations
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transform hover:scale-105 transition-all duration-300"
            >
              View Special Offers
            </Button>
          </div>
        </GradientBackground>
      </div>
    </section>
  );
}
