export function CategoryFilter({
  categories,
  selectedCategory,
  onCategorySelect,
}) {
  return (
    <div className="flex flex-wrap gap-4 mb-8">
      {categories.map((category) => (
        <button
          key={category}
          onClick={() => onCategorySelect(category)}
          className={`px-6 py-2 rounded-full transition-all duration-300 ${
            selectedCategory === category
              ? "bg-purple-500 text-white"
              : "bg-gray-800 text-gray-400 hover:bg-gray-700"
          }`}
        >
          {category}
        </button>
      ))}
    </div>
  );
}
