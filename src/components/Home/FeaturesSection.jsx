import { Clock, Shield, MapPin, HeadsetIcon as HeadsetMic } from "lucide-react"
import SectionHeading from "../SectionHeading"
import FeatureCard from "@/components/Home/FeatureCard"

const features = [
  {
    id: 1,
    title: "24/7 Support",
    description: "Our dedicated team is available around the clock to assist you with any questions or concerns.",
    icon: Clock,
  },
  {
    id: 2,
    title: "Best Price Guarantee",
    description: "We promise the best rates and will match any lower price you find elsewhere.",
    icon: Shield,
  },
  {
    id: 3,
    title: "Handpicked Tours",
    description: "Our experts personally select and verify each destination and experience for quality.",
    icon: MapPin,
  },
  {
    id: 4,
    title: "Personalized Service",
    description: "We tailor each trip to your preferences, ensuring a unique and memorable experience.",
    icon: HeadsetMic,
  },
]

export default function FeaturesSection() {
  return (
    <section className="py-20 bg-gray-800">
      <div className="container mx-auto px-4">
        <SectionHeading
          title="Why Choose Us"
          subtitle="We're dedicated to making your travel experiences exceptional with our premium services and attention to detail."
        />

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature) => (
            <FeatureCard key={feature.id} feature={feature} />
          ))}
        </div>
      </div>
    </section>
  )
}
