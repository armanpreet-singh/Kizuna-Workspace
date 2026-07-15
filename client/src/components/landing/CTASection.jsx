
import { ArrowRight } from "lucide-react";
import Button from "../ui/Button";

const CTASection = () => {
  return (
    <section className="relative py-24 sm:py-32 bg-slate-900 overflow-hidden">
      {/* Technical Dot-Grid Background Pattern */}
      <div
        className="absolute inset-0 opacity-[0.15]"
        style={{
          backgroundImage: "radial-gradient(circle, #ffffff 1px, transparent 1px)",
          backgroundSize: "24px 24px",
        }}
        aria-hidden="true"
      />

      {/* Subtle Center Glow for depth */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[400px] bg-indigo-600/20 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Headline */}
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white tracking-tight leading-tight">
          Stop fighting your tools.
          <br className="hidden sm:block" /> Start building together.
        </h2>

        {/* Supporting Description */}
        <p className="mt-6 text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          Migrate your team in minutes. Kizuna's import tool seamlessly pulls your channels,
          history, and files from Slack, Discord, and Telegram—so you don't lose a single thread.
        </p>

        {/* CTA Group */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Button
            variant="primary"
            size="lg"
            href="#register"
            className="bg-white text-slate-900 hover:bg-slate-100 active:bg-slate-200 shadow-lg shadow-black/20 px-8"
          >
            Get Started for Free
            <ArrowRight className="w-4 h-4" />
          </Button>

          <Button
            variant="ghost"
            size="lg"
            href="#contact"
            className="text-slate-400 border border-slate-700 hover:bg-slate-800/50 hover:text-white hover:border-slate-600"
          >
            Talk to Sales
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
