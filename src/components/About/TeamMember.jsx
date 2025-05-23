import { Linkedin, Twitter, Instagram } from "lucide-react";

export function TeamMember({ member }) {
  return (
    <div className="group relative overflow-hidden rounded-2xl bg-gray-800/50 backdrop-blur-sm border border-purple-500/20 hover:border-purple-500/40 transition-all duration-300">
      <div className="aspect-square">
        <img
          src={member.image}
          alt={member.name}
          className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-white mb-1">{member.name}</h3>
        <p className="text-purple-400 mb-4">{member.position}</p>
        <p className="text-gray-400 mb-6">{member.bio}</p>

        <div className="flex items-center gap-4">
          <a
            href={member.social.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Linkedin size={20} />
          </a>
          <a
            href={member.social.twitter}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Twitter size={20} />
          </a>
          <a
            href={member.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-purple-400 transition-colors"
          >
            <Instagram size={20} />
          </a>
        </div>
      </div>
    </div>
  );
}
