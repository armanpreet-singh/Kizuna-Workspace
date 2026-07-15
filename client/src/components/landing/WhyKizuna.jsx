import { Zap, Eye, ShieldCheck } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const WhyKizuna = () => {
  // Story-driven data structure pairing narrative with visual proof
  const pillars = [
    {
      id: "speed",
      icon: Zap,
      title: "Engineered for speed.",
      description:
        "Latency is the enemy of flow. We built Kizuna on a non-blocking architecture, ensuring messages appear the moment they are sent. No loading spinners, no delayed typing indicators. Just pure, instantaneous communication.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
          <div className="flex items-center justify-between mb-6">
            <span className="text-xs font-medium text-slate-400 uppercase tracking-wider">
              Network Status
            </span>
            <span className="flex items-center gap-1.5 text-xs text-emerald-400">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Connected
            </span>
          </div>
          <div className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
              <span className="text-sm text-slate-300">Message Delivery</span>
              <span className="text-sm font-mono text-emerald-400">12ms</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
              <span className="text-sm text-slate-300">State Sync</span>
              <span className="text-sm font-mono text-emerald-400">8ms</span>
            </div>
            <div className="flex items-center justify-between p-3 bg-slate-800/50 rounded-lg border border-slate-700/30">
              <span className="text-sm text-slate-300">File Upload</span>
              <span className="text-sm font-mono text-emerald-400">45ms</span>
            </div>
          </div>
          {/* Abstract SVG Graph */}
          <div className="mt-6 h-12 flex items-end gap-1 px-2">
            {[40, 20, 30, 10, 25, 15, 5, 10, 5, 8, 12, 5].map((h, i) => (
              <div
                key={i}
                className="flex-1 bg-indigo-500/30 rounded-t"
                style={{ height: `${h}%` }}
              ></div>
            ))}
          </div>
        </div>
      ),
    },
    {
      id: "focus",
      icon: Eye,
      title: "Designed for focus.",
      description:
        "Most chat apps demand your attention. Kizuna respects it. We stripped away the clutter—excessive toolbars, flashy animations, and visual noise—leaving only what matters: your team's words.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-2xl border border-slate-700/50 overflow-hidden shadow-2xl">
          <div className="h-10 bg-slate-800/50 border-b border-slate-700/50 flex items-center px-4">
            <span className="text-xs text-slate-500"># design-system</span>
          </div>
          <div className="p-6 space-y-4">
            <div className="flex gap-3">
              <div className="w-7 h-7 rounded-full bg-indigo-500/20 flex-shrink-0 flex items-center justify-center text-[10px] text-indigo-300 font-bold">
                SC
              </div>
              <div className="bg-slate-800/80 border border-slate-700/50 rounded-xl rounded-tl-sm px-3 py-2">
                <p className="text-sm text-slate-300">
                  Kept the spacing strict. No unnecessary borders.
                </p>
              </div>
            </div>
            <div className="flex gap-3 justify-end">
              <div className="bg-indigo-600/20 border border-indigo-500/20 rounded-xl rounded-tr-sm px-3 py-2">
                <p className="text-sm text-indigo-100">Perfect. Clean and readable.</p>
              </div>
            </div>
          </div>
          {/* Subtle "Focus Mode" indicator */}
          <div className="px-4 py-2 bg-slate-800/30 border-t border-slate-700/30 flex items-center gap-2">
            <Eye className="w-3 h-3 text-indigo-400" />
            <span className="text-[10px] text-slate-500 font-medium">
              Focus Mode Active — UI chrome hidden
            </span>
          </div>
        </div>
      ),
    },
    {
      id: "trust",
      icon: ShieldCheck,
      title: "Built on trust.",
      description:
        "Your conversations are proprietary. We implemented E2E encryption by default, open-source our client-side encryption protocols, and ensure your data is never monetized or sold.",
      visual: (
        <div className="w-full max-w-sm mx-auto bg-slate-900 rounded-2xl border border-slate-700/50 p-6 shadow-2xl">
          <div className="flex flex-col items-center text-center">
            <div className="w-16 h-16 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4">
              <ShieldCheck className="w-8 h-8 text-emerald-400" />
            </div>
            <h4 className="text-sm font-semibold text-white mb-1">End-to-End Encrypted</h4>
            <p className="text-xs text-slate-500 mb-6">Protocol v2.4.1 • Verified</p>

            <div className="w-full space-y-2">
              <div className="flex items-center justify-between p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/30">
                <span className="text-xs text-slate-400">Key Exchange</span>
                <span className="text-xs text-emerald-400 font-mono">X25519</span>
              </div>
              <div className="flex items-center justify-between p-2.5 bg-slate-800/50 rounded-lg border border-slate-700/30">
                <span className="text-xs text-slate-400">Cipher Suite</span>
                <span className="text-xs text-emerald-400 font-mono">AES-256-GCM</span>
              </div>
            </div>
          </div>
        </div>
      ),
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Philosophy"
          title="Why Kizuna exists"
          subtitle="We believe communication tools have become too complex. Kizuna is our answer: a return to clarity, speed, and respect for the user."
          align="center"
          className="mb-20 sm:mb-28"
        />

        {/* Storytelling Rows */}
        <div className="space-y-24 lg:space-y-32">
          {pillars.map((pillar, index) => {
            const Icon = pillar.icon;
            // Alternate layout: Even indexes are Text -> Visual, Odd are Visual -> Text
            const isReversed = index % 2 !== 0;

            return (
              <div
                key={pillar.id}
                className={`flex flex-col ${isReversed ? "lg:flex-row-reverse" : "lg:flex-row"} items-center gap-12 lg:gap-20`}
              >
                {/* Text Content */}
                <div className={`flex-1 max-w-lg ${isReversed ? "lg:text-left" : "lg:text-left"}`}>
                  <div className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-indigo-50 text-indigo-600 mb-6">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight leading-tight">
                    {pillar.title}
                  </h3>
                  <p className="mt-4 text-base text-slate-500 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>

                {/* Visual Proof */}
                <div
                  className={`flex-1 w-full ${isReversed ? "lg:flex lg:justify-start" : "lg:flex lg:justify-end"}`}
                >
                  {pillar.visual}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default WhyKizuna;
