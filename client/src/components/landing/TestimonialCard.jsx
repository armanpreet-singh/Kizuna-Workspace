
import Card from "../ui/Card";

/**
 * TestimonialCard Component
 *
 * @param {string} name - The reviewer's name
 * @param {string} role - The reviewer's job title
 * @param {string} company - The reviewer's company name
 * @param {string} review - The testimonial text
 * @param {string} initials - 1-2 character string for the avatar placeholder
 */
const TestimonialCard = ({ name, role, company, review, initials }) => {
  return (
    <Card padding="md" className="flex flex-col h-full">
      {/* Testimonial Quote */}
      <blockquote className="flex-1">
        <p className="text-sm text-slate-600 leading-relaxed">&ldquo;{review}&rdquo;</p>
      </blockquote>

      {/* Author Information */}
      <div className="flex items-center gap-3 mt-6 pt-6 border-t border-slate-100">
        {/* Avatar Placeholder */}
        <div
          className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center text-sm font-semibold flex-shrink-0"
          aria-hidden="true"
        >
          {initials}
        </div>

        <div>
          <p className="text-sm font-medium text-slate-900 leading-tight">{name}</p>
          <p className="text-xs text-slate-500 mt-0.5">
            {role} at {company}
          </p>
        </div>
      </div>
    </Card>
  );
};

export default TestimonialCard;
