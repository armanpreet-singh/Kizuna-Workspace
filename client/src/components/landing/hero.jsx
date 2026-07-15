import { ArrowRight, Play } from "lucide-react";
import Button from "../ui/Button";
import Card from "../ui/Card";

const Hero = () => {
  return (
    <section className="relative overflow-hidden bg-white pt-24 pb-16 sm:pt-32 sm:pb-24 lg:pt-40">
      {/* Decorative Background Element - Subtle radial gradient glow */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-indigo-100 rounded-full blur-3xl opacity-50 pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-200 bg-indigo-50 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-indigo-600"></span>
            <span className="text-xs font-medium text-indigo-700 tracking-wide">
              Now in Public Beta
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight leading-[1.1]">
            Communication built for <span className="text-indigo-600">modern teams</span>
          </h1>

          {/* Subheadline */}
          <p className="mt-6 text-lg sm:text-xl text-slate-500 leading-relaxed max-w-2xl mx-auto">
            Kizuna bridges the gap between speed and clarity. Experience real-time messaging,
            seamless file sharing, and a refined interface that stays out of your way.
          </p>

          {/* CTA Group */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Button variant="primary" size="lg" href="#register">
              Get Started Free
              <ArrowRight className="w-4 h-4" />
            </Button>
            <Button variant="ghost" size="lg" href="#preview">
              <Play className="w-4 h-4" />
              Watch Demo
            </Button>
          </div>
        </div>

        {/* Product Illustration / Dashboard Preview Placeholder */}
        <div className="relative mt-16 sm:mt-20 max-w-5xl mx-auto">
          {/* Faux Window Chrome */}
          <Card padding="none" className="overflow-hidden shadow-2xl border-slate-200">
            {/* Top Bar */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-50 border-b border-slate-200">
              <div className="flex gap-1.5">
                <div className="w-3 h-3 rounded-full bg-red-400"></div>
                <div className="w-3 h-3 rounded-full bg-amber-400"></div>
                <div className="w-3 h-3 rounded-full bg-emerald-400"></div>
              </div>
              <div className="flex-1 flex justify-center">
                <div className="px-4 py-1 bg-white rounded-md border border-slate-200 text-xs text-slate-400 w-64 text-center truncate">
                  app.kizuna.com/channels/general
                </div>
              </div>
              <div className="w-12"></div> {/* Spacer for centering */}
            </div>

            {/* App Skeleton Layout */}
            <div className="flex h-[400px] sm:h-[500px] bg-white">
              {/* Sidebar Skeleton */}
              <div className="hidden sm:flex flex-col w-60 border-r border-slate-100 p-4 gap-3 bg-slate-50/50">
                <div className="h-4 w-3/4 bg-slate-200 rounded"></div>
                <div className="h-4 w-1/2 bg-slate-200 rounded mt-4"></div>
                <div className="h-4 w-5/6 bg-slate-100 rounded"></div>
                <div className="h-4 w-2/3 bg-slate-100 rounded"></div>
                <div className="h-4 w-4/5 bg-slate-100 rounded mt-4"></div>
                <div className="h-4 w-1/3 bg-slate-100 rounded"></div>
              </div>

              {/* Main Content Skeleton */}
              <div className="flex-1 p-6 flex flex-col gap-4">
                <div className="h-5 w-1/4 bg-slate-200 rounded"></div>
                <div className="flex-1 flex flex-col gap-3 justify-end pb-4">
                  {/* Simulated Chat Bubbles */}
                  <div className="self-start max-w-[60%]">
                    <div className="h-3 w-16 bg-slate-200 rounded mb-1.5"></div>
                    <div className="h-12 w-full bg-slate-100 rounded-xl rounded-tl-sm"></div>
                  </div>
                  <div className="self-end max-w-[50%]">
                    <div className="h-12 w-full bg-indigo-100 rounded-xl rounded-tr-sm"></div>
                  </div>
                  <div className="self-start max-w-[70%]">
                    <div className="h-3 w-20 bg-slate-200 rounded mb-1.5"></div>
                    <div className="h-16 w-full bg-slate-100 rounded-xl rounded-tl-sm"></div>
                  </div>
                </div>
                {/* Input Skeleton */}
                <div className="h-12 w-full bg-slate-50 border border-slate-200 rounded-xl"></div>
              </div>
            </div>
          </Card>

          {/* Fade out bottom edge of mockup */}
          <div
            className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white to-transparent pointer-events-none"
            aria-hidden="true"
          ></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
