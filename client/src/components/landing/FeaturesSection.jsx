import {
  MessageSquare,
  Hash,
  Users,
  Paperclip,
  ShieldCheck,
  Bell,
  Search,
  Radio,
} from "lucide-react";
import SectionHeading from "../ui/SectionHeading";
import FeatureCard from "./FeatureCard";

const FeaturesSection = () => {
  // Feature data structured for easy content management
  const features = [
    {
      icon: MessageSquare,
      title: "Real-Time Messaging",
      description:
        "Instant delivery with sub-100ms latency. Messages appear the moment they are typed.",
    },
    {
      icon: Hash,
      title: "Organized Channels",
      description:
        "Dedicated spaces for teams, projects, and topics to keep conversations structured.",
    },
    {
      icon: Users,
      title: "Group Chat",
      description: "Seamless private and group messaging tailored for both small and large teams.",
    },
    {
      icon: Paperclip,
      title: "File Sharing",
      description: "Drag, drop, and share documents, images, and videos without size limitations.",
    },
    {
      icon: ShieldCheck,
      title: "Secure Auth",
      description:
        "Enterprise-grade security with end-to-end encryption and advanced access controls.",
    },
    {
      icon: Bell,
      title: "Smart Notifications",
      description:
        "Intelligent alert system that respects your focus time and highlights what matters.",
    },
    {
      icon: Search,
      title: "Universal Search",
      description: "Find any message, file, or user across your entire workspace in milliseconds.",
    },
    {
      icon: Radio,
      title: "User Presence",
      description: "See who is online, idle, or in a call without interrupting their workflow.",
    },
  ];

  return (
    <section id="features" className="py-20 sm:py-32 bg-slate-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Features"
          title="Everything you need to collaborate"
          subtitle="Kizuna combines the speed of real-time chat with the organizational power of a modern workspace, without the clutter."
          align="center"
          className="mb-16"
        />

        {/* Features Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature) => (
            <FeatureCard
              key={feature.title}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;
