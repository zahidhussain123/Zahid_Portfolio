import { testimonials } from "../constants";
import TitleHeader from "../components/TitleHeader";
import TestimonialCard from "../components/TestimonialCard";

const Testimonials = () => {
  return (
    <section id="testimonials" className="flex-center section-padding">
      <div className="w-full h-full md:px-10 px-5">
        <TitleHeader
          title="What People Say About Me?"
          sub="⭐️ Customer feedback highlights"
        />

        <div className="mt-16 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-fr">
          {testimonials?.map((testimonial, index) => (
            <TestimonialCard
              key={index}
              testimonial={testimonial}
              index={index}
            /> 
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
