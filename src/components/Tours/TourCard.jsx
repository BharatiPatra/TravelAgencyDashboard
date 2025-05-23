import { Star, Clock, Users, MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TourCard({ tour }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
      <div className="aspect-w-16 aspect-h-9">
        <img
          src={tour.image}
          alt={tour.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
        <div className="absolute top-4 right-4 bg-purple-500 text-white px-3 py-1 rounded-full text-sm font-medium">
          {tour.duration}
        </div>
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-xl font-semibold text-white">{tour.name}</h3>
          <div className="flex items-center text-yellow-400">
            <Star size={20} className="fill-current" />
            <span className="ml-1 text-white">{tour.rating}</span>
          </div>
        </div>

        <div className="flex items-center gap-4 mb-4 text-gray-400">
          <div className="flex items-center">
            <MapPin size={16} className="mr-1" />
            <span>{tour.location}</span>
          </div>
          <div className="flex items-center">
            <Users size={16} className="mr-1" />
            <span>{tour.groupSize}</span>
          </div>
          <div className="flex items-center">
            <Clock size={16} className="mr-1" />
            <span>{tour.duration}</span>
          </div>
        </div>

        <p className="text-gray-400 mb-4">{tour.description}</p>

        <div className="flex items-center justify-between">
          <div>
            <span className="text-purple-400 font-semibold">
              From ${tour.price}
            </span>
            <p className="text-sm text-gray-500">per person</p>
          </div>
          <Button variant="primary">Book Now</Button>
        </div>
      </div>
    </div>
  );
}
