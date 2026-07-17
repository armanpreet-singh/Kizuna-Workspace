import { useRevealOnScroll } from "../../hooks/useRevealOnScroll";

const RevealOnScroll = ({ children, className = "" }) => {
  const [ref, isInView] = useRevealOnScroll();

  return (
    <div
      ref={ref}
      className={`transition-all duration-300 ease-out ${
        isInView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-1.5" // ~6px shift, subtle and confident
      } ${className}`}
    >
      {children}
    </div>
  );
};

export default RevealOnScroll;
