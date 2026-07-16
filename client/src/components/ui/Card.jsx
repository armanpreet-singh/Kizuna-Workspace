const Card = ({ children, padding = "md", hover = false, className = "" }) => {
  const paddingStyles = { sm: "p-4", md: "p-6", lg: "p-8" };
  const baseStyles =
    `bg-white dark:bg-slate-800/50 rounded-xl border border-slate-200 dark:border-slate-700/50 shadow-sm ${paddingStyles[padding] || paddingStyles.md}`.trim();
  const hoverStyles = hover
    ? "transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-600 dark:hover:shadow-slate-900/50"
    : "";

  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>;
};

export default Card;
