

const Card = ({ children, padding = "md", hover = false, className = "" }) => {
  // Padding tokens mapped to Design System spacing scale
  const paddingStyles = {
    sm: "p-4",
    md: "p-6",
    lg: "p-8",
  };

  // Base styles mapped to STRICTLY OPAQUE surface layers
  const baseStyles = `
    bg-white dark:bg-slate-800 
    rounded-xl 
    border border-slate-200 dark:border-slate-700 
    shadow-sm
    ${paddingStyles[padding] || paddingStyles.md}
  `.trim();

  // Hover styles: Rely on border lightness for dark mode elevation
  const hoverStyles = hover
    ? "transition-all duration-300 ease-in-out hover:shadow-md hover:-translate-y-1 hover:border-slate-300 dark:hover:border-slate-600 dark:hover:shadow-black/40"
    : "";

  return <div className={`${baseStyles} ${hoverStyles} ${className}`}>{children}</div>;
};

export default Card;
