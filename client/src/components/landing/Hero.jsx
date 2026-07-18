import { ArrowRight, Zap, Users, MessageSquare } from "lucide-react";
import Button from "../ui/Button";

import FadeIn from "../ui/FadeIn";
const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-50 via-white to-violet-50/30 dark:from-gray-950 dark:via-gray-950 dark:to-violet-950/20" />

      {/* Grid pattern */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.07]"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(to right, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      {/* Gradient orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-0 w-[300px] h-[300px] bg-violet-300/10 dark:bg-violet-700/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 text-center">
        {/* Eyebrow badge */}
        <FadeIn delay={100}>
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white dark:bg-white/5 border border-gray-200 dark:border-white/10 shadow-sm mb-8">
            <span className="flex h-2 w-2 relative">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-violet-400 opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-violet-500" />
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">
              Now in public beta —{" "}
              <span className="text-violet-600 dark:text-violet-400 font-medium">
                join 10,000+ teams
              </span>
            </span>
          </div>
        </FadeIn>

        {/* Headline */}
        <FadeIn delay={200}>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold tracking-tight leading-[1.05] text-gray-900 dark:text-white">
            Where great
            <br />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-violet-600 via-purple-600 to-indigo-600 dark:from-violet-400 dark:via-purple-400 dark:to-indigo-400 bg-clip-text text-transparent">
                teams connect
              </span>
              <span className="absolute -bottom-2 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
            </span>
          </h1>
        </FadeIn>

        {/* Subheadline */}
        <FadeIn delay={350}>
          <p className="mt-8 text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Kizuna brings your team together with real-time messaging, organized workspaces, and
            powerful collaboration tools — built for the way modern teams work.
          </p>
        </FadeIn>

        {/* CTA buttons */}
        <FadeIn delay={500}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" className="w-full sm:w-auto">
              Start for free
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="lg" className="w-full sm:w-auto">
              See how it works
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-500 dark:text-gray-500">
            No credit card required · Free up to 10 members
          </p>
        </FadeIn>

        {/* Social proof mini stats */}
        <FadeIn delay={650}>
          <div className="mt-16 flex flex-wrap items-center justify-center gap-8">
            {[
              { icon: Users, label: "10,000+ teams", color: "text-violet-500" },
              {
                icon: MessageSquare,
                label: "2M+ messages daily",
                color: "text-indigo-500",
              },
              { icon: Zap, label: "99.9% uptime SLA", color: "text-purple-500" },
            ].map(({ icon: Icon, label, color }) => (
              <div
                key={label}
                className="flex items-center gap-2 text-sm text-gray-600 dark:text-gray-400"
              >
                <Icon size={16} className={color} />
                <span>{label}</span>
              </div>
            ))}
          </div>
        </FadeIn>

        {/* Hero visual */}
        <FadeIn delay={800} direction="up">
          <div className="mt-20 relative mx-auto max-w-5xl">
            {/* Glow effect behind preview */}
            <div className="absolute -inset-4 bg-gradient-to-t from-violet-500/20 to-transparent rounded-3xl blur-2xl" />

            {/* Mock UI preview */}
            <div className="relative rounded-2xl overflow-hidden border border-gray-200 dark:border-white/10 shadow-2xl shadow-gray-900/10 dark:shadow-black/40 bg-white dark:bg-gray-900">
              {/* Window chrome */}
              <div className="flex items-center gap-2 px-4 py-3 bg-gray-100 dark:bg-gray-800 border-b border-gray-200 dark:border-white/10">
                <div className="flex gap-1.5">
                  <div className="w-3 h-3 rounded-full bg-red-400" />
                  <div className="w-3 h-3 rounded-full bg-yellow-400" />
                  <div className="w-3 h-3 rounded-full bg-green-400" />
                </div>
                <div className="flex-1 mx-4">
                  <div className="mx-auto w-48 h-5 bg-gray-200 dark:bg-gray-700 rounded-md flex items-center justify-center">
                    <span className="text-xs text-gray-500 dark:text-gray-400">app.kizuna.io</span>
                  </div>
                </div>
              </div>

              {/* App preview content */}
              <div className="flex h-[340px] md:h-[420px]">
                {/* Sidebar */}
                <div className="hidden sm:flex flex-col w-56 bg-gray-900 dark:bg-gray-950 border-r border-white/5 p-3">
                  <div className="flex items-center gap-2 px-2 py-2 mb-4">
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-500 to-indigo-600 flex items-center justify-center">
                      <span className="text-white text-xs font-bold">K</span>
                    </div>
                    <span className="text-white text-sm font-semibold">Acme Corp</span>
                  </div>

                  <div className="space-y-0.5">
                    {["# general", "# design", "# engineering", "# product"].map((ch, i) => (
                      <div
                        key={ch}
                        className={`px-2 py-1.5 rounded-md text-xs cursor-pointer transition-colors ${
                          i === 0
                            ? "bg-white/10 text-white"
                            : "text-gray-400 hover:text-gray-300 hover:bg-white/5"
                        }`}
                      >
                        {ch}
                      </div>
                    ))}
                  </div>

                  <div className="mt-4 pt-4 border-t border-white/10 space-y-0.5">
                    <div className="px-2 py-1 text-xs font-semibold text-gray-500 uppercase tracking-wider">
                      Direct Messages
                    </div>
                    {[
                      { name: "Sarah K.", online: true },
                      { name: "Marcus L.", online: true },
                      { name: "Priya R.", online: false },
                    ].map(({ name, online }) => (
                      <div
                        key={name}
                        className="flex items-center gap-2 px-2 py-1.5 rounded-md text-xs text-gray-400 hover:text-gray-300 hover:bg-white/5 cursor-pointer"
                      >
                        <div className="relative">
                          <div className="w-4 h-4 rounded-full bg-gradient-to-br from-violet-400 to-indigo-500" />
                          <div
                            className={`absolute -bottom-0.5 -right-0.5 w-2 h-2 rounded-full border border-gray-900 ${
                              online ? "bg-emerald-400" : "bg-gray-600"
                            }`}
                          />
                        </div>
                        {name}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Main chat */}
                <div className="flex-1 flex flex-col">
                  {/* Channel header */}
                  <div className="flex items-center gap-3 px-4 py-3 border-b border-gray-100 dark:border-white/5">
                    <span className="text-sm font-semibold text-gray-900 dark:text-white">
                      # general
                    </span>
                    <span className="text-xs text-gray-400">·</span>
                    <span className="text-xs text-gray-500 dark:text-gray-400">
                      Team announcements and general discussion
                    </span>
                  </div>

                  {/* Messages */}
                  <div className="flex-1 overflow-hidden px-4 py-4 space-y-4">
                    {[
                      {
                        name: "Sarah K.",
                        avatar: "from-pink-400 to-rose-500",
                        time: "10:32 AM",
                        msg: "Hey team 👋 Just pushed the new design tokens to Figma. Ready for review!",
                      },
                      {
                        name: "Marcus L.",
                        avatar: "from-blue-400 to-indigo-500",
                        time: "10:34 AM",
                        msg: "Looks great! The new color palette is 🔥 Implementing it in the component library now.",
                      },
                      {
                        name: "Priya R.",
                        avatar: "from-violet-400 to-purple-500",
                        time: "10:35 AM",
                        msg: "Love the direction. Can we schedule a quick sync this afternoon to align on the typography scale?",
                      },
                    ].map((msg) => (
                      <div key={msg.name} className="flex gap-3">
                        <div
                          className={`w-8 h-8 rounded-lg bg-gradient-to-br ${msg.avatar} flex-shrink-0 flex items-center justify-center`}
                        >
                          <span className="text-white text-xs font-bold">{msg.name[0]}</span>
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-baseline gap-2 mb-1">
                            <span className="text-sm font-semibold text-gray-900 dark:text-white">
                              {msg.name}
                            </span>
                            <span className="text-xs text-gray-400">{msg.time}</span>
                          </div>
                          <p className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed">
                            {msg.msg}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Input */}
                  <div className="px-4 pb-4">
                    <div className="flex items-center gap-3 px-4 py-2.5 bg-gray-100 dark:bg-white/5 rounded-xl border border-gray-200 dark:border-white/10">
                      <span className="flex-1 text-sm text-gray-400 dark:text-gray-500">
                        Message #general
                      </span>
                      <div className="flex items-center gap-2 text-gray-400">
                        <div className="w-4 h-4 rounded bg-gray-300 dark:bg-white/20" />
                        <div className="w-4 h-4 rounded bg-gray-300 dark:bg-white/20" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
};

export default Hero;
