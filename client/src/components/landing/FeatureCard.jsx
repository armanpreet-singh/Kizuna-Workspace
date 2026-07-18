import Card from "../ui/Card";

const FeatureCard = ({ icon: Icon, title, description, gradient, className = "", children }) => {
  return (
    <Card hover className={`p-6 md:p-7 group ${className}`}>
      <div
        className={`w-10 h-10 rounded-xl bg-gradient-to-br ${gradient} flex items-center justify-center mb-5 group-hover:scale-110 transition-transform duration-300`}
      >
        <Icon size={20} className="text-white" />
      </div>
      <h3 className="text-base font-semibold text-gray-900 dark:text-white mb-2">{title}</h3>
      <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{description}</p>
      {children}
    </Card>
  );
};

export default FeatureCard;
