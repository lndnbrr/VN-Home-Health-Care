import Image from "next/image";
import Link from "next/link";

const whyHomeBased = [
  {
    title: "Support with daily living that keeps you safe at home",
    description:
      "Bathing, dressing, mobility, and light housekeeping become harder with illness or age. An Aide handles these tasks directly, reducing fall risk and other safety concerns that come with struggling through them alone.",
  },
  {
    title: "A trusted, familiar presence for individuals and family caregivers alike",
    description:
      "Consistent, compassionate care from the same Aide builds a relationship of trust. It also gives family caregivers a real break, reducing caregiver burnout.",
  },
  {
    title: "A bridge between medical care and everyday comfort",
    description:
      "Home Health Aides often work alongside skilled nursing or therapy as part of a coordinated care plan, providing the hands-on daily support that keeps the bigger plan on track between visits.",
  },
];

const careProcess = [
  {
    step: 1,
    title: "In-Home Assessment",
    description:
      "A registered nurse visits your home to evaluate your loved one's health, needs, and goals in person.",
  },
  {
    step: 2,
    title: "Personalized Care Plan Built",
    description:
      "The RN designs an individualized plan of care — this is where “tailored to your needs” becomes a real, written plan, not just a phrase.",
  },
  {
    step: 3,
    title: "Hands-On Care from Your Aide",
    description:
      "Your Home Health Aide carries out that plan day to day, giving hands-on support with the specific activities it calls for.",
  },
  {
    step: 4,
    title: "Ongoing Oversight & Reassessment",
    description:
      "The RN continues to check in and adjusts the plan as needs change — care isn't set once and forgotten.",
  },
];

const services = [
  {
    title: "Mobility & Transfers",
    description:
      "Support with walking, transferring, and moving safely around the home, reducing the risk of falls so the patient can move through their day with confidence.",
      image: "/images/home_health_aide_images/mobility.png",
      alt: "A home health aide assisting a patient around their home",
  },
  {
    title: "Nutrition",
    description:
      "Help with eating, feeding, and staying hydrated, ensuring the patient gets the nourishment they need in a way that's comfortable and unhurried.",
      image: "/images/home_health_aide_images/nutrition.png",
      alt: "A home health aide serving breakfast to a patient",
  },
  {
    title: "Personal Care",
    description:
      "Bathing, grooming, and dressing assistance, delivered with patience and respect for the patient's privacy and preferences.",
      image: "/images/home_health_aide_images/personal_care.png",
      alt: "A home health aide placing a hat onto of a patient's head",
  },
  {
    title: "Toileting & Hygiene",
    description:
      "Respectful, discreet assistance with toileting and personal hygiene needs, handled with the sensitivity and dignity this kind of care deserves.",
      image: "/images/home_health_aide_images/hygeine.png",
      alt: "A home health aide trimming a patient's nails",
  },
];

const whoItsFor = [
  {
    description:"Recovering from a hospital stay or surgery",
    image: "/images/logo_images/female_logo.png"
  },
  {
    description:"Living with a chronic condition, such as limited mobility or memory loss",
    image: "/images/logo_images/male_logo.png"
  },
  {
    description:"Managing day-to-day tasks with a little extra help",
    image: "/images/logo_images/female_logo.png"
  },
  {
    description:"A family caregiver who needs additional support",
    image: "/images/logo_images/male_logo.png"
  },
];

export default function HHAide () {
  return (
    <>
      <div className="relative w-full overflow-hidden">
        <Image src="/images/home_health_aide_images/home_health_aide_hero.png" alt="Patients and workers coming together" fill priority className="object-cover"/>
        <div className="absolute inset-0 bg-black/70"/>
        <div className="relative z-10 max-w-5xl mx-auto px-4 pt-8 sm:pt-8 md:pt-16 lg:pt-24 pb-8 sm:pb-8 md:pb-16 lg:pb-24 text-center">
          <h1 className="text-5xl sm:text-6xl lg:text-[100px] font-bold underline text-secondary">
            Home Health Aides
          </h1>
          <div className="flex flex-col">
            <p className="text-lg sm:text-xl text-left mt-6 text-secondary self-center">Our Home Health Aides bring comfort, independence, and safety home.</p>
            <p className="text-lg sm:text-xl text-left mt-6 text-secondary max-w-3xl self-center">
            A Home Health Aide provides hands-on support with everyday activities for individuals facing illness, disability, or the challenges of aging. </p>
          </div>
        </div>
      </div>
      <section id="why-home-based" className="max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-8">
          Why Home Health Aide Services?
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

      <section id="care-plan-process" className="max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-4">
          Who&apos;s Overseeing Your Care
        </h2>
        <p className="text-lg sm:text-xl text-center max-w-2xl mx-auto mb-10 text-primary">
          Your Home Health Aide never works alone. Every plan of care is created and supervised by a registered nurse.
        </p>
        <div className="flex flex-col lg:flex-row lg:items-stretch gap-4">
          {careProcess.flatMap((item, index) => {
            const card = (
              <div
                key={item.step}
                className="flex-1 border border-color-primary border-4 rounded-2xl p-6 text-primary"
              >
                <div className="w-10 h-10 rounded-full bg-primary text-secondary font-bold flex items-center justify-center mb-3">
                  {item.step}
                </div>
                <h3 className="text-xl font-bold mb-2">{item.title}</h3>
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
      </section>

      <section id="services" className="max-w-5xl mx-auto px-4 py-8 sm:py-8 md:py-16 lg:py-24">
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-primary-dark text-center mb-8">
          Home Health Aide Services We Provide
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
        <p className="text-lg sm:text-xl mb-4">Home Health Aide may be right for you or a loved one if you are:</p>
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
        Ready to Talk Through Your In-Home Support Options?
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
