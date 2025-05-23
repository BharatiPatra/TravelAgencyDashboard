import { Star, MapPin } from "lucide-react";
import { GradientBackground } from "../GradientBackground";

export default function DestinationCard({ destination }) {
  const { name, region, image, price, rating, reviewCount, description } =
    destination;

  return (
    <GradientBackground className="group overflow-hidden hover:shadow-xl hover:shadow-purple-900/20 transition-all duration-300">
      <div className="relative h-64 overflow-hidden">
        <img
          src={image || "/placeholder.svg"}
          alt={name}
          className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/50 to-transparent"></div>
        <div className="absolute bottom-4 left-4">
          <div className="flex items-center text-yellow-400 mb-1">
            {[...Array(5)].map((_, i) => (
              <Star
                key={i}
                size={16}
                className={`${i < rating ? "fill-yellow-400" : ""}`}
              />
            ))}
            <span className="ml-1 text-white text-sm">({reviewCount})</span>
          </div>
        </div>
      </div>
      <div className="p-6">
        <div className="flex justify-between items-start mb-2">
          <h3 className="text-xl font-bold bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
            {name}
          </h3>
          <div className="text-purple-400 font-bold">${price}</div>
        </div>
        <div className="flex items-center text-gray-400 mb-4">
          <MapPin size={16} className="mr-1" />
          <span className="text-sm">{region}</span>
        </div>
        <p className="text-gray-400 mb-4">{description}</p>
        <button className="w-full bg-gradient-to-r from-purple-600 to-purple-500 hover:from-purple-500 hover:to-purple-400 text-white py-2 rounded-lg transition-all duration-300 transform hover:scale-[1.02]">
          View Details
        </button>
      </div>
    </GradientBackground>
  );
}
