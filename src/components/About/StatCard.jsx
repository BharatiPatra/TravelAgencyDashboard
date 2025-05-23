export function StatCard({ stat }) {
  return (
    <div className="bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 rounded-2xl p-6 text-center">
      <div className="text-4xl font-bold text-purple-400 mb-2">
        {stat.value}
      </div>
      <p className="text-gray-400">{stat.label}</p>
    </div>
  );
}
