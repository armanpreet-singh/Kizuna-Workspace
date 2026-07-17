import { ArrowRight, Play, Paperclip, Smile, Send, CheckCheck } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative overflow-hidden pt-spacing-section-m pb-spacing-section-s">
      {/* Subtle radial gradient background effect using brand colors */}
      <div
        className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[600px] bg-brand-primary/10 rounded-full blur-3xl pointer-events-none"
        aria-hidden="true"
      />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Text Content - Product Definition First */}
        <div className="max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-primary/30 bg-brand-primary/10 mb-8">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-primary" aria-hidden="true"></span>
            <span className="text-caption font-medium tracking-wide text-brand-primary">
              Now in Public Beta
            </span>
          </div>

          {/* Headline - Display XL (64px) - Defines the product instantly */}
          <h1 className="text-display-xl font-bold text-typography-primary tracking-tight leading-[1.1]">
            The chat platform for{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-primary to-brand-accent">
              focused teams
            </span>
          </h1>

          {/* Subheadline - Contrasts against the status quo */}
          <p className="mt-6 text-body-lg leading-relaxed text-typography-secondary max-w-2xl mx-auto">
            Kizuna replaces noisy channels with organized, real-time conversations. Less clutter,
            more context, faster decisions.
          </p>

          {/* CTA Group - Clear hierarchy */}
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="#register"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-body-base font-medium text-surface-base bg-brand-primary hover:opacity-90 rounded-lg transition-opacity duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-bg"
            >
              Try Kizuna Free
              <ArrowRight className="w-4 h-4" />
            </a>
            <a
              href="#preview"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 text-body-base font-medium text-typography-secondary hover:text-typography-primary hover:bg-surface-high rounded-lg transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-brand-primary focus-visible:ring-offset-2 focus-visible:ring-offset-surface-bg"
            >
              <Play className="w-4 h-4" />
              See how it works
            </a>
          </div>
        </div>

        {/* Realistic Kizuna Application Preview - "Live" State */}
        <div className="relative mt-16 sm:mt-20 max-w-6xl mx-auto">
          <div className="bg-surface-base rounded-2xl shadow-2xl border border-border-default overflow-hidden">
            <div className="flex h-[350px] sm:h-[500px] text-typography-secondary">
              {/* Left Sidebar: Channels */}
              <div className="hidden sm:flex flex-col w-60 border-r border-border-default bg-surface-base p-4 gap-1">
                <div className="h-4 w-3/4 bg-surface-high rounded mb-4" aria-hidden="true"></div>

                <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-surface-high text-typography-primary text-body-base font-medium">
                  <span className="text-typography-secondary">#</span> general
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded text-body-base">
                  <span className="text-state-muted">#</span> design
                </div>
                <div className="flex items-center gap-2 px-2 py-1.5 rounded bg-brand-primary/10 text-brand-primary text-body-base font-medium border border-brand-primary/20">
                  <span className="text-brand-primary/70">#</span> engineering
                  <span className="ml-auto bg-state-danger text-surface-base text-[10px] font-bold px-1.5 rounded-full">
                    3
                  </span>
                </div>
              </div>

              {/* Center: Chat Window */}
              <div className="flex-1 flex flex-col bg-surface-bg">
                {/* Channel Header */}
                <div className="h-14 border-b border-border-default px-6 flex items-center justify-between flex-shrink-0 bg-surface-base">
                  <div className="flex items-center gap-2 text-body-base font-medium text-typography-primary">
                    <span className="text-typography-secondary text-lg">#</span> engineering
                  </div>
                </div>

                {/* Messages Area - Enhanced for "Live" feeling */}
                <div className="flex-1 p-6 flex flex-col gap-5 overflow-hidden">
                  {/* Message with Thread Preview & Reaction */}
                  <div className="flex gap-3">
                    <div
                      className="w-8 h-8 rounded-full bg-brand-primary/20 border border-brand-primary/30 flex-shrink-0 flex items-center justify-center text-[10px] text-brand-primary font-bold"
                      aria-hidden="true"
                    >
                      SC
                    </div>
                    <div className="flex-1">
                      <div className="flex items-baseline gap-2">
                        <span className="text-body-base font-semibold text-typography-primary">
                          Sarah C.
                        </span>
                        <span className="text-caption text-state-muted">10:42 AM</span>
                      </div>
                      <p className="text-body-base text-typography-secondary mt-1">
                        Just pushed the new auth flow to staging.
                      </p>

                      {/* Live Interaction 1: Message Reaction */}
                      <div className="mt-1.5 flex items-center gap-2">
                        <span className="inline-flex items-center gap-1 px-1.5 py-0.5 bg-surface-high border border-border-default rounded-md text-caption text-typography-secondary">
                          👀 2
                        </span>
                      </div>

                      {/* Live Interaction 2: Inline Thread Preview */}
                      <a
                        href="#"
                        className="mt-2 inline-flex items-center gap-1.5 px-2 py-1 bg-surface-high hover:bg-state-hover border border-border-default rounded-lg text-caption text-brand-primary font-medium transition-colors duration-300"
                      >
                        <svg
                          className="w-3 h-3"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M7 8h10M7 12h4m1 8l-4-4H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-3l-4 4z"
                          />
                        </svg>
                        View 3 replies
                      </a>
                    </div>
                  </div>

                  {/* Self Message with Read Receipt */}
                  <div className="flex gap-3 self-end max-w-[70%]">
                    <div className="flex-1 flex flex-col items-end">
                      <div className="bg-brand-primary/20 border border-brand-primary/30 rounded-xl rounded-tr-sm px-4 py-2.5">
                        <p className="text-body-base text-typography-primary">
                          Looks great. I'll run the integration tests now.
                        </p>
                      </div>
                      {/* Live Interaction 3: Read Receipts */}
                      <div className="flex items-center gap-1.5 mt-1 mr-1">
                        <CheckCheck
                          className="w-3.5 h-3.5 text-brand-accent"
                          aria-label="Read by all recipients"
                        />
                        <span className="text-caption text-state-muted">10:44 AM</span>
                      </div>
                    </div>
                    <div
                      className="w-8 h-8 rounded-full bg-brand-accent/20 border border-brand-accent/30 flex-shrink-0 flex items-center justify-center text-[10px] text-brand-accent font-bold"
                      aria-hidden="true"
                    >
                      MJ
                    </div>
                  </div>

                  {/* Typing Indicator */}
                  <div className="flex gap-3 items-center">
                    <div
                      className="w-8 h-8 rounded-full bg-surface-high flex-shrink-0"
                      aria-hidden="true"
                    ></div>
                    <div
                      className="bg-surface-high border border-border-default rounded-xl px-4 py-3 flex items-center gap-1.5"
                      aria-label="Elena is typing"
                    >
                      <div className="w-1.5 h-1.5 bg-state-muted rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-state-muted rounded-full animate-bounce"></div>
                      <div className="w-1.5 h-1.5 bg-state-muted rounded-full animate-bounce"></div>
                    </div>
                  </div>
                </div>

                {/* Input Area */}
                <div className="p-4 border-t border-border-default bg-surface-base">
                  <div className="flex items-center gap-3 bg-surface-high border border-border-default rounded-lg px-4 py-2.5">
                    <Paperclip className="w-4 h-4 text-state-muted" aria-hidden="true" />
                    <span className="text-body-base text-state-muted flex-1">
                      Message #engineering...
                    </span>
                    <Smile className="w-5 h-5 text-state-muted" aria-hidden="true" />
                    <Send className="w-5 h-5 text-state-muted" aria-hidden="true" />
                  </div>
                </div>
              </div>

              {/* Right Sidebar: Users */}
              <div className="hidden lg:flex flex-col w-56 border-l border-border-default bg-surface-base p-4 gap-3">
                <span className="text-caption font-semibold text-state-muted uppercase tracking-wider mb-2">
                  Online — 3
                </span>

                <div className="flex items-center gap-2">
                  <div
                    className="relative w-6 h-6 rounded-full bg-brand-primary/20 flex items-center justify-center text-[8px] text-brand-primary font-bold"
                    aria-hidden="true"
                  >
                    SC
                  </div>
                  <span className="text-body-base text-typography-secondary truncate">
                    Sarah C.
                  </span>
                  <span
                    className="ml-auto w-2 h-2 rounded-full bg-state-success"
                    aria-hidden="true"
                  ></span>
                </div>
                <div className="flex items-center gap-2">
                  <div
                    className="relative w-6 h-6 rounded-full bg-brand-accent/20 flex items-center justify-center text-[8px] text-brand-accent font-bold"
                    aria-hidden="true"
                  >
                    MJ
                  </div>
                  <span className="text-body-base text-typography-secondary truncate">
                    Marcus J.
                  </span>
                  <span
                    className="ml-auto w-2 h-2 rounded-full bg-state-success"
                    aria-hidden="true"
                  ></span>
                </div>
                <div className="flex items-center gap-2 opacity-50">
                  <div
                    className="relative w-6 h-6 rounded-full bg-surface-high flex items-center justify-center text-[8px] text-state-muted font-bold"
                    aria-hidden="true"
                  >
                    ER
                  </div>
                  <span className="text-body-base text-state-muted truncate">Elena R.</span>
                  <span
                    className="ml-auto w-2 h-2 rounded-full bg-state-muted"
                    aria-hidden="true"
                  ></span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
