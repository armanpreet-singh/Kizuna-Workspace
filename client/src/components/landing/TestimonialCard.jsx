
const TestimonialCard = ({ name, role, company, review, initials, avatarTheme = "primary" }) => {
  const themes = {
    primary: "bg-brand-primary/10 text-brand-primary border-l-brand-primary/50",
    accent: "bg-brand-accent/10 text-brand-accent border-l-brand-accent/50",
    success: "bg-state-success/10 text-state-success border-l-state-success/50",
  };

  const activeTheme = themes[avatarTheme] || themes.primary;

  return (
    <article
      className={`h-full bg-surface-base border border-border-default border-l-2 ${activeTheme.split(" ").pop()} rounded-xl shadow-sm p-6 transition-shadow duration-300 ease-in-out hover:shadow-md`}
    >
      {/* Quote - Upgraded to Body LG for editorial readability */}
      <blockquote className="flex-1">
        <p className="text-body-lg text-typography-secondary leading-relaxed">
          &ldquo;{review}&rdquo;
        </p>
      </blockquote>

      {/* Author Information */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-border-default">
        <div
          className={`w-10 h-10 rounded-full flex items-center justify-center text-body-base font-semibold flex-shrink-0 ${activeTheme.split(" ").slice(0, 2).join(" ")}`}
          aria-hidden="true"
        >
          {initials}
        </div>

        <div>
          <p className="text-h4 text-typography-primary leading-tight">{name}</p>
          <p className="text-caption text-typography-secondary mt-0.5">
            {role} @ {company}
          </p>
        </div>
      </div>
    </article>
  );
};

export default TestimonialCard;
