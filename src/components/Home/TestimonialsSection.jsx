import SectionHeading from "../SectionHeading.jsx"
import TestimonialCard from "./TestimonialCard.jsx"
import { testimonials } from "../DummyData.js/Testimonials.js"

export default function TestimonialsSection() {
  return (
    <section className="py-20 bg-gray-900">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="What Our Travelers Say"
          subtitle="Don't just take our word for it – hear from travelers who have experienced our services firsthand."
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard key={testimonial.id} testimonial={testimonial} />
          ))}
        </div>
      </div>
    </section>
  )
}
