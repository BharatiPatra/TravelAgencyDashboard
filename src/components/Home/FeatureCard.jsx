import { Star } from "lucide-react";
import { GradientBackground } from "../GradientBackground";

export default function FeatureCard({ feature }) {
  const { title, description } = feature;

  return (
    <GradientBackground className="group p-8 rounded-2xl text-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-900 to-gray-800" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_120%,rgba(120,119,198,0.3),rgba(255,255,255,0))]" />
      <div className="absolute inset-0 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

      {/* Animated border gradient */}
      <div className="absolute inset-0 rounded-2xl p-[1px] bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
        <div className="absolute inset-0 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0 animate-gradient-x" />
      </div>

      {/* Content */}
      <div className="relative">
        <div className="bg-gradient-to-br from-purple-500/20 to-purple-600/10 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 transform group-hover:scale-110 transition-transform duration-300 shadow-lg shadow-purple-500/10">
          <Star
            size={32}
            className="text-purple-400 group-hover:text-purple-300 transition-colors"
          />
        </div>
        <h3 className="text-xl font-bold mb-3 bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          {title}
        </h3>
        <p className="text-gray-400 group-hover:text-gray-300 transition-colors">
          {description}
        </p>
      </div>
    </GradientBackground>
  );
}
