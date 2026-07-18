const SectionHeading = ({ eyebrow, title, description, centered = false, className = "" }) => {
  return (
    <div className={`${centered ? "text-center" : ""} ${className}`}>
      {eyebrow && (
        <div
          className={`inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-violet-600 dark:text-violet-400 mb-4`}
        >
          <span className="w-5 h-px bg-violet-500" />
          {eyebrow}
          <span className="w-5 h-px bg-violet-500" />
        </div>
      )}
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 dark:text-white tracking-tight leading-tight">
        {title}
      </h2>
      {description && (
        <p
          className={`mt-4 text-lg text-gray-600 dark:text-gray-400 leading-relaxed ${
            centered ? "max-w-2xl mx-auto" : "max-w-2xl"
          }`}
        >
          {description}
        </p>
      )}
    </div>
  );
};

export default SectionHeading;
