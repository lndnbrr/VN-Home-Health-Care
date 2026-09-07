import Image from "next/image";
import Link from "next/link";

const whyHomeBased = [
  {
    title: "Full support in making sense of insurance, paperwork, and next steps",
    description:
      "Between insurance paperwork, coordinating with specialists, and understanding what comes next, managing a health condition can be overwhelming for both you and your loved ones. A medical social worker helps lighten that burden. They help you understand your options, connect with the right resources, and navigate the system with confidence." 
  },
  {
    title: "Support is provided for the whole family",
    description:
      "A diagnosis doesn't just affect the patient. A diagnosis also affects everyone who loves them. Our medical social workers evaluate your current needs and develop an individualized treatment plan.",
  },
  {
    title: "A Full Care Team, Not Just One Provider",
    description:
      "Medicine treats the body, but recovery also depends on the social determinants of health and having a support system that works. Your medical social worker coordinates closely with your nurses, therapists, doctors, and community resources.",
  },
];

const careProcess = [
  {
    step: 1,
    title: "Assess",
    description:
      "The MSW meets with you to evaluate your medical, emotional, and financial needs.",
  },
  {
    step: 2,
    title: "Coordinate",
    description:
      "Based on your evaluation, we develop a treatment plan tailored to your individual needs.",
  },
  {
    step: 3,
    title: "Follow Through",
    description:
      "They stay involved throughout treatment, checking in and adjusting support as your needs change, until you are discharged from home healthcare.",
  },
];

const services = [
  {
    title: "Emotional & Mental Health Support",
    description:
      "Counseling and help coping with the emotional weight of a diagnosis or lifestyle change.",
      image: "/images/medical_social_images/mental_health.jpeg",
      alt:"A medical social worker meeting with a patient over mental health matters",
  },
  {
    title: "Resource & Financial Coordination",
    description:
      "Help with insurance, Medicare, financial assistance, and connecting to community resources (meals, transportation, senior centers).",
      image: "/images/medical_social_images/financial.jpeg",
      alt:"A medical social worker going over financial documents with a patient",
  },
  {
    title: "Care Planning & Coordination",
    description:
      "Working with nurses, doctors, and the broader care team; discharge planning; long-term care planning.",
      image: "/images/medical_social_images/careplan.jpeg",
      alt:"A medical social worker and a few nurses meeting with a patient",
  },
  {
    title: "Family & Caregiver Support",
    description:
      "Helping the family understand the diagnosis and care plan, not just the patient.",
      image: "/images/medical_social_images/family.jpeg",
      alt:"A medical social worker meeting with a patients family for clarity",
  },
];

const whoItsFor = [
  {
    description:"Adjusting to a recent diagnosis",
    image: "/images/logo_images/female_logo.png"
  },
  {
    description:"Feeling overwhelmed by the emotional toll of illness or aging",
    image: "/images/logo_images/male_logo.png"
  },
  {
    description:"Struggling to afford care",
    image: "/images/logo_images/female_logo.png"
  },
  {
    description:"A family member or caregiver",
    image: "/images/logo_images/male_logo.png"
  },
  {
    description:"Feeling isolated during recovery",
    image: "/images/logo_images/female_logo.png"
  },
];



