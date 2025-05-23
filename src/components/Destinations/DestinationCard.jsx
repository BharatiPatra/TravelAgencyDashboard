import { Star } from "lucide-react";
import { Button } from "@/components/ui/button";

export function DestinationCard({ destination }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={destination.image}
          alt={destination.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">
            {destination.name}
          </h3>
          <div className="flex items-center text-yellow-400">
            <Star size={20} className="fill-current" />
            <span className="ml-1 text-white">{destination.rating}</span>
          </div>
        </div>
        <p className="text-gray-400 mb-4">{destination.description}</p>
        <div className="flex items-center justify-between">
          <span className="text-purple-400 font-semibold">
            From ${destination.price}
          </span>
          <Button variant="primary">Explore</Button>
        </div>
      </div>
    </div>
  );
}
