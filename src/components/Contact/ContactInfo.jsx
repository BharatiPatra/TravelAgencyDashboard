import { MapPin, Phone, Mail, Clock } from "lucide-react";

export function ContactInfo() {
  const contactDetails = [
    {
      icon: MapPin,
      title: "Our Location",
      details: ["123 Travel Street", "New York, NY 10001", "United States"],
    },
    {
      icon: Phone,
      title: "Phone Number",
      details: ["+1 (555) 123-4567", "+1 (555) 987-6543"],
    },
    {
      icon: Mail,
      title: "Email Address",
      details: ["info@wanderlust.com", "support@wanderlust.com"],
    },
    {
      icon: Clock,
      title: "Working Hours",
      details: [
        "Monday - Friday: 9:00 AM - 6:00 PM",
        "Saturday: 10:00 AM - 4:00 PM",
        "Sunday: Closed",
      ],
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
      {contactDetails.map((item, index) => (
        <div
          key={index}
          className="p-6 rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300"
        >
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-lg bg-purple-500/10 text-purple-400">
              <item.icon size={24} />
            </div>
            <div>
              <h3 className="text-lg font-semibold text-white mb-2">
                {item.title}
              </h3>
              <div className="space-y-1">
                {item.details.map((detail, idx) => (
                  <p key={idx} className="text-gray-400">
                    {detail}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
