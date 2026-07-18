import Button from "../ui/Button";
import RevealOnScroll from "../ui/RevealOnScroll";
import { ArrowRight, Sparkles } from "lucide-react";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden bg-white dark:bg-gray-950">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-br from-violet-50 via-white to-indigo-50 dark:from-violet-950/30 dark:via-gray-950 dark:to-indigo-950/20" />

      {/* Orbs */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-400/10 dark:bg-violet-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-0 right-0 w-[300px] h-[300px] bg-indigo-400/10 dark:bg-indigo-600/10 rounded-full blur-3xl pointer-events-none" />

      {/* Grid */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
        style={{
          backgroundImage: `linear-gradient(rgba(139, 92, 246, 0.5) 1px, transparent 1px), linear-gradient(to right, rgba(139, 92, 246, 0.5) 1px, transparent 1px)`,
          backgroundSize: "60px 60px",
        }}
      />

      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <RevealOnScroll direction="none">
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-violet-100 dark:bg-violet-500/15 border border-violet-200 dark:border-violet-500/20 text-violet-700 dark:text-violet-400 text-xs font-medium mb-8">
            <Sparkles size={12} />
            Free forever for small teams
          </div>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={100}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
            Your team deserves
            <br />
            <span className="bg-gradient-to-r from-violet-600 to-indigo-600 dark:from-violet-400 dark:to-indigo-400 bg-clip-text text-transparent">
              better tools
            </span>
          </h2>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={200}>
          <p className="mt-6 text-lg text-gray-600 dark:text-gray-400 leading-relaxed max-w-xl mx-auto">
            Join 10,000+ teams who've made the switch to Kizuna. Set up your workspace in minutes
            and experience the difference.
          </p>
        </RevealOnScroll>

        <RevealOnScroll direction="up" delay={300}>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="xl">
              Create your workspace
              <ArrowRight size={18} />
            </Button>
            <Button variant="secondary" size="xl">
              Talk to sales
            </Button>
          </div>
          <p className="mt-5 text-sm text-gray-500 dark:text-gray-500">
            No credit card · Free for up to 10 members · Cancel anytime
          </p>
        </RevealOnScroll>

        {/* Trust indicators */}
        <RevealOnScroll direction="none" delay={450}>
          <div className="mt-16 grid grid-cols-3 gap-4 max-w-sm mx-auto">
            {[
              { label: "SOC 2 Type II", icon: "🔒" },
              { label: "GDPR Ready", icon: "🇪🇺" },
              { label: "HIPAA Compliant", icon: "🏥" },
            ].map((item) => (
              <div
                key={item.label}
                className="flex flex-col items-center gap-1.5 px-3 py-3 rounded-xl bg-white/60 dark:bg-white/5 border border-gray-200 dark:border-white/10"
              >
                <span className="text-lg">{item.icon}</span>
                <span className="text-xs text-gray-600 dark:text-gray-400 font-medium text-center leading-tight">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
        </RevealOnScroll>
      </div>
    </section>
  );
};

export default CTASection;
