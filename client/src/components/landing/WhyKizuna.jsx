
import SectionHeading from "../ui/SectionHeading";

const WhyKizuna = () => {
  // Philosophy points structured to convey product values
  const philosophies = [
    {
      id: "01",
      title: "Speed is a Feature",
      description:
        "We believe latency kills productivity. Kizuna is optimized from the database to the DOM to feel instantaneous.",
    },
    {
      id: "02",
      title: "Security by Default",
      description:
        "Enterprise-grade encryption and compliance aren't premium add-ons. They are the foundation of every message sent.",
    },
    {
      id: "03",
      title: "Modern Interface",
      description:
        "Cluttered toolbars and flashy animations are distractions. We embrace minimalism to let your work take center stage.",
    },
    {
      id: "04",
      title: "Designed for Flow",
      description:
        "Keyboard-first navigation, intuitive shortcuts, and smart threading keep you in your flow state, not hunting for UI.",
    },
    {
      id: "05",
      title: "Seamless Collaboration",
      description:
        "Communication should break down silos, not build them. Channels, DMs, and files live in one unified context.",
    },
    {
      id: "06",
      title: "Uncompromising Reliability",
      description:
        "Your team's history is sacred. Our infrastructure guarantees 99.99% uptime so your conversations are always there.",
    },
  ];

  return (
    <section id="about" className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Philosophy"
          title="Why Kizuna?"
          subtitle="We didn't want to build another chat app. We wanted to build the chat app we always wished we had."
          align="center"
          className="mb-16 sm:mb-20"
        />

        {/* Philosophy Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-12 gap-y-12 lg:gap-y-16">
          {philosophies.map((point) => (
            <div key={point.id} className="group">
              {/* Large, subtle index number for editorial aesthetic */}
              <span className="block text-5xl font-bold text-slate-200 group-hover:text-indigo-600 transition-colors duration-300 leading-none">
                {point.id}
              </span>

              {/* Philosophy Title */}
              <h3 className="mt-3 text-lg font-semibold text-slate-900 tracking-tight">
                {point.title}
              </h3>

              {/* Philosophy Description */}
              <p className="mt-2 text-sm text-slate-500 leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyKizuna;
