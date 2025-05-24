import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { HeroSection } from "@/components/Destinations/HeroSection";
import { DestinationCard } from "@/components/Destinations/DestinationCard";
import { CategoryFilter } from "@/components/Destinations/CategoryFilter";
import { NewsletterSection } from "@/components/Destinations/NewsletterSection";

// Mock data for destinations
const destinations = [
  {
    id: 1,
    name: "Bali, Indonesia",
    image: "bali.jpg",
    rating: 4.8,
    reviews: 2341,
    price: 1299,
    category: "Beach",
    description:
      "Experience the perfect blend of culture, beaches, and luxury in Bali.",
  },
  {
    id: 2,
    name: "Paris, France",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rating: 4.9,
    reviews: 3456,
    price: 1499,
    category: "City",
    description: "The city of love, art, and endless possibilities.",
  },
  {
    id: 3,
    name: "Santorini, Greece",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    rating: 4.7,
    reviews: 1892,
    price: 1699,
    category: "Island",
    description:
      "Stunning sunsets and white-washed buildings overlooking the Aegean Sea.",
  },
  // Add more destinations as needed
];

const categories = ["All", "Beach", "City", "Mountain", "Island", "Cultural"];

export default function DestinationsPage() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const filteredDestinations = destinations.filter((destination) => {
    const matchesCategory =
      selectedCategory === "All" || destination.category === selectedCategory;
    const matchesSearch = destination.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="min-h-screen bg-gray-900">
      <HeroSection searchQuery={searchQuery} onSearchChange={setSearchQuery} />

      {/* Featured Destinations */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Featured Destinations"
            subtitle="Our most popular destinations that travelers love"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {filteredDestinations.slice(0, 3).map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      {/* All Destinations */}
      <section className="py-20 bg-gray-900/50">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="All Destinations"
            subtitle="Browse through our complete collection of destinations"
          />

          <CategoryFilter
            categories={categories}
            selectedCategory={selectedCategory}
            onCategorySelect={setSelectedCategory}
          />

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredDestinations.map((destination) => (
              <DestinationCard key={destination.id} destination={destination} />
            ))}
          </div>
        </div>
      </section>

      <NewsletterSection />
    </div>
  );
}
