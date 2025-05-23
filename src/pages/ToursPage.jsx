import { useState } from "react";
import SectionHeading from "@/components/SectionHeading";
import { TourCard } from "@/components/Tours/TourCard";
import { TourFilter } from "@/components/Tours/TourFilter";
import { GradientBackground } from "@/components/GradientBackground";

// Mock data for tours
const tours = [
  {
    id: 1,
    name: "Bali Adventure Tour",
    image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4",
    rating: 4.8,
    reviews: 2341,
    price: 1299,
    duration: "7 Days",
    location: "Bali, Indonesia",
    groupSize: "Max 12",
    description:
      "Experience the perfect blend of culture, beaches, and luxury in Bali.",
    category: "Adventure",
  },
  {
    id: 2,
    name: "Paris City Explorer",
    image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34",
    rating: 4.9,
    reviews: 3456,
    price: 1499,
    duration: "5 Days",
    location: "Paris, France",
    groupSize: "Max 8",
    description: "The city of love, art, and endless possibilities.",
    category: "Cultural",
  },
  {
    id: 3,
    name: "Santorini Sunset Tour",
    image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff",
    rating: 4.7,
    reviews: 1892,
    price: 1699,
    duration: "4 Days",
    location: "Santorini, Greece",
    groupSize: "Max 10",
    description:
      "Stunning sunsets and white-washed buildings overlooking the Aegean Sea.",
    category: "Luxury",
  },
  // Add more tours as needed
];

export default function ToursPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDuration, setSelectedDuration] = useState("All");
  const [selectedPriceRange, setSelectedPriceRange] = useState("All");
  const [selectedGroupSize, setSelectedGroupSize] = useState("All");

  const filteredTours = tours.filter((tour) => {
    const matchesSearch = tour.name
      .toLowerCase()
      .includes(searchQuery.toLowerCase());
    const matchesDuration =
      selectedDuration === "All" ||
      tour.duration.includes(selectedDuration.split(" ")[0]);
    const matchesPrice =
      selectedPriceRange === "All" ||
      checkPriceRange(tour.price, selectedPriceRange);
    const matchesGroupSize =
      selectedGroupSize === "All" ||
      checkGroupSize(tour.groupSize, selectedGroupSize);

    return matchesSearch && matchesDuration && matchesPrice && matchesGroupSize;
  });

  function checkPriceRange(price, range) {
    switch (range) {
      case "Under $500":
        return price < 500;
      case "$500-$1000":
        return price >= 500 && price <= 1000;
      case "$1000-$2000":
        return price > 1000 && price <= 2000;
      case "$2000+":
        return price > 2000;
      default:
        return true;
    }
  }

  function checkGroupSize(groupSize, selectedSize) {
    const maxSize = parseInt(groupSize.split(" ")[1]);
    const selectedMax = parseInt(
      selectedSize.split("-")[1] || selectedSize.split("+")[0]
    );

    if (selectedSize.includes("+")) {
      return maxSize >= selectedMax;
    }
    return maxSize <= selectedMax;
  }

  return (
    <div className="min-h-screen bg-gray-900">
      {/* Hero Section */}
      <section className="relative h-[40vh] flex items-center justify-center overflow-hidden">
        <GradientBackground />
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10 text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            Discover Amazing Tours
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Choose from our carefully curated selection of tours around the
            world
          </p>
        </div>
      </section>

      {/* Tours Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <SectionHeading
            title="Available Tours"
            subtitle="Find the perfect tour for your next adventure"
          />

          {/* Filters */}
          <div className="mb-12">
            <TourFilter
              searchQuery={searchQuery}
              onSearchChange={setSearchQuery}
              selectedDuration={selectedDuration}
              onDurationChange={setSelectedDuration}
              selectedPriceRange={selectedPriceRange}
              onPriceRangeChange={setSelectedPriceRange}
              selectedGroupSize={selectedGroupSize}
              onGroupSizeChange={setSelectedGroupSize}
            />
          </div>

          {/* Tours Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTours.map((tour) => (
              <TourCard key={tour.id} tour={tour} />
            ))}
          </div>

          {/* No Results Message */}
          {filteredTours.length === 0 && (
            <div className="text-center py-12">
              <p className="text-xl text-gray-400">
                No tours found matching your criteria. Try adjusting your
                filters.
              </p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
}
