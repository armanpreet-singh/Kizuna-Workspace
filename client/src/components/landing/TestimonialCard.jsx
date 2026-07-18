const TestimonialCard = ({ quote, author, role, company,  gradient }) => {
  return (
    <div className="flex flex-col bg-white dark:bg-gray-900 border border-gray-200 dark:border-white/10 rounded-2xl p-6 hover:border-gray-300 dark:hover:border-white/20 hover:shadow-lg dark:hover:shadow-black/20 transition-all duration-300 h-full">
      {/* Stars */}
      <div className="flex gap-0.5 mb-4">
        {[...Array(5)].map((_, i) => (
          <svg
            key={i}
            width="14"
            height="14"
            viewBox="0 0 14 14"
            fill="currentColor"
            className="text-amber-400"
          >
            <path d="M7 0l1.8 5.5H14l-4.6 3.4 1.8 5.5L7 11 2.8 14.4l1.8-5.5L0 5.5h5.2L7 0z" />
          </svg>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="text-sm text-gray-700 dark:text-gray-300 leading-relaxed flex-1 mb-5">
        "{quote}"
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div
          className={`w-9 h-9 rounded-full bg-gradient-to-br ${gradient} flex items-center justify-center flex-shrink-0`}
        >
          <span className="text-white text-sm font-bold">{author[0]}</span>
        </div>
        <div>
          <div className="text-sm font-semibold text-gray-900 dark:text-white">{author}</div>
          <div className="text-xs text-gray-500 dark:text-gray-400">
            {role} · {company}
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialCard;
