import { Button } from "@/components/ui/button";

export function NewsletterSection() {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-white mb-4">
            Stay Updated with New Destinations
          </h2>
          <p className="text-gray-400 mb-8">
            Subscribe to our newsletter to receive updates on new destinations
            and exclusive offers.
          </p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-6 py-3 rounded-full bg-gray-800 text-white placeholder-gray-400 border border-purple-500/20 focus:outline-none focus:border-purple-500"
            />
            <Button variant="primary" className="px-8">
              Subscribe
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
