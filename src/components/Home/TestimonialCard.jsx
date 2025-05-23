import { Star } from "lucide-react";
import { GradientBackground } from "../GradientBackground";

export default function TestimonialCard({ testimonial }) {
  const { name, text, rating, tourName } = testimonial;

  return (
    <GradientBackground className="p-8 rounded-xl relative group">
      <div className="flex items-center text-yellow-400 mb-4">
        {[...Array(5)].map((_, i) => (
          <Star
            key={i}
            size={20}
            className={`${i < rating ? "fill-yellow-400" : ""}`}
          />
        ))}
      </div>
      <p className="text-gray-300 mb-6 italic group-hover:text-gray-200 transition-colors">
        "{text}"
      </p>
      <div className="flex items-center">
        <div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-500/20 to-purple-600/10 mr-4 flex items-center justify-center">
          <span className="text-xl font-bold text-purple-400">
            {name.charAt(0)}
          </span>
        </div>
        <div>
          <h4 className="font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {name}
          </h4>
          <p className="text-gray-400 text-sm group-hover:text-gray-300 transition-colors">
            {tourName}
          </p>
        </div>
      </div>
    </GradientBackground>
  );
}
