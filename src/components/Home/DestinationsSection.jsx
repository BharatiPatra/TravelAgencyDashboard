import { ChevronRight } from "lucide-react"
import SectionHeading from "../SectionHeading"
import DestinationCard from "./DestinationCard"
import {Button} from "@/components/ui/button"
import { destinations } from "../DummyData.js/Destinations"

export default function DestinationsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Popular Destinations"
          subtitle="Discover our most sought-after destinations, handpicked for unforgettable experiences and breathtaking views."
        />

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {destinations.map((destination) => (
            <DestinationCard key={destination.id} destination={destination} />
          ))}
        </div>

        <div className="text-center mt-12">
          <Button variant="outline" size="lg" className="inline-flex items-center border-purple-500 text-purple-400">
            View All Destinations
            <ChevronRight size={20} className="ml-2" />
          </Button>
        </div>
      </div>
    </section>
  )
}
