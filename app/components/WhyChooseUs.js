export default function WhyChooseUs() {
  const reasons = [
    {
      id: 1,
      title: "Longevity",
      description: "We've built two decades of trusted, Medicare-certified home health care right here in your community.",
    },
    {
      id: 2,
      title: "Seasoned Health Care Professionals",
      description: "Your care team includes Licensed Registered Nurses, Licensed Therapists, Home Health Aides, and Licensed Medical Social Workers with over 30 years of experience.",
    },
    {
      id: 3,
      title: "Individualized Care Plans",
      description: "Every plan of care is tailored to your specific diagnosis, needs, and goals. We never approach a patient with a one-size-fits-all template.",
    },
    {
      id: 4,
      title: "One Coordinated Care Team",
      description: "Nurses, Rehab Therapists, Home Health Aides, and Medical Social Workers all work together under a single plan. There will be no need to juggle separate providers.",
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="mbl-section-padding sm:sm-section-padding md:md-section-padding lg:lg-section-padding"
    >
      <h2 className="flex justify-center font-bold underline text-primary text-[4vw]">
        Why VN Home Health Care?
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 p-4">
        {reasons.map((reason) => (
          <div
            key={reason.id}
            className="flex flex-col flex-1 border border-color-primary border-4 rounded-2xl p-6 text-primary"
          >
            <h3 className="text-[5vw] sm:text-[3vw] md:text-xl lg:text-2xl font-bold">
              {reason.title}
            </h3>
            <p className="text-[3.5vw] sm:text-[2.2vw] md:text-base lg:text-xl mt-2">
              {reason.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
