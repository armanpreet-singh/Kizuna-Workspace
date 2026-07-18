import { MessageSquare, Users, Hash, Bell, Paperclip, Zap, GitBranch, Shield } from "lucide-react";
import FeatureCard from "./FeatureCard";
import SectionHeading from "../ui/SectionHeading";
import RevealOnScroll from "../ui/RevealOnScroll";

const features = [
  {
    icon: MessageSquare,
    title: "Real-time Messaging",
    description:
      "Instant, low-latency messaging powered by WebSockets. Every message delivered in milliseconds.",
    gradient: "from-violet-500 to-purple-600",
  },
  {
    icon: Users,
    title: "Teams & Workspaces",
    description:
      "Organize your company into workspaces and teams. Keep every conversation where it belongs.",
    gradient: "from-blue-500 to-indigo-600",
  },
  {
    icon: Hash,
    title: "Channels",
    description:
      "Public and private channels for every project, topic, or team. Stay focused and organized.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: GitBranch,
    title: "Threaded Conversations",
    description:
      "Reply in threads to keep discussions organized without cluttering your main channels.",
    gradient: "from-orange-500 to-red-500",
  },
  {
    icon: Bell,
    title: "Smart Notifications",
    description:
      "Intelligent notification system that knows when to surface important messages and when to stay quiet.",
    gradient: "from-pink-500 to-rose-600",
  },
  {
    icon: Paperclip,
    title: "File Sharing",
    description:
      "Share images, documents, and files instantly. Preview inline without leaving the conversation.",
    gradient: "from-amber-500 to-orange-600",
  },
  {
    icon: Zap,
    title: "Presence Indicators",
    description:
      "Always know who is online, away, or in focus mode. Respect your team's time and attention.",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    icon: Shield,
    title: "Enterprise Security",
    description:
      "End-to-end encryption, SSO, SAML, audit logs, and compliance tools built for modern enterprises.",
    gradient: "from-violet-600 to-indigo-700",
  },
];

const FeaturesSection = () => {
  return (
    <section id="features" className="py-24 md:py-32 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <RevealOnScroll direction="up">
          <SectionHeading
            eyebrow="Features"
            title="Everything your team needs"
            description="Kizuna combines powerful communication tools with the simplicity your team deserves. No bloat, no complexity."
            centered
          />
        </RevealOnScroll>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {features.map((feature, i) => (
            <RevealOnScroll key={feature.title} delay={i * 60} direction="up">
              <FeatureCard {...feature} />
            </RevealOnScroll>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
