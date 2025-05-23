import {Button} from "@/components/ui/button"

export default function CallToAction() {
  return (
    <section className="py-20 bg-gradient-to-r from-purple-900 to-indigo-900">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">
          Ready for Your Next Adventure?
        </h2>
        <p className="text-gray-200 max-w-2xl mx-auto mb-8">
          Join thousands of satisfied travelers who have experienced the world
          with WanderLust. Your dream vacation is just a click away.
        </p>
        <Button variant="secondary" size="lg">
          Start Planning Your Trip
        </Button>
      </div>
    </section>
  );
}
