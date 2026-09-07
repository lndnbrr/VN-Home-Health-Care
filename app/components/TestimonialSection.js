export default function TestimonialSection() {
  
  const testimonials = [
    {
      id: 1,
      author_name: "Jane D.",
      rating: 5,
      text: "The nursing staff was attentive and truly cared about my mother's recovery. We felt supported every step of the way.",
      relative_time_description: "a month ago",
    },
    {
      id: 2,
      author_name: "Robert M.",
      rating: 5,
      text: "Our physical therapist was patient and encouraging. I'm walking again thanks to the care I received at home.",
      relative_time_description: "2 months ago",
    },
    {
      id: 3,
      author_name: "Carol S.",
      rating: 4,
      text: "Scheduling was easy and the aides were always on time and respectful. Highly recommend this agency.",
      relative_time_description: "3 months ago",
    },
    {
      id: 4,
      author_name: "Thomas H.",
      rating: 5,
      text: "Compassionate, professional care. The team coordinated closely with our family doctor and kept us informed.",
      relative_time_description: "4 months ago",
    },
  ];

  const loopTestimonials = [...testimonials, ...testimonials];

  return (
    <section
      id="testimonials"
      className="mbl-section-padding sm:sm-section-padding md:md-section-padding lg:lg-section-padding overflow-x-hidden"
    >
      <h2 className="flex justify-center font-bold underline text-primary text-[4vw]">
        What Our Patients Say
      </h2>
      <div className="mt-6">
        <div className="testimonial-track flex gap-6">
          {loopTestimonials.map((testimonial, index) => (
            <div
              key={`${testimonial.id}-${index}`}
              className="flex-none w-[280px] sm:w-[320px] flex flex-col border border-color-primary border-4 rounded-2xl p-6 text-primary"
            >
              <div className="text-yellow-500 text-[4vw] sm:text-lg" aria-hidden="true">
                {"★".repeat(testimonial.rating)}
                {"☆".repeat(5 - testimonial.rating)}
              </div>
              <p className="text-[3.5vw] sm:text-base mt-2 flex-1">
                {testimonial.text}
              </p>
              <div className="mt-4 font-bold text-[3vw] sm:text-sm">
                {testimonial.author_name}
              </div>
              <div className="text-[2.5vw] sm:text-xs italic">
                {testimonial.relative_time_description} · Google Review
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
