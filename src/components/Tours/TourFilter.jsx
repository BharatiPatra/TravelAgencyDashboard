import { Search, SlidersHorizontal } from "lucide-react";
import { Button } from "@/components/ui/button";

export function TourFilter({
  searchQuery,
  onSearchChange,
  selectedDuration,
  onDurationChange,
  selectedPriceRange,
  onPriceRangeChange,
  selectedGroupSize,
  onGroupSizeChange,
}) {
  const durations = ["All", "1-3 Days", "4-7 Days", "8-14 Days", "15+ Days"];
  const priceRanges = [
    "All",
    "Under $500",
    "$500-$1000",
    "$1000-$2000",
    "$2000+",
  ];
  const groupSizes = ["All", "1-4", "5-8", "9-12", "13+"];

  return (
    <div className="space-y-6">
      {/* Search Bar */}
      <div className="relative">
        <input
          type="text"
          placeholder="Search tours..."
          className="w-full px-6 py-4 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-purple-500/20 focus:outline-none focus:border-purple-500"
          value={searchQuery}
          onChange={(e) => onSearchChange(e.target.value)}
        />
        <Search className="absolute right-6 top-1/2 transform -translate-y-1/2 text-gray-400" />
      </div>

      {/* Filters */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        {/* Duration Filter */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Duration</label>
          <div className="flex flex-wrap gap-2">
            {durations.map((duration) => (
              <button
                key={duration}
                onClick={() => onDurationChange(duration)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  selectedDuration === duration
                    ? "bg-purple-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {duration}
              </button>
            ))}
          </div>
        </div>

        {/* Price Range Filter */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Price Range</label>
          <div className="flex flex-wrap gap-2">
            {priceRanges.map((range) => (
              <button
                key={range}
                onClick={() => onPriceRangeChange(range)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  selectedPriceRange === range
                    ? "bg-purple-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {range}
              </button>
            ))}
          </div>
        </div>

        {/* Group Size Filter */}
        <div className="space-y-2">
          <label className="text-sm text-gray-400">Group Size</label>
          <div className="flex flex-wrap gap-2">
            {groupSizes.map((size) => (
              <button
                key={size}
                onClick={() => onGroupSizeChange(size)}
                className={`px-3 py-1 rounded-full text-sm transition-all duration-300 ${
                  selectedGroupSize === size
                    ? "bg-purple-500 text-white"
                    : "bg-gray-800 text-gray-400 hover:bg-gray-700"
                }`}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
