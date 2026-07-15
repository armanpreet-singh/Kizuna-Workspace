

/**
 * SectionHeading Component
 *
 * @param {string} eyebrow - Small accent text above the title (e.g., "Features")
 * @param {string} title - The main heading (H2 level)
 * @param {string} subtitle - Supporting descriptive text below the title
 * @param {'left' | 'center'} align - Text alignment, defaults to left
 * @param {string} className - Additional custom classes for the wrapper
 */
const SectionHeading = ({ eyebrow, title, subtitle, align = "left", className = "" }) => {
  const alignmentClasses = align === "center" ? "text-center mx-auto" : "text-left";

  return (
    <div className={`max-w-2xl ${alignmentClasses} ${className}`}>
      {eyebrow && (
        <p className="text-xs font-medium tracking-widest text-indigo-600 uppercase mb-4">
          {eyebrow}
        </p>
      )}

      <h2 className="text-3xl font-semibold text-slate-900 tracking-tight leading-tight">
        {title}
      </h2>

      {subtitle && <p className="text-base text-slate-500 leading-relaxed mt-4">{subtitle}</p>}
    </div>
  );
};

export default SectionHeading;
