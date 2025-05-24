import { Button } from "@/components/ui/button";
import { GradientBackground } from "../GradientBackground";
import { motion } from "framer-motion";

export default function HeroSection() {
  return (
    <section
      className="relative h-[90vh] flex items-center overflow-hidden"
      aria-label="Hero section"
    >
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover"
      >
        <source src="/main.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <div className="container mx-auto px-4 z-10">
        <GradientBackground className="max-w-3xl p-8 rounded-2xl backdrop-blur-sm">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <h1 className="text-4xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white via-purple-200 to-white bg-clip-text text-transparent animate-gradient-x">
              Discover Your Next Adventure
            </h1>
            <p className="text-xl text-gray-200 mb-8 leading-relaxed">
              Explore breathtaking destinations and create unforgettable
              memories with our expertly curated travel experiences.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button
                variant="primary"
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 transform hover:scale-105 transition-all duration-300"
                aria-label="Explore our destinations"
              >
                Explore Destinations
              </Button>
              <Button
                variant="outline"
                size="lg"
                className="border-purple-500/50 text-purple-400 hover:bg-purple-500/10 hover:border-purple-400 transform hover:scale-105 transition-all duration-300"
                aria-label="View special travel offers"
              >
                View Special Offers
              </Button>
            </div>
          </motion.div>
        </GradientBackground>
      </div>
    </section>
  );
}