export default function MSW() {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <Image src="/images/medical_social_images/medical_social_worker_hero.jpeg" alt="A medical social worker progressively working with a patient through her post-operation" fill priority className="object-cover"/>
        <div className="absolute inset-0 bg-black/70"/>
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-8 sm:pt-8 md:pt-16 lg:pt-24 pb-8 sm:pb-8 md:pb-16 lg:pb-24 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-[90px] font-bold underline text-secondary">
            Medical Social Worker
          </h1>
          <div className="flex flex-col">
            <p className="text-lg sm:text-xl text-left mt-6 text-secondary self-center">So You and Your Family Don&apos;t Have to Navigate This Alone</p>
            <p className="text-lg sm:text-xl text-left mt-4 text-secondary max-w-4xl self-center">
            A medical social worker helps patients and their families cope with the challenges of illness, injury, or aging. They help patients and their loved ones understand a diagnosis or condition and connect them with the resources needed to manage the emotional, financial, and social needs that come with it.</p>
          </div>
        </div>
      </div>
      <section id="why-home-based" className="max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary-dark text-center mb-8">
          Why Use Medical Social Worker Services?
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {whyHomeBased.map((reason) => (
            <div
              key={reason.title}
              className="border border-color-primary border-4 rounded-2xl p-6 text-primary"
            >
              <h3 className="text-xl font-bold mb-2">{reason.title}</h3>
              <p>{reason.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="care-plan-process" className="flex flex-col max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-4">
          How It Works With the Care Team
        </h2>
        <p className="text-lg sm:text-xl text-primary max-w-4xl self-center">
          Your medical social worker doesn&apos;t work in isolation. They&apos;re an active member of your care team, working alongside your nurses, therapists, and physicians to make sure every part of your recovery is connected.
        </p>
        <div className="flex flex-col lg:flex-row lg:items-stretch my-4 gap-4">
          {careProcess.flatMap((item, index) => {
            const card = (
              <div
                key={item.step}
                className="flex-1 border border-color-primary border-4 rounded-2xl p-6 text-primary"
              >
                <div className="flex items-center">
                  <div className="w-10 h-10 rounded-full bg-primary text-secondary font-bold flex items-center justify-center mb-3">
                    {item.step}
                  </div>
                  <h3 className="text-xl font-extrabold mb-3 ml-3">{item.title}</h3>
                </div>
                <p>{item.description}</p>
              </div>
            );

            if (index === careProcess.length - 1) return [card];

            const arrow = (
              <div
                key={`arrow-${item.step}`}
                className="flex items-center justify-center text-primary font-bold text-2xl lg:text-3xl"
                aria-hidden="true"
              >
                <span className="lg:hidden">↓</span>
                <span className="hidden lg:inline">→</span>
              </div>
            );

            return [card, arrow];
          })}
        </div>
        <p className="text-primary max-w-4xl self-center">
          This coordination helps reduce the risk of hospital readmission and ensures nothing falls through the cracks between appointments.
        </p>
      </section>

      <section id="services" className="max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-8">
          Medical Social Worker Services We Provide
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((service) => (
            <div
              key={service.title}
              className="flex flex-col border border-color-primary border-4 rounded-2xl p-6 text-primary"
            >
              {service.image && (
                <div className="relative w-full h-50 mb-4">
                  <Image
                    src={service.image}
                    alt={service.alt}
                    fill
                    className="rounded-md object-cover"
                  />
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{service.title}</h3>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </section>

      <section id="who-its-for" className="max-w-3xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-6">
          Who This Is For
        </h2>
        <p className="text-lg sm:text-xl mb-4">Medical Social Worker Services may be right for you or a loved one if you are:</p>
        <ul className="list-inside space-y-1 text-lg">
          {whoItsFor.map((item) => (
            <div key={item.description} className="flex flex-row border rounded-xl px-2 py-2 bg-primary text-hover-c">
              <Image src={item.image} alt="Person default icon" width={150} height={150}/>
              <li className="self-center">{item.description}</li>
            </div>
          ))}

        </ul>
      </section>

      <section className="max-w-3xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24 text-center">
        <h2 className="text-2xl sm:text-3xl font-bold text-primary-dark mb-4">
        Curious to see how MSW services may benefit you?
        </h2>
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <Link
            href="/pages/contact"
            className="w-[80%] sm:w-auto text-center bg-primary text-secondary font-bold px-6 py-3 rounded-md"
          >
            Contact Us
          </Link>
          <a
            href="tel:+12482543582"
            className="w-[80%] sm:w-auto text-center border-2 border-primary text-primary font-bold px-6 py-3 rounded-md"
          >
            Call (248) 254-3582
          </a>
        </div>
      </section>
    </>
  );
}
