import Card from "../ui/Card";

/**
 * FeatureCard Component
 *
 * @param {React.ElementType} icon - A Lucide React icon component
 * @param {string} title - The name of the feature
 * @param {string} description - A brief explanation of the feature
 * @param {string} className - Additional custom classes
 */
const FeatureCard = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <Card hover padding="lg" className={`h-full ${className}`}>
      {/* Icon Container */}
      <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4">
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>

      {/* Feature Title */}
      <h3 className="text-lg font-semibold text-slate-900 leading-tight">{title}</h3>

      {/* Feature Description */}
      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{description}</p>
    </Card>
  );
};

export default FeatureCard;
