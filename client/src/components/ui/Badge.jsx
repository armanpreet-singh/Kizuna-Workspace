
const variants = {
  default: "bg-gray-100 dark:bg-white/10 text-gray-700 dark:text-gray-300",
  violet:
    "bg-violet-100 dark:bg-violet-500/15 text-violet-700 dark:text-violet-400 border border-violet-200 dark:border-violet-500/20",
  green:
    "bg-emerald-100 dark:bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border border-emerald-200 dark:border-emerald-500/20",
  blue: "bg-blue-100 dark:bg-blue-500/15 text-blue-700 dark:text-blue-400 border border-blue-200 dark:border-blue-500/20",
  orange:
    "bg-orange-100 dark:bg-orange-500/15 text-orange-700 dark:text-orange-400 border border-orange-200 dark:border-orange-500/20",
};

const Badge = ({ children, variant = "default", className = "" }) => {
  return (
    <span
      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium ${variants[variant]} ${className}`}
    >
      {children}
    </span>
  );
};

export default Badge;
