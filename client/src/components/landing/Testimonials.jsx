
import SectionHeading from "../ui/SectionHeading";
import TestimonialCard from "./TestimonialCard";

const Testimonials = () => {
  // Realistic placeholder data for social proof
  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Chief Technology Officer",
      company: "TechFlow",
      initials: "SC",
      review:
        "Kizuna completely transformed our remote engineering culture. The latency is virtually zero, and the interface is so unobtrusive that it actually helps us focus instead of distracting us.",
    },
    {
      name: "Marcus Johnson",
      role: "Lead Product Designer",
      company: "Craft Studio",
      initials: "MJ",
      review:
        "As a designer, I appreciate tools that respect visual hierarchy. Kizuna is beautiful, minimal, and handles file sharing flawlessly. It's the first chat app my team actually enjoys using.",
    },
    {
      name: "Elena Rodriguez",
      role: "Engineering Manager",
      company: "DataSync",
      initials: "ER",
      review:
        "We migrated from Slack to Kizuna for the speed and security. The permission system is incredibly granular, and the universal search saves us hours of digging through thread history every week.",
    },
  ];

  return (
    <section className="py-20 sm:py-32 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <SectionHeading
          eyebrow="Testimonials"
          title="Loved by high-performance teams"
          subtitle="Don't just take our word for it. Here's what early adopters have to say about building their culture on Kizuna."
          align="center"
          className="mb-16"
        />

        {/* Testimonials Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {testimonials.map((testimonial) => (
            <TestimonialCard
              key={testimonial.name}
              name={testimonial.name}
              role={testimonial.role}
              company={testimonial.company}
              initials={testimonial.initials}
              review={testimonial.review}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
