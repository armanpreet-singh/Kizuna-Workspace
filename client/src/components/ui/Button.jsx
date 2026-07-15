
import { Loader2 } from "lucide-react";

/**
 * Button Component
 *
 * @param {string} variant - 'primary' | 'secondary' | 'ghost' | 'link'
 * @param {string} size - 'sm' | 'md' | 'lg'
 * @param {boolean} disabled - Disables the button
 * @param {boolean} isLoading - Shows a spinner and disables interaction
 * @param {string} href - If provided, renders an <a> tag instead of <button>
 * @param {React.ReactNode} children - The button label/content
 * @param {object} props - Additional HTML attributes
 */
const Button = ({
  variant = "primary",
  size = "md",
  disabled = false,
  isLoading = false,
  href,
  children,
  className = "",
  ...props
}) => {
  // Base styles applying Design System typography and border radius
  const baseStyles = `
    inline-flex items-center justify-center font-medium 
    transition-all duration-200 ease-in-out 
    focus:outline-none focus-visible:ring-2 focus-visible:ring-indigo-500 focus-visible:ring-offset-2
    disabled:opacity-50 disabled:cursor-not-allowed
    rounded-lg
    ${className}
  `.trim();

  // Size tokens mapped to Design System spacing and typography
  const sizeStyles = {
    sm: "text-xs px-3 py-1.5 gap-1.5",
    md: "text-sm px-4 py-2.5 gap-2",
    lg: "text-base px-6 py-3 gap-2.5",
  };

  // Variant tokens mapped exactly to the Design System color palette and shadows
  const variantStyles = {
    primary: `
      bg-indigo-600 text-white shadow-sm 
      hover:bg-indigo-700 active:bg-indigo-800
    `,
    secondary: `
      bg-slate-100 text-slate-900 border border-slate-200 
      hover:bg-slate-200 active:bg-slate-300
    `,
    ghost: `
      text-slate-500 bg-transparent 
      hover:bg-slate-100 hover:text-slate-900 
      active:bg-slate-200
    `,
    link: `
      text-indigo-600 bg-transparent underline-offset-4 
      hover:underline hover:text-indigo-700 
      active:text-indigo-800 p-0
    `,
  };

  // Combine classes safely
  const combinedStyles = `
    ${baseStyles} 
    ${variantStyles[variant] || variantStyles.primary} 
    ${variant !== "link" ? sizeStyles[size] || sizeStyles.md : ""}
  `.trim();

  // Inner content handler to support loading spinner
  const content = (
    <>
      {isLoading && <Loader2 className="w-4 h-4 animate-spin" />}
      {children}
    </>
  );

  // Render as an anchor tag if href is provided (for CTA navigation)
  if (href) {
    return (
      <a href={href} className={combinedStyles} aria-disabled={disabled || isLoading} {...props}>
        {content}
      </a>
    );
  }

  // Default render as a button
  return (
    <button type="button" className={combinedStyles} disabled={disabled || isLoading} {...props}>
      {content}
    </button>
  );
};

export default Button;
