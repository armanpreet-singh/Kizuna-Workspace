

const Card = ({ children, className = "", hover = false, ...props }) => {
  return (
    <div
      className={`bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl ${
        hover
          ? "hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300"
          : ""
      } ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;
