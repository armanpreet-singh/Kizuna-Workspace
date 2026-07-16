import { useState } from "react";
import { LayoutDashboard, MessageSquare, User, Smartphone } from "lucide-react";
import SectionHeading from "../ui/SectionHeading";

const ProductPreview = () => {
  const [activeView, setActiveView] = useState("dashboard");
  const views = [
    { id: "dashboard", label: "Dashboard", icon: LayoutDashboard },
    { id: "chat", label: "Group Chat", icon: MessageSquare },
    { id: "profile", label: "Profile", icon: User },
    { id: "mobile", label: "Mobile", icon: Smartphone },
  ];

  return (
    <section
      id="preview"
      className="py-20 sm:py-32 bg-slate-50 dark:bg-slate-900/50 overflow-hidden"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Interface"
          title="Designed for clarity"
          subtitle="Every pixel is intentional. A structured, dark-mode-first environment that reduces eye strain and keeps your team's focus exactly where it belongs."
          align="center"
          className="mb-12"
        />

        <div
          className="flex justify-center mb-10"
          role="tablist"
          aria-label="Product preview views"
        >
          <div className="inline-flex items-center gap-1 p-1 bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
            {views.map((view) => {
              const Icon = view.icon;
              const isActive = activeView === view.id;
              return (
                <button
                  key={view.id}
                  role="tab"
                  aria-selected={isActive}
                  onClick={() => setActiveView(view.id)}
                  className={`flex items-center gap-2 px-4 py-2.5 text-sm font-medium rounded-lg transition-all duration-200 ${
                    isActive
                      ? "bg-slate-900 dark:bg-white text-white dark:text-slate-900 shadow-sm"
                      : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50"
                  }`}
                >
                  <Icon className="w-4 h-4" />
                  <span className="hidden sm:inline">{view.label}</span>
                </button>
              );
            })}
          </div>
        </div>

        <div className="relative max-w-6xl mx-auto">
          <div
            className="absolute -inset-4 bg-gradient-to-tr from-indigo-100 via-cyan-50 to-transparent dark:from-indigo-900/20 dark:via-cyan-900/10 dark:to-transparent rounded-3xl blur-2xl opacity-60 -z-10"
            aria-hidden="true"
          />
          <div className="bg-slate-900 rounded-xl sm:rounded-2xl shadow-2xl shadow-black/20 dark:shadow-black/50 border border-slate-700/50 overflow-hidden">
            {/* Keep the exact same window chrome and panel contents from previous ProductPreview.jsx */}
            <div className="flex items-center gap-2 px-4 py-3 bg-slate-800/80 border-b border-slate-700/50">
              {" "}
              {/*...*/}{" "}
            </div>
            <div className="h-[500px] bg-slate-900 relative"> {/*...*/} </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductPreview;
