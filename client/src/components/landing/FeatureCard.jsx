
import Card from "../ui/Card";

const FeatureCard = ({ icon: Icon, title, description, className = "" }) => {
  return (
    <Card padding="lg" className={`group h-full ${className}`}>
      {/* Icon Container with Hover Micro-interaction */}
      <div className="w-10 h-10 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center mb-4 transition-all duration-300 ease-out group-hover:bg-indigo-100 group-hover:scale-110">
        <Icon className="w-5 h-5" strokeWidth={2} />
      </div>

      <h3 className="text-lg font-semibold text-slate-900 leading-tight">{title}</h3>

      <p className="mt-2 text-sm text-slate-500 leading-relaxed">{description}</p>
    </Card>
  );
};

export default FeatureCard;
